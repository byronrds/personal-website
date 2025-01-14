'use client';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Link from 'next/link';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import ReactMarkdown from 'react-markdown';
import React, { useState, useEffect } from 'react';

export default function Page({ params }: { params: { blogID: string } }) {
  const [markdownContent, setMarkdownContent] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    // Use the correct path to your markdown files
    fetch(`/blog_data/blog_${params.blogID}.md`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load blog post');
        }
        return response.text();
      })
      .then(text => setMarkdownContent(text))
      .catch(error => {
        console.error('Error loading markdown:', error);
        setError(true);
      });
  }, [params.blogID]);

  if (error) {
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
          <p className='text-md mt-8'>Blog post not found.</p>
        </div>
      </div>
    );
  }

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
        <div className='prose dark:prose-invert max-w-none'>
          <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
