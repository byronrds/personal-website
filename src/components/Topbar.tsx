import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './Topbar.css';
export const Topbar = () => {
	const pathname = usePathname();

	return (
		<div className='fixed top-0 left-0 w-full h-10 bg-[#dc423b]'>
			<div className='ml-6 h-full flex items-center'>
				<ul className='flex gap-4 items-center'>
					<li>
						<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
							byronxr.com
						</Link>
					</li>
					<li>
						<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/more'>
							more
						</Link>
					</li>
					{/* <li>
						<Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>
							about
						</Link>
					</li>
					<li>
						<Link className={`link ${pathname === '/messy' ? 'active' : ''}`} href='/messy'>
							messy
						</Link>
					</li> */}
				</ul>
			</div>
		</div>
	);
};
