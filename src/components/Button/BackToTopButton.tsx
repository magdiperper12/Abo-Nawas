'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show/hide button on scroll
	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return isVisible ? (
		<div>
			<div className=' absolute  h-14 w-14 md:h-16 md:w-16 cursor-pointer     flex justify-center items-center  z-40 bg-third text-third p-5 rounded-full shadow-lg hover:bg-darkprimary transition dark:bg-third dark:hover:bg-secoundry dark:hover:text-white'></div>
			<button
				onClick={scrollToTop}
				className='absolute h-14 w-14 md:h-16 md:w-16 cursor-pointer flex justify-center items-center z-50 bg-third text-third p-5 rounded-full shadow-lg hover:bg-darkprimary transition dark:bg-third dark:hover:bg-secoundry dark:hover:text-white'
				aria-label='Back to top'>
				<FaArrowUp className='text-lg text-white' />
			</button>
		</div>
	) : (
		<div></div>
	);
};

export default BackToTopButton;
