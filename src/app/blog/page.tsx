'use client';
import { useRouter } from 'next/navigation';
import { LinkList } from '@/components/LinkList';
import { useState, useEffect } from 'react';

// Define the type for blog items
interface BlogItem {
  id: string;
  title: string;
  summary: string;
}

export default function Home() {
  const router = useRouter();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog_data/blurb.json')
      .then(response => response.json())
      .then(data => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading blog data:', error);
        setLoading(false);
      });
  }, []);

  const handleClick = (id: string) => {
    router.push(`/blog/${id}`);
  };

  if (loading) {
    return (
      <div className='lg:w-1/2 lg:m-auto'>
        <div className='fixed w-2 h-full bg-[#dc423b]'></div>
        <div className='px-8 lg:px-12 py-8'>
          <LinkList />
        </div>
        <div className='mx-10 mt-4'>
          <p className='text-xl mb-8'>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='lg:w-1/2 lg:m-auto'>
      <div className='fixed w-2 h-full bg-[#dc423b]'></div>
      <div className='px-8 lg:px-12 py-8'>
        <LinkList />
      </div>
      <div className='mx-10 mt-4'>
        <p className='text-xl mb-8'>Articles</p>
        {blogs.map((item) => (
          <div key={item.id} className='mb-8' onClick={() => handleClick(item.id)}>
            <div className='group hover:cursor-pointer'>
              <p className='text-md opacity-80 group-hover:opacity-100 mb-1'>{item.title}</p>
              <p className='text-md opacity-40 group-hover:opacity-60 mb-2'>{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}