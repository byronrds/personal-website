import Image from 'next/image';
import { data } from '../../dummydata';

export default function Home() {
	return (
		<main>
			<div>
				<p className='text-2xl mb-8'>bzrblog</p>
				<div className='w-3/4 m-auto'>
					<p className='mb-8'>
						This is my blog. You can think of it as having two sections. formal and informal. smart and
						messy. Below you will see some of my more refined thoughts. Click the "messy" button to view
						some of my thoughts. They are kinda scattered and as you might think, a bit messy, but
						nonetheless things I think about and would like to talk about. Please make comments on my post
						and feel free to email me at <a href='mailto:bxr@byronxr.com'>bxr@byronxr.com</a>
					</p>

					<div>
						{data.map((item, index) => {
							return (
								<>
									<h3>
										{item.title} -{' '}
										<span>
											<h5>{item.date}</h5>
										</span>
									</h3>
									<p>{item.blurb}</p>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
