import { Tabs } from "@chakra-ui/react";
import { LuTarget, LuUsers } from "react-icons/lu";

export interface OnboardingStepsProps {
  playersComponent: React.ReactNode;
  firstServerComponent: React.ReactNode;
  activeTab?: "players" | "firstServer";
}

function OnboardingSteps({
  playersComponent,
  firstServerComponent,
  activeTab,
}: OnboardingStepsProps) {
  const disableFirstServerTab = !activeTab || activeTab === "players";

  return (
    <Tabs.Root value={activeTab} fitted>
      <Tabs.List>
        <Tabs.Trigger value="players">
          <LuUsers />
          Players
        </Tabs.Trigger>
        <Tabs.Trigger value="firstServer" disabled={disableFirstServerTab}>
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
