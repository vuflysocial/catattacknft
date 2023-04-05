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
        <a>
          <iframe
            src="https://ipfs.thirdwebcdn.com/ipfs/QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc1155.html?contract=0xdEEC826A258Df5290e1fc8f7190DFf2f31E7E616&chain=%7B%22name%22%3A%22Binance+Smart+Chain+Testnet%22%2C%22chain%22%3A%22BSC%22%2C%22rpc%22%3A%5B%22https%3A%2F%2Fbinance-testnet.rpc.thirdweb.com%2F5a9bc94b87f7cbbbfbbc234bf1e07f0adf5f3cf3012c9f26f9fc9820d64df93a%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22Binance+Chain+Native+Token%22%2C%22symbol%22%3A%22tBNB%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22bnbt%22%2C%22chainId%22%3A97%2C%22testnet%22%3Atrue%2C%22slug%22%3A%22binance-testnet%22%7D&tokenId=0&theme=dark&primaryColor=green"
            width="600px"
            height="600px"
            style={{ maxWidth: "100%" }}
            frameBorder="0"
          ></iframe>
        </a>
      </h4>
      <p className="font-semibold">Melo was not hurt building this game.</p>
    </>
  );
};

export default Footer;
