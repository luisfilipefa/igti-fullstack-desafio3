import { Flex, FlexProps, HStack } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface ItemContainerProps extends FlexProps {
  children: ReactNode;
}

export default function ItemContainer({
  children,
  ...rest
}: ItemContainerProps) {
  return (
    <Flex justifyContent="center" {...rest}>
      <HStack sTextacing="4">{children}</HStack>
    </Flex>
  );
}
