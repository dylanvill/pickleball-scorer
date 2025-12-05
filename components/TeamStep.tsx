import { Button, Stack } from "@chakra-ui/react";
import TeamForm from "./TeamForm";
import useTeam from "../store/useTeam";

export interface TeamStepProps {
  onSubmit: () => void;
}

function TeamStep({ onSubmit }: TeamStepProps) {
  const { setDefaultPlayerNames } = useTeam();

  const handleOnSubmit = () => {
    setDefaultPlayerNames();
    onSubmit();
  };

  return (
    <>
      <Stack>
        <TeamForm teamKey="A" />
        <TeamForm teamKey="B" />
      </Stack>
      <Button
        variant="solid"
        width="full"
        marginTop={6}
        onClick={handleOnSubmit}>
        Next
      </Button>
      <Button variant="ghost" width="full" marginTop={2}>
        Skip
      </Button>
    </>
  );
}

export default TeamStep;
