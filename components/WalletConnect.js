// components/Header/WalletConnect.js
"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

export default function WalletConnect() {
    const { address, isConnected } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();

    if (isConnected) {
        return (
            <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                    {address.slice(0, 6)}...{address.slice(-4)}
                </span>
                <button
                    onClick={() => disconnect()}
                    className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                    Disconnect
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => connect()}
            className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
            Connect Wallet
        </button>
    );
}