'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
	title: string;
	created_at: string;
	content: string;
}

export default function Page({ params }: { params: { blogID: string } }) {
	const [blogPost, setBlogPost] = useState<BlogPost | null>(null);

	useEffect(() => {
		const fetchBlogPost = async () => {
			const blogPost = await axios.get(`/api/posts/${params.blogID}`);
			setBlogPost(blogPost.data);
		};
		fetchBlogPost();
	}, []);

	return (
		<div className='lg:w-1/2 lg:m-auto'>
			<div className='fixed w-2 h-full bg-[#dc423b]'></div>
			<div className='px-10 py-10 '>
				{blogPost && (
					<>
						<p className='text-sm'>{new Date(blogPost.created_at).toLocaleDateString()}</p>
						<ReactMarkdown className='markdown'>{blogPost.content.replace(/\\n/g, '\n')}</ReactMarkdown>
					</>
				)}
			</div>
		</div>
	);
}
