import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const roboto_mono_init = Roboto_Mono({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'byronxr',
	description: 'one mans thoughts',
	icons: {
		icon: [
			{
				media: '(prefers-color-scheme: light)',
				url: 'images/red.png',
			},
			{
				media: '(prefers-color-scheme: dark)',
				url: 'images/red.png',
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
