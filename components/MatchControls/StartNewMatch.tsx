import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

function StartNewMatch() {
  const router = useRouter();

  const handleYesClicked = () => {
    router.replace("/");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button width="full">Start New Match</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner padding={4}>
          <Dialog.Content padding={4}>
            <Dialog.Header padding={0}>
              <Dialog.Title>Confirmation</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body padding={0}>
              Are you sure you want to start a new match?
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

export default StartNewMatch;
