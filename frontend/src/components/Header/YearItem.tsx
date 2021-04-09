import { Text } from "@chakra-ui/layout";

interface YearsProps {
  year: string;
}

export default function YearItem({ year }: YearsProps) {
  return <Text>{year}</Text>;
}
