'use client';
import { useState, useEffect } from 'react';
import { LinkList } from '@/components/LinkList';
import Link from 'next/link';
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
				<div className='mx-10 my-10'>
					<div>
						<p className='text-md'>Visitor App</p>
						<p>Proprietary software so cannot show code. But it is built with aws ...,kfdlfdjfkldj</p>
					</div>
					<br></br>
					<div>
						<p className='text-md'>Mobile App</p>
						<p>Proprietary software so cannot show code. But it is built with aws ...,kfdlfdjfkldj</p>
						<p>Tools: React Native, AWS, Expo</p>
					</div>
					<br></br>
					<div>
						<p className='text-md'>Menu App</p>
						<p>Proprietary software so cannot show code. But it is built with aws ...,kfdlfdjfkldj</p>
						<p>Tools: Vite JavaScript, Google Firebase, Edamam API, Radix UI</p>
					</div>
					<br></br>
					<div>
						<p className='text-md'>Talent Board - Forge</p>
						<p>Proprietary software so cannot show code. But it is built with aws ...,kfdlfdjfkldj</p>
						<p>Tools: NextJS TypeScript, Airtable</p>
					</div>
					<br></br>
					<div>
						<p className='text-md'>This website</p>
						<p>Proprietary software so cannot show code. But it is built with aws ...,kfdlfdjfkldj</p>
						<p>NextJS, Tailwind CSS, Google Firestore</p>
					</div>
				</div>
			</div>
		</div>
	);
}
