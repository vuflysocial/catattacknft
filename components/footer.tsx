import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full max-w-xs justify-center">
        <a
          href=""
          target="_blank"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          rel="noreferrer"
        >
          <Image src="/icons/zap.svg" width={14} height={14} alt="Zap" />
          <span>Get a free #2 Meloshian to test it</span>
        </a>
      </div>
      <h4 className="font-semibold mt-12 mb-6">
        Created by 🐱{" "}
        <a
          href="https://twitter.com/therealzodeyak"
          target="_blank"
          className="text-green-500 hover:no-underline"
          rel="noreferrer"
        >
          zodeyak.eth
        </a>
      </h4>
      <p className="font-semibold">Melo was not hurt building this game.</p>
    </>
  );
};

export default Footer;
