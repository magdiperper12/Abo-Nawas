'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

type ProductCard = {
	image: string;
};
type video = {
	video: string;
};
const catalogData: ProductCard[] = [
	{
		image: '/image/other/other.jpg',
	},
	{
		image: '/image/other/other2.jpg',
	},
	{
		image: '/image/other/other3.jpg',
	},
	{
		image: '/image/other/other4.jpg',
	},
	{
		image: '/image/other/other5.jpg',
	},
	{
		image: '/image/other/other6.jpg',
	},
	{
		image: '/image/other/other7.jpg',
	},
	{
		image: '/image/other/other8.jpg',
	},
	{
		image: '/image/other/other9.jpg',
	},
	{
		image: '/image/other/other10.jpg',
	},
	{
		image: '/image/other/other11.jpg',
	},
	{
		image: '/image/other/other12.jpg',
	},
];
const otherVideo: video[] = [
	{
		video: '/image/other/video/video_with_new_audio.mp4',
	},
	{
		video: '/image/other/video/first.mp4',
	},

	{
		video: '/image/other/video/video3.mp4',
	},
	{
		video: '/image/other/video/video4.mp4',
	},
	{
		video: '/image/other/video/video5.mp4',
	},
	{
		video: '/image/other/video/video6.mp4',
	},
];
const Other = () => {
	const { t } = useTranslation();
	return (
		<main className='py-36 px-3 md:px-16 bg-white dark:bg-darkprimary text-darkprimary dark:text-white'>
			<motion.h1
				className='text-4xl md:text-6xl font-bold text-center mb-10'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{t('Other')}
			</motion.h1>

			<motion.p
				className='max-w-3xl mx-auto text-center text-lg text-darksecoundry dark:text-gray-300 mb-16'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}>
				{t('descother_text')}
			</motion.p>

			<section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
				{otherVideo.map((item, idx) => (
					<motion.div
						whileHover={{ scale: 1.02 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						key={idx}
						className='bg-white  dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl shadow-darkforth dark:shadow-forth  transition-all duration-300'>
						<video
							src={item.video}
							controls
							playsInline
							className='w-full h-64 object-cover'
						/>
					</motion.div>
				))}
			</section>
			<section className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
				{catalogData.map((item, idx) => (
					<motion.div
						whileHover={{ scale: 1.02 }}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4 }}
						key={idx}
						className='bg-white  dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl shadow-darkforth dark:shadow-forth  transition-all duration-300'>
						<Image
							src={item.image}
							alt={'item.title'}
							width={500}
							height={300}
							className='object-contain w-full h-screen'
						/>
					</motion.div>
				))}
			</section>
		</main>
	);
};

export default Other;
