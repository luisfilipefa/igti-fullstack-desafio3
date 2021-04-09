import { Text } from "@chakra-ui/layout";

interface SummaryProps {
  title: string;
  summary: number;
}

export default function SummaryItem({ title, summary }: SummaryProps) {
  return (
    <Text>
      {title}: {summary}
    </Text>
  );
}
