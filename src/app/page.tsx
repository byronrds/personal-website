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
import RandomLinesSVG from '../components/RandomLinesSVG';

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
				<div className='lg:w-1/2 lg:m-auto'>
					<div className='fixed w-2 h-full bg-[#dc423b]'></div>
					<div className='px-8 lg:px-12 py-8'>
						<LinkList />
					</div>
					<div className='lg:flex gap-4 ml-8 lg:ml-16 lg:mt-8'>
						{/* <RandomLinesSVG /> */}
						<img className='h-40' src='/images/IMG_3092.JPG' />
						<div className='sm:my-10 lg:my-0'>
							<p className='text-sm mt-4 lg:mt-0'>Byron Richards</p>
							<a
								className='text-sm text-[#658FF1] underline underline-offset-2'
								href='mailto:bxr@byronxr.com'>
								bxr@byronxr.com
							</a>
							<p>
								<a
									className='text-sm text-[#658FF1] underline underline-offset-2'
									href='/resume.pdf'
									target='_blank'
									download>
									Resume (PDF)
								</a>
							</p>
						</div>
					</div>

					<div className='mx-10 my-10'>
						<p className='text-sm'>
							Hi, I’m Byron, a software engineer currently based in Virginia Beach. I work on developing
							innovative solutions at Capital One Shopping, focusing on enhancing user experience and
							optimizing online shopping. I graduated with a degree in Computer Science and was actively
							involved in the Forge/HackCville club at university, where I both participated in and taught
							the Software Engineering track. In my free time, I enjoy exploring new cities, working on
							personal projects involving microcontrollers and IoT, and capturing moments with my camera.
							I’m passionate about entrepreneurship, digital privacy, and continually learning to empower
							aspiring engineers.
						</p>
					</div>
					<div className='mx-10 my-10'>
						<p className='underline underline-offset-2 mb-4'>Education</p>
						<p className='text-sm font-semibold'>University of Virginia</p>
						<p className='text-sm'>B.A. in Computer Science</p>
						<p className='text-sm'>Graduated 2024</p>
					</div>

					<div className='mx-10 my-10'>
						<div className='mb-8'>
							<p className='underline underline-offset-2 mb-4'>Work</p>
							<p className='font-semibold text-sm'>Software Engineer, IT Concepts</p>
							<p className='text-sm mb-2'>June 2023 - Present</p>
							<ul className='ml-4 list-disc text-sm'>
								<li>
									Built scalable backend infrastructure using AWS services, enhancing data management.
								</li>
								<li>Developed a mobile app with React Native for employee news and notifications.</li>
								<li>Designed a secure sign-in website with face recognition, improving security.</li>
							</ul>
						</div>
						<div className='mb-8'>
							<p className='font-semibold text-sm'>Software Engineer Instructor, Forge</p>
							<p className='text-sm mb-2'>Aug 2022 - June 2024</p>
							<ul className='ml-4 list-disc text-sm'>
								<li>Web development at UVA for 3 seasons. 2 internship swe training sessions.</li>
								<li>
									Taught 30+ students software engineering, covering Git, JavaScript, React, and more.
								</li>
								<li>
									Led an AI course where students developed a chatbot, improving customer service.
								</li>
							</ul>
						</div>
						<div className='mb-8'>
							<p className='font-semibold text-sm'>Software Engineer, Forge</p>
							<p className='text-sm mb-2'>May 2023 - December 2023</p>
							<ul className='ml-4 list-disc text-sm'>
								<li>
									Created a full-stack platform with Next.js, TypeScript, and Airtable to connect
									students with employers.
								</li>
								<li>
									Collaborated in an Agile environment, contributing to task management and code
									reviews.
								</li>
							</ul>
						</div>
						<div className='mb-8'>
							<p className='font-semibold text-sm'>Computer Systems TA, UVA</p>
							<p className='text-sm mb-2'>Jan 2023 - May 2023</p>
							<ul className='ml-4 list-disc text-sm'>
								<li>Taught computer hardware and software concepts to 482 students.</li>
								<li>Facilitated office hours and assisted with course grading.</li>
							</ul>
						</div>
					</div>
				</div>
			</NextUIProvider>
		</main>
	);
}
