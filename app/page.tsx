"use client";

import MatchSetupPage from "@psuedoPages/MatchSetupPage";
import MatchPage from "@psuedoPages/MatchPage";
import useMatch from "@store/useMatch";

export default function Home() {
  const match = useMatch((state) => state.match);

  return match.isActive ? <MatchPage /> : <MatchSetupPage />;
}
