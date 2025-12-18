import { HStack } from "@chakra-ui/react";
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
    <HStack gap={1} alignItems="center" justifyContent="center">
      <ScoreBox value={servingTeamScore} />
      <ScoreBox value={receivingTeamScore} />
      <ScoreBox value={match.currentServer!} />
    </HStack>
  );
}

export default Scoreboard;
