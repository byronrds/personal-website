import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './LinkList.css';
export const LinkList = () => {
	const pathname = usePathname();

	return (
		<div className='flex'>
			<ul className='flex gap-4 items-center'>
				<li>
					<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/projects'>
						Projects
					</Link>
				</li>

				<li>
					<Link className={`link ${pathname === '/blog' ? 'active' : ''}`} href='/blog'>
						Blog
					</Link>
				</li>
				{/* <li>
					<Link className={`link ${pathname === '/messy' ? 'active' : ''}`} href='/messy'>
						messy
					</Link>
				</li> */}
			</ul>
		</div>
	);
};
