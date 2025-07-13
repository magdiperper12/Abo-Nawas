'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

type ProductCard = {
	image: string;
};
const catalogData: ProductCard[] = [
	{
		image: '/image/rosomat/rosomat.PNG',
	},
	{
		image: '/image/rosomat/rosomat2.PNG',
	},
	{
		image: '/image/rosomat/rosomat3.PNG',
	},
	{
		image: '/image/rosomat/rosomat4.PNG',
	},
	{
		image: '/image/rosomat/rosomat5.PNG',
	},
	{
		image: '/image/rosomat/rosomat6.PNG',
	},
	{
		image: '/image/rosomat/rosomat7.PNG',
	},
	{
		image: '/image/rosomat/rosomat8.PNG',
	},
	{
		image: '/image/rosomat/rosomat9.PNG',
	},
	{
		image: '/image/rosomat/rosomat10.PNG',
	},
	{
		image: '/image/rosomat/rosomat11.PNG',
	},
	{
		image: '/image/rosomat/rosomat12.PNG',
	},
	{
		image: '/image/rosomat/rosomat13.PNG',
	},
	{
		image: '/image/rosomat/rosomat14.PNG',
	},
	{
		image: '/image/rosomat/rosomat15.PNG',
	},
	{
		image: '/image/rosomat/rosomat16.PNG',
	},
	{
		image: '/image/rosomat/rosomat17.PNG',
	},
	{
		image: '/image/rosomat/rosomat18.PNG',
	},
	{
		image: '/image/rosomat/rosomat19.PNG',
	},
	{
		image: '/image/rosomat/rosomat20.PNG',
	},
	{
		image: '/image/rosomat/rosomat21.PNG',
	},
	{
		image: '/image/rosomat/rosomat22.PNG',
	},
	{
		image: '/image/rosomat/rosomat23.PNG',
	},
	{
		image: '/image/rosomat/rosomat24.PNG',
	},
	{
		image: '/image/rosomat/rosomat25.PNG',
	},
	{
		image: '/image/rosomat/rosomat26.PNG',
	},
	{
		image: '/image/rosomat/rosomat27.PNG',
	},
];
const Rosomat = () => {
	const { t } = useTranslation();
	return (
		<main className='py-36 px-3 md:px-16 bg-white dark:bg-darkprimary text-darkprimary dark:text-white'>
			<motion.h1
				className='text-4xl md:text-6xl font-bold text-center mb-10'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				{t('Rosomat')}
			</motion.h1>

			<motion.p
				className='max-w-3xl mx-auto text-center text-lg text-darksecoundry dark:text-gray-300 mb-16'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}>
				{t('descRosomat')}
			</motion.p>

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

export default Rosomat;
