import { Badge, HStack, Card } from "@chakra-ui/react";
import { LuUser } from "react-icons/lu";

export interface TeamCardProps {
  teamName: string;
  isServing: boolean;
  serverNumber: number;
  players: [string, string];
}

function TeamCard({
  teamName,
  isServing,
  serverNumber,
  players,
}: TeamCardProps) {
  const servingIconRenderCount = Array.from({ length: serverNumber });

  return (
    <Card.Root padding={4}>
      <Card.Header padding={0}>
        <Card.Title>
          <HStack justifyContent="space-between">
            {teamName}
            {isServing && (
              <Badge colorPalette="green" variant="subtle">
                Serving
                {servingIconRenderCount.map((_, index) => (
                  <LuUser key={index} />
                ))}
              </Badge>
            )}
          </HStack>
        </Card.Title>
      </Card.Header>
      <Card.Body padding={0}>
        <Card.Description>
          {players[0]} & {players[1]}
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

export default TeamCard;
