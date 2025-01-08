'use client';

import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import blogs from '../../../../blog_data/blog_data.json';

export default function Page({ params }: { params: { blogID: string } }) {
	
	const selectedBlog = blogs.find((item) => item.id === params.blogID);

	return (
		<div className='lg:w-1/2 lg:m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-10 py-10'>
				<div className='flex justify-between'>
					<Link href='/blog'>
						<FaArrowLeftLong className='text-2xl' />
					</Link>
					<ThemeSwitch />
				</div>

				{selectedBlog ? (
					<>
						<p className='text-sm mt-8 mb-4'>
							{new Date(selectedBlog.created_at).toLocaleDateString()}
						</p>
						<p className='text-md'>{selectedBlog.content}</p>
					</>
				) : (
					<p className='text-sm mt-8'>Blog post not found.</p>
				)}
			</div>
		</div>
	);
}

