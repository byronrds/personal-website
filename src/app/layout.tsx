import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'bzrblog',
	description: 'one mans thoughts',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: 'images/yellow.jpg',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: 'images/yellow.jpg',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
