import { HStack, Link, Text, VStack } from "@chakra-ui/react";
import ScoreBox from "./ScoreBox";
import useMatch from "@store/useMatch";
import { useMemo } from "react";

function Scoreboard() {
  const match = useMatch((state) => state.match);

  const [servingTeamScore, receivingTeamScore] = useMemo((): [
    number,
    number
  ] => {
    return match.ballPossession === "A"
      ? [match.points.A, match.points.B]
      : [match.points.B, match.points.A];
  }, [match.points, match.ballPossession]);

  return (
    <VStack gap={2}>
      <VStack gap={0} marginBottom={4}>
        <Text fontSize="lg">
          Scoreboard
        </Text>
        <Text textStyle="xs" color="gray.500">
          Created by{" "}
          <Link
            href="http://instagram.com/filmandvlogswithdylan"
            variant="underline"
            color="gray.600">
            @filmandvlogswithdylan
          </Link>
        </Text>
      </VStack>
      <HStack gap={1}>
        <ScoreBox value={servingTeamScore} />
        <ScoreBox value={receivingTeamScore} />
        <ScoreBox value={match.currentServer!} />
      </HStack>
    </VStack>
  );
}

export default Scoreboard;
