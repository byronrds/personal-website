'use client';
// import { data } from '../../dummydata';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Sidebar } from '../components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { LinkList } from '@/components/LinkList';

export default function Home() {
	const router = useRouter();
	const handleNavigation = () => {
		router.push('/messy');
	};

	const handleClick = (id: any) => {
		router.push(`/blog/${id}`);
	};

	interface BlogPost {
		title: string;
		created_at: string;
		summary: string;
	}

	const [allPosts, setAllPosts] = useState<BlogPost[] | null>(null);

	useEffect(() => {
		const fetchAllPostsMetadata = async () => {
			const postsMetadata = await axios.get('/api/posts/');
			console.log(postsMetadata);
			setAllPosts(postsMetadata.data);
		};
		fetchAllPostsMetadata();
	}, []);

	return (
		<div className='lg:w-1/2 lg:m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-8 lg:px-12 py-8'>
				<LinkList />
			</div>

			<div className='mx-10 mt-4'>
				<p className='text-xl'>Articles</p>
				{allPosts &&
					allPosts.map((item, index) => {
						return (
							<div key={index} className='mb-8' onClick={() => handleClick(index)}>
								<div className='group hover:cursor-pointer'>
									<p className='text-sm opacity-80 group-hover:opacity-100'>{item.title}</p>

									<p className='text-sm opacity-40 group-hover:opacity-60'>{item.summary}</p>
									<p className='text-sm opacity-40 group-hover:opacity-60'>{item.created_at}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
