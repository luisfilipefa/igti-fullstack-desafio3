import "react-toastify/dist/ReactToastify.css";

import * as api from "./api/api";

import {
  Box,
  ChakraProvider,
  Flex,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

import Months from "./components/Months";
import ResetButton from "./components/ResetButton";
import Summary from "./components/Summary";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import Years from "./components/Years";
import { theme } from "./styles/theme";

export interface Todo {
  id: string;
  day: number;
  month: number;
  year: number;
  period: string;
  date: string;
  description: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { years, months, tasksSummary } = api.createHeaderData(todos);
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getTodos();
      setTodos(response);
    };

    setTimeout(() => {}, 2000);

    fetchData();
    setIsLoading(!isLoading);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getTodos(currentYear, currentMonth);
      setTodos(response);
    };

    fetchData();
    setIsLoading(!isLoading);
  }, [currentYear, currentMonth]);

  const handleCheckTodo = async (todo: Todo) => {
    try {
      const response = await api.updateTodo(todo);
      console.log(response);

      if (!todo.done) {
        toast.success("Tarefa concluída");
      }
    } catch {
      toast.error("Erro ao atualizar a tarefa");
    }
  };

  return (
    <ChakraProvider theme={theme}>
      {isLoading && (
        <Flex align="center" justifyContent="center" w="100%" h="100%">
          <Spinner />
        </Flex>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <Box p="4" maxW={768}>
        <Stack spacing="4" mb="6">
          <Text align="center" fontSize="30" fontWeight="bold">
            React Todos
          </Text>
          <ResetButton
            setCurrentYear={setCurrentYear}
            setCurrentMonth={setCurrentMonth}
          />
          <Years
            years={years}
            setCurrentYear={setCurrentYear}
            isLoading={isLoading}
          />
          <Months
            months={months}
            setCurrentMonth={setCurrentMonth}
            isLoading={isLoading}
          />
          <Summary tasksSummary={tasksSummary} />
        </Stack>
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCheckTodo={handleCheckTodo}
            />
          ))}
        </TodoList>
      </Box>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
