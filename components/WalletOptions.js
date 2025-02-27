// components/Header/WalletOptions.js
"use client";

import { useConnect } from "wagmi";

export default function WalletOptions() {
    const { connectors, connect } = useConnect();

    const filteredConnectors = connectors.filter((connector) => {
        if (connector.name === "MetaMask" && window.ethereum?.isMetaMask) {
            return false; // Skip MetaMask connector if MetaMask is already injected
        }
        return true;
    });

    return (
        <div className="flex flex-col space-y-2">
            {filteredConnectors.map((connector) => (
                <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    className="text-white bg-black/70 border border-gray-800 px-4 py-2 rounded-lg text-md hover:bg-gray-800 transition-colors"
                >
                    Connect wallet
                </button>
            ))}
        </div>
    );
}