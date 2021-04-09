import { Container, Flex, Text, VStack } from "@chakra-ui/layout";

import ItemContainer from "./ItemContainer";
import MonthItem from "./MonthItem";
import Summary from "./SummaryItem";
import YearItem from "./YearItem";

interface HeaderProps {
  years: string[];
  months: string[];
  tasksSummary: {
    tasksTotal: number;
    tasksDone: number;
    tasksUndone: number;
  };
}

export default function index() {
  return (
    <Container maxW="container.lg">
      <Flex as="header" direction="column">
        <VStack spacing="4">
          <Text as="h1" fontSize="25" fontWeight="bold">
            React Todos
          </Text>
          <ItemContainer>
            <YearItem year={"2020"} />
          </ItemContainer>

          <ItemContainer>
            <MonthItem month={"JAN"} />
          </ItemContainer>

          <ItemContainer>
            <Summary title="Total de tarefas" summary={99} />
            <Summary title="Tarefas cumpridas" summary={47} />
            <Summary title="Tarefas não cumpridas" summary={52} />
          </ItemContainer>
        </VStack>
      </Flex>
    </Container>
  );
}
