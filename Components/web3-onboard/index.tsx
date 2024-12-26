"use client"
import { Web3OnboardProvider, init } from '@web3-onboard/react';
import injectedModule from '@web3-onboard/injected-wallets';
// import walletConnectModule from '@web3-onboard/walletconnect';
// import coinbaseWalletModule from '@web3-onboard/coinbase';
// import phantomModule from '@web3-onboard/phantom';

const injected = injectedModule();
// const walletConnect = walletConnectModule({
//     qrcodeModalOptions: {
//         mobileLinks: ['metamask', 'trust', 'rainbow']
//     }
// });


const onboard = init({
    wallets: [injected],
    chains: [
        {
            id: '0x1', // Ethereum Mainnet
            token: 'ETH',
            label: 'Ethereum Mainnet',
            rpcUrl: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
        },
        {
            id: '0x5', // Goerli Testnet
            token: 'GoerliETH',
            label: 'Goerli Testnet',
            rpcUrl: `https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
        },
        {
            id: '0x13881', // Mumbai Testnet (Polygon)
            token: 'MATIC',
            label: 'Mumbai Testnet',
            rpcUrl: 'https://rpc-mumbai.maticvigil.com',
        },
        {
            id: '0x4', // Rinkeby Testnet
            token: 'rETH',
            label: 'Rinkeby Testnet',
            rpcUrl: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
        },
        {
            id: '0x89', // Polygon Mainnet
            token: 'MATIC',
            label: 'Polygon Mainnet',
            rpcUrl: 'https://polygon-rpc.com',
        },
    ],
    appMetadata: {
        name: 'My Awesome dApp',
        icon: '/favicon.ico',
        description: 'My Awesome dApp description',
        recommendedInjectedWallets: [
            { name: 'MetaMask', url: 'https://metamask.io' },
        ],
    },
});


const Web3OnboardInitilizer = ({ children }: { children: React.ReactNode }) => {

    return <Web3OnboardProvider web3Onboard={onboard}>
        {children}
    </Web3OnboardProvider>
}


export default Web3OnboardInitilizer;