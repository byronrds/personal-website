'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	// Return null until the component is mounted
	if (!mounted) return null;

	return (
		<div className='hover:cursor-pointer'>
			{resolvedTheme === 'dark' ? (
				<FiSun onClick={() => setTheme('light')} />
			) : (
				<FiMoon onClick={() => setTheme('dark')} />
			)}
		</div>
	);
}
