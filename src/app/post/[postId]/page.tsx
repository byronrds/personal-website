'use client';
import { useState, useEffect } from 'react';
import styles from '../../page.module.css';
import Link from 'next/link';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

// this will get the id of the one that is selected from the list
//id: 0, 1, 2, 3, in dynamodb

interface BlogPost {
	title: string;
	created_at: string;
	content: string;
}

export default function Page({ params }: { params: { postId: string } }) {
	const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
	useEffect(() => {
		const fetchBlogPost = async () => {
			const blogPost = await axios.get(`/api/posts/${params.postId}`);
			console.log(blogPost.data);
			setBlogPost(blogPost.data);
		};
		fetchBlogPost();
	}, []);

	return (
		<div>
			{blogPost && (
				<>
					<h1>{blogPost.title}</h1>
					<p>Created on {new Date(blogPost.created_at).toLocaleDateString()}</p>
					<ReactMarkdown className='markdown'>{blogPost.content.replace(/\\n/g, '\n')}</ReactMarkdown>
				</>
			)}
		</div>
	);
}
