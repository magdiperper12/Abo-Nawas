'use client';

import React, { useEffect, useState } from 'react';
import BackToTopButton from './BackToTopButton';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
function MainButton() {
	const { t } = useTranslation();
	const [hideFooter, setHideFooter] = useState(false);

	useEffect(() => {
		const url = window.location.href.toString();
		setHideFooter(url.includes('Pricing'));
	}, []);

	if (hideFooter) return null;
	return (
		<div className='flex justify-between  items-center w-full z-50'>
			<div className='fixed bottom-20 md:bottom-28 lg:bottom-32 xl:bottom-24 left-0 p-10 bg-transparent'>
				<BackToTopButton />
			</div>

			<div className='fixed bottom-0 xl:-bottom-8 right-0 p-10  pb-16 md:p-14 md:pb-24  bg-transparent'>
				<AnimatePresence>
					<motion.div
						className='flex flex-col items-center justify-center mb-3'
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 50 }}
						transition={{ duration: 0.4 }}>
						<Link
							href='https://wa.me/201002950495'
							target='_blank'
							className='bg-green-500 text-white  group relative p-2 text-3xl rounded-full m-2  h-12 w-12 md:h-16 md:w-16 cursor-pointer shadow-lg shadow-secoundry dark:shadow-darksecoundry flex justify-center items-center  z-20'>
							<span className='invisible absolute text-center -left-32  w-24 start-full rounded bg-darksecoundry text-darkforth px-3 py-2 text-sm font-medium  group-hover:visible'>
								{t('whatsapp')}
							</span>
							<IoLogoWhatsapp />
						</Link>
						<Link
							href='https://www.facebook.com/people/%D8%A3%D8%A8%D9%88-%D9%86%D9%88%D8%A7%D8%B3-%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D9%87-%D9%88%D8%A7%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA-%D9%88%D8%A7%D9%84%D8%AA%D8%B4%D9%83%D9%8A%D9%84%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D9%87/100063877210927/?mibextid=wwXIfr&rdid=NndfTi0rnWAH0bk6&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Er1BezmBx%2F%3Fmibextid%3DwwXIfr'
							target='_blank'
							className='bg-blue-600 text-white group relative p-2 text-3xl rounded-full m-2  h-12 w-12 md:h-16 md:w-16 cursor-pointer shadow-lg shadow-secoundry dark:shadow-darksecoundry flex justify-center items-center  z-20'>
							<span className='invisible absolute text-center -left-32 w-24 start-full rounded bg-darksecoundry text-darkforth px-3 py-2 text-sm font-medium  group-hover:visible'>
								{t('messanger')}
							</span>
							<FaFacebookMessenger />
						</Link>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default MainButton;
