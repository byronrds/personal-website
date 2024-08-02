'use client';
import { data } from '../../dummydata';
import { useRouter } from 'next/navigation';
import { NextUIProvider } from '@nextui-org/react';
import { Button, ButtonGroup } from '@nextui-org/button';

export default function Home() {
	const router = useRouter();
	const handleNavigation = () => {
		router.push('/messy');
	};
	return (
		<main>
			<NextUIProvider>
				<div>
					<p className='text-2xl mb-8'>bzrblog</p>
					<Button className='absolute top-8 right-8' color='primary' onClick={() => handleNavigation()}>
						messy
					</Button>
					<div className='w-2/3 m-auto'>
						<p className='mb-8'>
							This is my blog. You can think of it as having two sections. formal and informal. smart and
							messy. Below you will see some of my more refined thoughts. Click the "messy" button to view
							some of my thoughts. They are kinda scattered and as you might think, a bit messy, but
							nonetheless things I think about and would like to talk about. Please make comments on my
							post and feel free to email me at <a href='mailto:bxr@byronxr.com'>bxr@byronxr.com</a>
						</p>

						<div className='w-3/4'>
							{data.map((item, index) => {
								return (
									<div className='mb-8'>
										<div
											key={index}
											className='grid grid-cols-8 grid-flow-row group hover:cursor-pointer'>
											<p className='opacity-25 col-start-1 col-end-2 group-hover:opacity-50'>
												{item.date}
											</p>
											<p className='col-start-2 col-end-9 opacity-50 group-hover:opacity-100'>
												{item.title}
											</p>

											<p className='col-start-2 col-end-9 opacity-25 group-hover:opacity-50'>
												{item.blurb}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</NextUIProvider>
		</main>
	);
}
