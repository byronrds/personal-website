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
		router.push(`/post/${id}`);
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
		<div className='w-1/2 m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-12 py-8'>
				<LinkList />
			</div>

			{/* <div className='fixed top-0 left-0 h-8 w-full bg-[#dd6232]'></div> */}
			{/* <Topbar /> */}

			{/* <p className='bg-[#dd6232] p-4 w-[160px] text-xl mx-8 my-10'>bzrblog.xyz</p> */}

			<div className='mx-14'>
				<div className='mt-10'>
					{allPosts &&
						allPosts.map((item, index) => {
							return (
								<div key={index} className='mb-8' onClick={() => handleClick(index)}>
									<div className='grid grid-cols-8 grid-flow-row group hover:cursor-pointer'>
										<p className='text-sm opacity-25 col-start-1 col-end-2 group-hover:opacity-50'>
											{item.created_at}
										</p>
										<p className='text-sm col-start-2 col-end-9 opacity-60 group-hover:opacity-100'>
											{item.title}
										</p>

										<p className='text-sm col-start-2 col-end-9 opacity-25 group-hover:opacity-50'>
											{item.summary}
										</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}
