import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import useMatch from "@store/useMatch";

function EndCurrentMatch() {
  const router = useRouter();
  const endMatch = useMatch((state) => state.endMatch);

  const handleYesClicked = () => {
    endMatch();
    router.replace("/");
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
