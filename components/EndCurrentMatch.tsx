import { Button, Dialog, Portal } from "@chakra-ui/react";
import useMatch from "@store/useMatch";
import useTeam from "../store/useTeam";

function EndCurrentMatch() {
  const endMatch = useMatch((state) => state.endMatch);
  const clearDefaultPlayerNames = useTeam(
    (state) => state.clearDefaultPlayerNames
  );

  const handleYesClicked = () => {
    endMatch();
    clearDefaultPlayerNames();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button width="full">End Match</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner padding={4}>
          <Dialog.Content padding={4}>
            <Dialog.Header padding={0}>
              <Dialog.Title>End Match</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={0}>
              Are you sure you want to end this current match?
            </Dialog.Body>
            <Dialog.Footer padding={0} paddingTop={6}>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={handleYesClicked}>Yes</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default EndCurrentMatch;
