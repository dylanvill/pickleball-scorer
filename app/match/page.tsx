"use client";

import { Box, Stack } from "@chakra-ui/react";
import Scoreboard from "../../components/Scoreboard";
import TeamCard from "../../components/Scoreboard/TeamCard";
import useMatch from "../../store/useMatch";
import useTeam from "../../store/useTeam";

function MatchPage() {
  const match = useMatch((state) => state.match);
  const teams = useTeam((state) => state.teams);

  return (
    <Box>
      <Scoreboard />
      <Stack marginTop={8}>
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
    </Box>
  );
}

export default MatchPage;
