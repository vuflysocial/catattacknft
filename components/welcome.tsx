import { ConnectWallet } from "@thirdweb-dev/react";
import Image from "next/image";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Welcome to&nbsp;
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(to right, #9de7c8, #72c6a7, #49a686, #1f8570)",
          }}
        >
          Invade of Meloshians
        </span>
      </h1>
      <div className="mx-auto">
        <Image
          src="/cat-attack.png"
          width={400}
          height={320}
          alt="Cat Attack"
        />
      </div>
      <div className="max-w-xs">
        <ConnectWallet
          dropdownPosition={{
            side: "bottom",
            align: "center",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">Share the game</p>
        <div className="flex gap-2 mt-3">
          <a className="border border-[#72c6a7] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/twitter.svg"
              width={24}
              height={24}
              alt="Twitter"
            />
          </a>
          <a className="border border-[#72c6a7] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/facebook.svg"
              width={24}
              height={24}
              alt="Facebook"
            />
          </a>
          <a className="border border-[#72c6a7] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
