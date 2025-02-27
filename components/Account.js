// components/Header/Account.js
"use client";

import { useAccount, useDisconnect, useEnsName, useEnsAvatar } from "wagmi";

export default function Account() {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const { data: ensName } = useEnsName({ address });
    const { data: ensAvatar } = useEnsAvatar({ name: ensName }); // Use optional chaining

    return (
        <div className="flex items-center space-x-4">
            {ensAvatar && <img src={ensAvatar} alt="ENS Avatar" className="w-8 h-8 rounded-full" />}
            <span className="text-sm text-gray-300">
                {ensName ? `${ensName} (${address?.slice(0, 6)}...${address?.slice(-4)})` : `${address?.slice(0, 6)}...${address?.slice(-4)}`}
            </span>
            <button
                onClick={() => disconnect()}
                className="bg-black/70 border border-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors"
            >
                Disconnect
            </button>
        </div>
    );
}