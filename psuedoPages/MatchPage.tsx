import useTeam from "@store/useTeam";
import useMatch from "@store/useMatch";
import {
  Box,
  Button,
  HStack,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import Scoreboard from "@components/Scoreboard";
import TeamCard from "@components/Scoreboard/TeamCard";
import EndCurrentMatch from "@components/EndCurrentMatch";

function MatchPage() {
  const { match, history, scorePoint, missPoint, undo } = useMatch();

  const teams = useTeam((state) => state.teams);

  const canUndo = history && history.length > 0;
  return (
    <Box>
      <Scoreboard />
      <Stack marginTop={4}>
        <TeamCard
          teamName={teams.A.name}
          isServing={match.ballPossession === "A"}
          serverNumber={match.currentServer!}
          players={[teams.A.players[1].name, teams.A.players[2].name]}
        />
        <TeamCard
          teamName={teams.B.name}
          isServing={match.ballPossession === "B"}
          serverNumber={match.currentServer!}
          players={[teams.B.players[1].name, teams.B.players[2].name]}
        />
      </Stack>
      <HStack display="flex" marginTop={4}>
        <Button flexGrow={1} colorPalette="red" onClick={missPoint}>
          Miss
        </Button>
        <Button flexGrow={1} colorPalette="green" onClick={scorePoint}>
          Point
        </Button>
      </HStack>
      {canUndo && (
        <Button variant="outline" marginTop={4} width="full" onClick={undo}>
          Undo
        </Button>
      )}
      <HStack display="flex" alignItems="center" justifyItems="center" marginY={6}>
        <Separator flex={1}/>
        <Text fontSize={10} color="gray.500">
          Created by{" "}
          <Link
            href="http://instagram.com/filmandvlogswithdylan"
            color="gray.700">
            @filmandvlogswithdylan
          </Link>
        </Text>
        <Separator flex={1}/>
      </HStack>
      <EndCurrentMatch />
    </Box>
  );
}

export default MatchPage;
