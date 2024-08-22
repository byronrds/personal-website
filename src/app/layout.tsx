import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

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
		<html lang='en' className={inter.className} suppressHydrationWarning>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
