// app/page.tsx
'use client'; // Important for client-side hooks

import { useConnectWallet, useSetChain, useWallets } from '@web3-onboard/react';
import { useEffect } from 'react';

export default function HomePage() {
    const [{ wallet, connecting }, connect] = useConnectWallet();
    const [{ chains, connectedChain }, setChain] = useSetChain();
    const connectedWallets = useWallets();


    useEffect(() => {
        if (connectedWallets.length > 0) {
            console.log('Connected Wallets:', connectedWallets);
        }
    }, [connectedWallets]);

    return (
        <div>
            <h1>Web3-Onboard Multi-Chain Example (App Router)</h1>

            <button onClick={() => connect()}>
                {connecting ? 'Connecting...' : 'Connect Wallet'}
            </button>

            {wallet && (
                <div>
                    <p>Connected Wallet: {wallet.name}</p>
                    <p>Connected Account: {wallet.accounts[0].address}</p>
                    <p>
                        Connected Chain:{' '}
                        {chains.find((chain) => chain.id === connectedChain?.id)?.label}
                    </p>
                    <div>
                        {chains.map((chain) => (
                            <button
                                key={chain.id}
                                onClick={() => setChain({ chainId: chain.id })}
                            >
                                Switch to {chain.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}