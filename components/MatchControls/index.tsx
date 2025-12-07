import { Button, Card, Heading, HStack, Stack } from "@chakra-ui/react";
import { LuSettings } from "react-icons/lu";
import StartNewMatch from "./StartNewMatch";

function MatchControls() {
  return (
    <Card.Root padding={4}>
      <Card.Header padding={0}>
        <Card.Title>
          <HStack>
            <LuSettings />
            <Heading size="md">Match Controls</Heading>
          </HStack>
        </Card.Title>
      </Card.Header>
      <Card.Body padding={0} paddingTop={4}>
        <Stack gap={2}>
          <StartNewMatch />
          {/* <Button width="full">Start New Match</Button> */}
          <Button width="full" variant="outline">
            Reset Current Match
          </Button>
        </Stack>
      </Card.Body>
    </Card.Root>
  );
}

export default MatchControls;
