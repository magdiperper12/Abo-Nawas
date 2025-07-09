'use client';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from './useDarkMode';

const Dark: React.FC = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<div className='text-nowrap'>
			<div
				className=' m-auto lg:w-auto rounded-full flex items-center cursor-pointer'
				onClick={toggleDarkMode}>
				<div
					className={`w-9 h-9 md:w-8 md:h-8 rounded-full flex justify-center items-center ${
						isDarkMode ? 'bg-yellow-50' : 'bg-darkprimary'
					}`}>
					{isDarkMode ? (
						<FaSun className='text-red-600  text-xl' />
					) : (
						<FaMoon className='text-darkforth   text-xl' />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dark;
