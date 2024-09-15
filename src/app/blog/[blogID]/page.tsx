'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { ThemeSwitch } from '@/components/ThemeSwitch';

interface BlogPost {
	title: string;
	created_at: string;
	content: string;
}

export default function Page({ params }: { params: { blogID: string } }) {
	const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const fetchBlogPost = async () => {
			// Check if the blog post is already in sessionStorage
			const cachedPost = sessionStorage.getItem(`blogPost-${params.blogID}`);
			if (cachedPost) {
				setBlogPost(JSON.parse(cachedPost));
			} else {
				// Fetch if not in sessionStorage
				try {
					const response = await axios.get(`/api/posts/${params.blogID}`);
					setBlogPost(response.data);
					sessionStorage.setItem(`blogPost-${params.blogID}`, JSON.stringify(response.data));
				} catch (error) {
					console.error('Error fetching blog post:', error);
				}
			}
		};
		fetchBlogPost();
	}, [params.blogID]);

	return (
		<div className='lg:w-1/2 lg:m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-10 py-10 '>
				<div className='flex justify-between'>
					<Link href='/blog'>
						<FaArrowLeftLong className='text-2xl' />
					</Link>
					<ThemeSwitch />
				</div>
				{blogPost && (
					<>
						<p className='text-sm mt-8 mb-4'>{new Date(blogPost.created_at).toLocaleDateString()}</p>
						<ReactMarkdown className='markdown'>{blogPost.content.replace(/\\n/g, '\n')}</ReactMarkdown>
					</>
				)}
			</div>
		</div>
	);
}
