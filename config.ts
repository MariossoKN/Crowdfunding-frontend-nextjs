// config.ts
import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { injected, walletConnect, metaMask } from "wagmi/connectors";

const projectId = "your-walletconnect-project-id"; // Replace with your WalletConnect Project ID

export const config = createConfig({
    chains: [mainnet, sepolia], // Add the chains you want to support
    connectors: [
        injected(), // Browser wallets (e.g., MetaMask, Brave)
        // walletConnect({ projectId }), // WalletConnect for mobile wallets
        metaMask(), // MetaMask connector
    ],
    ssr: true,
    transports: {
        [mainnet.id]: http(), // Use HTTP provider for Mainnet
        [sepolia.id]: http(), // Use HTTP provider for Sepolia
    },
});