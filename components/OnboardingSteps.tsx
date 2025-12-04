import { Tabs } from "@chakra-ui/react";
import { LuTarget, LuUsers } from "react-icons/lu";

export interface OnboardingStepsProps {
  playersComponent: React.ReactNode;
  firstServerComponent: React.ReactNode;
}

function OnboardingSteps({
  playersComponent,
  firstServerComponent,
}: OnboardingStepsProps) {
  return (
    <Tabs.Root defaultValue="players" fitted>
      <Tabs.List>
        <Tabs.Trigger value="players">
          <LuUsers />
          Players
        </Tabs.Trigger>
        <Tabs.Trigger value="firstServer">
          <LuTarget />
          First Server
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="players">{playersComponent}</Tabs.Content>
      <Tabs.Content value="firstServer">{firstServerComponent}</Tabs.Content>
    </Tabs.Root>
  );
}

export default OnboardingSteps;
