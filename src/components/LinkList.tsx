import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './LinkList.css';
import { ThemeSwitch } from './ThemeSwitch';
export const LinkList = () => {
	const pathname = usePathname();

	return (
		<div className='flex'>
			<ul className='flex gap-4 items-center'>
				<li>
					<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
						Me
					</Link>
				</li>
				{/* <p>|</p>

				<li>
					<Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
						Blog
					</Link>
				</li> */}
				<p>|</p>
				<li>
					<Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href='/projects'>
						Projects
					</Link>
				</li>
				<p>|</p>
				<ThemeSwitch />
			</ul>
		</div>
	);
};
