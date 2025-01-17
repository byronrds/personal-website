'use client';
import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

export const LoadingDots = () => {
	const [dotCount, setDotCount] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setDotCount((prevCount) => (prevCount + 1) % 4); // cycle 0 to 3
		}, 400);

		return () => clearInterval(interval); // cleanup on unmount
	}, []);

	return (
		<div className='flex'>
			{[...Array(dotCount)].map((_, index) => (
				<FaCircle key={index} className='text-md mx-1 opacity-40' />
			))}
		</div>
	);
};
