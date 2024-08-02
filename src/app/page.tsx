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
					<div className='flex flex-row'>
						<div className='fixed top-0 left-0 w-36 h-full bg-red-500'></div>
						<div className='relative mt-8 z-1 w-20'>
							<p className='text-2xl mb-4'>bzrblog</p>
							<ul>
								<li className='text-sm'>About</li>
								<li className='text-sm'>Messy</li>
							</ul>
						</div>

						<div className='w-2/3 m-auto'>
							<div className='mt-10 w-3/4'>
								{data.map((item, index) => {
									return (
										<div className='mb-8'>
											<div
												key={index}
												className='grid grid-cols-8 grid-flow-row group hover:cursor-pointer'>
												<p className='opacity-25 col-start-1 col-end-2 group-hover:opacity-50'>
													{item.date}
												</p>
												<p className='col-start-2 col-end-9 opacity-60 group-hover:opacity-100'>
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
				</div>
			</NextUIProvider>
		</main>
	);
}
