import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { NETWORK } from "../utils/constants";
import binanceTestnet from "@thirdweb-dev/chains/"
import { Inter } from "next/font/google";
import "tailwindcss/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain="binance-testnet">
      {/* Progress bar when navigating between pages */}
      
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
