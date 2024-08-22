'use client';
import { data } from '../../dummydata';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { Button, ButtonGroup } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import { Sidebar } from '../components/Sidebar';
import { Topbar } from '@/components/Topbar';
import { LinkList } from '@/components/LinkList';
import RandomLinesSVG from '../components/RandomLinesSVG';
import { ThemeSwitch } from '@/components/ThemeSwitch';

export default function Home() {
	const router = useRouter();
	const handleNavigation = () => {
		router.push('/messy');
	};

	const handleClick = (id: any) => {
		router.push(`/blog/${id}`);
	};

	// interface BlogPost {
	// 	title: string;
	// 	created_at: string;
	// 	summary: string;
	// }

	// const [allPosts, setAllPosts] = useState<BlogPost[] | null>(null);

	// useEffect(() => {
	// 	const fetchAllPostsMetadata = async () => {
	// 		const postsMetadata = await axios.get('/api/posts/');
	// 		console.log(postsMetadata);
	// 		setAllPosts(postsMetadata.data);
	// 	};
	// 	fetchAllPostsMetadata();
	// }, []);

	return (
		<main>
			<div className='lg:w-1/2 lg:m-auto'>
				<div className='fixed w-2 h-full bg-[#dc423b]'></div>
				<div className='px-8 lg:px-12 py-8'>
					<LinkList />
				</div>

				<div className='lg:flex gap-4 ml-10'>
					<Image radius='none' alt='profile pic' className='h-40' src='/images/IMG_3092.JPG' />
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
						Hi, I’m Byron, a software engineer currently working remotely in Virginia. I develop innovative
						solutions at IT Concepts, focusing on frontend development while also working with AWS
						serverless technologies for backend systems. I graduated with a degree in Computer Science and
						was actively involved in Forge, an organization started at UVA to give students space and skills
						to build projects beyond the classroom, where I got to teach and work on cool projects with
						peers. In my free time, I enjoy reading, writing, running, surfing, traveling, and spending time
						in nature. I’m passionate about entrepreneurship, exploring the impact of technology on
						humanity, and learning about AI and its intersection with human life. I also enjoy meeting new
						people, learning from their experiences, and helping them grow.
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
						<p className='font-semibold text-sm'>Software Engineer</p>
						<p className='text-sm mb-2 italic'>IT Concepts | June 2023 - Present</p>
						<ul className='ml-4 list-disc text-sm'>
							<li>Built scalable backend systems with AWS Lambda, S3, API Gateway, and DynamoDB.</li>
							<li>Developed React Native mobile app for internal communication and news updates.</li>
							<li>
								Created a secure office sign-in website with face recognition using TensorFlow’s
								face-api.js.
							</li>
						</ul>
					</div>
					<div className='mb-8'>
						<p className='font-semibold text-sm'>Software Engineer Instructor</p>
						<p className='text-sm mb-2 italic'>Forge | Aug 2022 - June 2024</p>
						<ul className='ml-4 list-disc text-sm'>
							<li>
								Taught web development for three consecutive semesters at UVA and led two software
								engineering internship programs.
							</li>
							<li>
								Designed and instructed 3-week, full-day (8:30 AM - 5:30 PM) summer training sessions
								covering Git, React, Express.js, APIs (including OpenAI), NoSQL databases (with
								Firebase), and debugging.
							</li>
							<li>
								Conducted interviews and reviewed applications for the internship program, ensuring top
								student selection and preparation.
							</li>
						</ul>
					</div>
					<div className='mb-8'>
						<p className='font-semibold text-sm'>Software Engineer</p>
						<p className='text-sm mb-2 italic'>Forge | May 2023 - Dec 2023</p>
						<ul className='ml-4 list-disc text-sm'>
							<li>
								Built full-stack platform with Next.js, TypeScript, and Airtable to connect students and
								employers.
							</li>
							<li>Worked in Agile teams, managing tasks via Trello and contributing to code reviews.</li>
						</ul>
					</div>
					<div className='mb-8'>
						<p className='font-semibold text-sm'>Computer Systems TA</p>
						<p className='text-sm mb-2 italic'>University of Virginia | Jan 2023 - May 2023</p>
						<ul className='ml-4 list-disc text-sm'>
							<li>
								Supported a class of nearly 500 students in understanding data representation from
								binary and assembly to high-level programming in C.
							</li>
							<li>
								Graded assignments and offered help during office hours for command-line tools and C
								programming.
							</li>
							<li>Discussed security, legal, and ethical issues related to computing.</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
