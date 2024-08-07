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
				<div className='mx-14 mt-8'>
					<h1 className='text-lg'>Here are some books I like.</h1>
					<p className='text-md opacity-50'>
						Email me your favorites...<a href='mailto:bxr@byronxr.com'>bxr@byronxr.com</a>
					</p>
					<ul className='mt-8 list-disc'>
						<li>21 Lessons for the 21st Century by Yuval Noah Harari</li>
						<li>The Celestine Prophecy by James Redfield</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
