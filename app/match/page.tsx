"use client";

import {
  Box,
  Button,
  Code,
  Heading,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import useMatch from "../../store/useMatch";
import { useState } from "react";
import { TeamKey } from "../../store/useTeam/types/Team";

function MatchPage() {
  const matchState = useMatch();
  const { startMatch, scorePoint, missPoint, undo } = useMatch();
  const [selectedTeam, setSelectedTeam] = useState<TeamKey>("A");

  return (
    <Box p={6} maxW="800px" mx="auto">
      <Heading mb={6}>Pickleball Match Debug</Heading>

      {/* Match State Display */}
      <Box mb={6}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          Current Match State:
        </Text>
        <Code
          display="block"
          whiteSpace="pre-wrap"
          p={4}
          borderRadius="md"
          fontSize="sm"
          overflow="auto">
          {JSON.stringify(matchState, null, 2)}
        </Code>
      </Box>

      {/* Actions */}
      <Stack gap={4}>
        {/* Start Match Section */}
        {!matchState.match.isActive && (
          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Start Match:
            </Text>
            <Stack direction="row" align="center" gap={2}>
              <Text>Starting Team:</Text>
              <ButtonGroup variant="outline">
                <Button
                  colorScheme={selectedTeam === "A" ? "blue" : "gray"}
                  onClick={() => setSelectedTeam("A")}>
                  Team A
                </Button>
                <Button
                  colorScheme={selectedTeam === "B" ? "blue" : "gray"}
                  onClick={() => setSelectedTeam("B")}>
                  Team B
                </Button>
              </ButtonGroup>
              <Button
                colorScheme="green"
                onClick={() => startMatch(selectedTeam)}>
                Start Match
              </Button>
            </Stack>
          </Box>
        )}

        {/* Match Actions */}
        {matchState.match.isActive && (
          <Box>
            <Text fontSize="md" fontWeight="semibold" mb={2}>
              Match Actions:
            </Text>
            <ButtonGroup>
              <Button colorScheme="blue" onClick={scorePoint}>
                Score Point
              </Button>
              <Button colorScheme="red" onClick={missPoint}>
                Miss Point
              </Button>
            </ButtonGroup>
          </Box>
        )}
        {/* Reset Button */}
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={undo}>
            Undo
        </Button>

        {/* Reset Button */}
        <Button
          variant="outline"
          colorScheme="gray"
          onClick={() => window.location.reload()}>
          Reset (Reload Page)
        </Button>
      </Stack>
    </Box>
  );
}

export default MatchPage;
