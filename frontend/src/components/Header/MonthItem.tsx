import { Text } from "@chakra-ui/layout";

interface MonthsProps {
  month: string;
}

export default function MonthItem({ month }: MonthsProps) {
  return <Text>{month}</Text>;
}
