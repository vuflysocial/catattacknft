import { NFT } from "@thirdweb-dev/sdk";
import { createContext } from "react";

type GameContextType = {
  targetAddress: string;
  setTargetAddress: React.Dispatch<React.SetStateAction<string>>;
  refetch: Function;
  nfts: NFT[];
  playerScore: number;
};

export const GameContext = createContext<GameContextType>({
  targetAddress: "0x69eE710D7212246fca66be5228f7D0dF4EA919a2",
  setTargetAddress: () => {},
  refetch: () => {},
  nfts: [],
  playerScore: 0,
});
