import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Sidebar.css';
export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<div className='fixed top-0 left-0 w-36 h-full bg-[#dd6232]'>
			<div className='ml-6'>
				<ul>
					<li>
						<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
							bzrblog
						</Link>
					</li>
					<li>
						<Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>
							About
						</Link>
					</li>
					<li>
						<Link className={`link ${pathname === '/messy' ? 'active' : ''}`} href='/messy'>
							Messy
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
