import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export interface ScoreBoxProps {
  value?: number;
}

function ScoreBox({ value = 0 }: ScoreBoxProps) {
  return (
    <Box backgroundColor="white" paddingX={4} borderRadius={2} boxShadow="xs">
      <Heading size="7xl" fontFamily="mono" fontWeight="normal">
        {value}
      </Heading>
    </Box>
  );
}

export default ScoreBox;
