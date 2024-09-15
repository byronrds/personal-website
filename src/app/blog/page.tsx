'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkList } from '@/components/LinkList';

export default function Home() {
	const router = useRouter();

	// Interface includes the id
	interface BlogPost {
		id: string;
		title: string;
		created_at: string;
		summary: string;
	}

	const [allPosts, setAllPosts] = useState<BlogPost[] | null>(null);

	useEffect(() => {
		const fetchAllPostsMetadata = async () => {
			// Check if the posts metadata already in sessionStorage
			const cachedPosts = sessionStorage.getItem('allPosts');
			if (cachedPosts) {
				setAllPosts(JSON.parse(cachedPosts));
			} else {
				// Fetch the posts metadata if not in sessionStorage
				try {
					const response = await axios.get('/api/posts/');
					setAllPosts(response.data);
					sessionStorage.setItem('allPosts', JSON.stringify(response.data));
				} catch (error) {
					console.error('Error fetching posts metadata:', error);
				}
			}
		};
		fetchAllPostsMetadata();
	}, []);

	const handleClick = (id: string) => {
		router.push(`/blog/${id}`);
	};

	return (
		<div className='lg:w-1/2 lg:m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-8 lg:px-12 py-8'>
				<LinkList />
			</div>

			<div className='mx-10 mt-4'>
				<p className='text-xl mb-8'>Articles</p>
				{allPosts &&
					allPosts.map((item) => (
						<div key={item.id} className='mb-8' onClick={() => handleClick(item.id)}>
							<div className='group hover:cursor-pointer'>
								<p className='text-sm opacity-80 group-hover:opacity-100 mb-2'>{item.title}</p>
								<p className='text-sm opacity-40 group-hover:opacity-60 mb-2'>{item.summary}</p>
								<p className='text-sm opacity-40 group-hover:opacity-60 mb-2'>{item.created_at}</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
