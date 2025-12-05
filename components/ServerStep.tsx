import { Button, RadioCard, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import ServerCard from "./ServerCard";

const items = [
  { value: "next", title: "Next.js" },
  { value: "vite", title: "Vite" },
  { value: "astro", title: "Astro" },
  { value: "astro2", title: "Astro2" },
];

export interface OnBackClickedProps {
  onBackClicked?: () => void;
}

function ServerStep({ onBackClicked }: OnBackClickedProps) {
  const [server, setServer] = useState<null | string>(null);

  return (
    <div>
      <RadioCard.Root
        value={server}
        onValueChange={(e) => setServer(e.value)}
        variant="solid"
        colorPalette="green">
        <Stack>
          {items.map((item) => (
            <ServerCard
              key={item.value}
              value={item.value}
              label={item.title}
            />
          ))}
        </Stack>
      </RadioCard.Root>
      <Button variant="solid" width="full" marginTop={6} disabled={!server}>
        Start Game
      </Button>
      <Button
        variant="ghost"
        width="full"
        marginTop={2}
        onClick={onBackClicked}>
        Back
      </Button>
    </div>
  );
}

export default ServerStep;
