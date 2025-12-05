import { RadioCard } from "@chakra-ui/react";
import React from "react";

export interface ServerCardProps {
  value: string;
  label: string;
}

function ServerCard({ value, label }: ServerCardProps) {
  return (
    <RadioCard.Item value={String(value)}>
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemText>{label}</RadioCard.ItemText>
      </RadioCard.ItemControl>
    </RadioCard.Item>
  );
}

export default ServerCard;
