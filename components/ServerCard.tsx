import { RadioCard } from "@chakra-ui/react";

export interface ServerCardProps {
  value: string;
  label: string;
}

function ServerCard({ value, label }: ServerCardProps) {
  return (
    <RadioCard.Item value={String(value)} backgroundColor="white">
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemText>{label}</RadioCard.ItemText>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
  );
}

export default ServerCard;
