import SolanaWeb3Provider from '@/Components/SolanaWeb3Provider';
import './globals.css';


export const metadata = {
  title: 'Web3 Pay',
  description: 'A Web3 Payment Integration Example',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
        <SolanaWeb3Provider>
          {children}
        </SolanaWeb3Provider>
      </body>
    </html>
  );
}
