import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './LinkList.css';
export const LinkList = () => {
	const pathname = usePathname();

	return (
		<div className='ml-6 flex'>
			<ul className='flex gap-4 items-center'>
				<li>
					<Link className={`link ${pathname === '/' ? 'active' : ''}`} href='/'>
						bzrblog.xyz
					</Link>
				</li>

				<li>
					<Link className={`link ${pathname === '/about' ? 'active' : ''}`} href='/about'>
						about
					</Link>
				</li>
				<li>
					<Link className={`link ${pathname === '/messy' ? 'active' : ''}`} href='/messy'>
						messy
					</Link>
				</li>
			</ul>
		</div>
	);
};
