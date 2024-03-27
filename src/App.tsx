import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

export default function Home({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{children}
			<ModeToggle />
		</ThemeProvider>
	);
}
