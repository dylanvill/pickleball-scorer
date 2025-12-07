import { HStack, Text, VStack } from "@chakra-ui/react";
import ScoreBox from "./ScoreBox";
import useMatch from "../../store/useMatch";
import { useMemo } from "react";

function Scoreboard() {
  const match = useMatch((state) => state.match);

  const [servingTeamScore, receivingTeamScore] = useMemo((): [
    number,
    number
  ] => {
    return match.ballPossession === "A"
      ? [match.points.B, match.points.A]
      : [match.points.A, match.points.B];
  }, [match.points, match.ballPossession]);

  return (
    <VStack gap={2}>
      <Text fontSize="lg" fontWeight="bold">
        Score
      </Text>
      <HStack gap={1}>
        <ScoreBox value={servingTeamScore} />
        <ScoreBox value={receivingTeamScore} />
        <ScoreBox value={match.currentServer!} />
      </HStack>
    </VStack>
  );
}

export default Scoreboard;
