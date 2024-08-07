'use client';
import { data } from '../../dummydata';
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
		<main>
			<NextUIProvider>
				<div className='fixed top-0 left-0 w-4 h-full bg-[#dc423b]'></div>
				<div className='flex gap-4 ml-16 mt-8'>
					<img className='h-40' src='/images/lines.gif' />
					<div>
						<p className='text-sm'>Byron Richards</p>
						<a className='text-sm' href='mailto:bxr@byronxr.com'>
							bxr@byronxr.com
						</a>
						<p className='text-sm'>Resume</p>

						{/* <img className='mt-4 h-4' src='/images/colorblocks.png' /> */}
					</div>
				</div>
				<div className='mx-10 my-10'>
					<p className='mb-4'>
						<span>$ </span>ls
					</p>
					<LinkList />
				</div>
				<div className='mx-10 my-10'>
					<p className='text-sm'>
						Hi, I’m Byron, a software engineer currently based in Virginia Beach. I work on developing
						innovative solutions at Capital One Shopping, focusing on enhancing user experience and
						optimizing online shopping. I graduated with a degree in Computer Science and was actively
						involved in the Forge/HackCville club at university, where I both participated in and taught the
						Software Engineering track. In my free time, I enjoy exploring new cities, working on personal
						projects involving microcontrollers and IoT, and capturing moments with my camera. I’m
						passionate about entrepreneurship, digital privacy, and continually learning to empower aspiring
						engineers.
					</p>
				</div>
			</NextUIProvider>
		</main>
	);
}
