import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Poppins } from 'next/font/google';

import '../globals.css';
import { NavBar, Footer, CallToAction } from '@/components/index';
import { ThemeProvider } from '@/components/theme-provider';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
	title: "Haiying Liao's portfolio",
	description: "Haiying Liao's portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={`${poppins.className} mx-auto max-w-[1440px] bg-white-800 dark:bg-black-300`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />

					<main className='fadeIn'>
						{children}
						<CallToAction />
					</main>

					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
