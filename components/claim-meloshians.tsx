import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import { TransactionError } from "@thirdweb-dev/sdk";
import Image from "next/image";
import { useContext, useState } from "react";
import { GameContext } from "../contexts/game-context";
import { CONTRACT_ADDR } from "../utils/constants";
import ClaimMeloshiansButton from "./claim-meloshians-button";

const ClaimMeloshians: React.FC = () => {
  const { refetch } = useContext(GameContext);
  const [error, setError] = useState<Error | null>(null);

  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
          }}
        >
          Claim your Meloshians
        </span>{" "}
        to get started
      </h1>
      <div className="mx-auto">
        <Image
          src="/cat-attack.png"
          width={400}
          height={320}
          alt="Cat Attack"
        />
      </div>
      <ClaimMeloshiansButton />
    </div>
  );
};

export default ClaimMeloshians;
