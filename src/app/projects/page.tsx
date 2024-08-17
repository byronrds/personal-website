'use client';
import { useState, useEffect } from 'react';
import { LinkList } from '@/components/LinkList';
import Link from 'next/link';
import { LuDot } from 'react-icons/lu';
import { GoDot, GoDotFill } from 'react-icons/go';
import { RxDotFilled } from 'react-icons/rx';
// import { Sidebar } from '../../components/Sidebar';
// this will get the id of the one that is selected from the list
//id: 0, 1, 2, 3, in dynamodb
export default function page() {
	return (
		<div>
			<div className='lg:w-1/2 lg:m-auto'>
				<div className='fixed w-2 h-full bg-[#dc423b]'></div>
				<div className='px-8 lg:px-12 py-8'>
					<LinkList />
				</div>
				<div className='mx-10 my-10 flex flex-col gap-6'>
					<div>
						<p className='text-md mb-2'>Visitor App</p>
						<p className='text-sm'>
							A guest sign-in service capturing visitor information, photos, and signatures, stored in S3
							and DynamoDB. Built with Vite React (TypeScript) and Tailwind for the frontend. Includes
							facial recognition sign-out using face-api.js.
						</p>
						<div className='text-sm opacity-50 flex gap-2 items-center'>
							<p>React (TypeScript)</p>
							<RxDotFilled />
							<p>Tailwind</p>
							<RxDotFilled />
							<p>AWS</p>
							<RxDotFilled />
							<p>face-api.js</p>
						</div>
					</div>
					<br></br>
					<div>
						<p className='text-md mb-2'>Mobile App</p>
						<p className='text-sm'>
							An employee resource hub for accessing tools on the go. Includes a reward system where users
							submit forms, and the data is stored in SharePoint and fetched into the app. Built with a
							serverless backend and integrates with Microsoft API for work account sign-in.
						</p>
						<div className='text-sm opacity-50 flex gap-2 items-center'>
							<p>React Native (Expo)</p>
							<RxDotFilled />
							<p>AWS</p>
							<RxDotFilled />
							<p>Microsoft API</p>
							<RxDotFilled />
							<p>SharePoint</p>
						</div>
					</div>
					<br></br>
					<div>
						<p className='text-md mb-2'>Talent Board</p>
						<p className='text-sm'>
							A NextJS app for building and sharing resumes with potential employers. Integrates with
							AirTable for backend management, allowing seamless filtering and messaging between talent
							and companies.
						</p>
						<div className='opacity-50 flex gap-2 items-center'>
							<p>NextJS</p>
							<RxDotFilled />
							<p>Airtable</p>
						</div>
					</div>

					<br></br>
					<div>
						<p className='text-md mb-2'>Personal Portfolio</p>
						<p className='text-sm'>
							This app. A simple, clean portfolio showcasing my work. Built with NextJS, styled with
							Tailwind CSS, and connected to Google Firestore for data storage.
						</p>
						<div className='opacity-50 flex gap-2 items-center'>
							<p>NextJS</p>
							<RxDotFilled />
							<p>Tailwind CSS</p>
							<RxDotFilled />
							<p>Google Firestore</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
