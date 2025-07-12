'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Hero = () => {
	const { t } = useTranslation();

	const items = [
		{ key: 'our_vision', text: 'vision_text', icon: '💡' },
		{ key: 'our_approach', text: 'approach_text', icon: '🤝' },
		{ key: 'our_goals', text: 'goals_text', icon: '🏆' },
	];

	return (
		<div>
			<section
				className='relative h-screen bg-cover  bg-center text-white flex justify-center items-center flex-col'
				style={{
					backgroundImage: 'url(/image/sour/sour.webp)',
				}}>
				<div className='absolute inset-0 bg-black/70 dark:bg-black/80'></div>

				<div className='relative container mx-auto px-6 text-center space-y-6'>
					{/* Title */}
					<motion.h1
						className='text-4xl md:text-6xl font-extrabold mb-6 leading-tight'
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{t('welcom')}
						<span className='text-darkthird dark:text-secoundry px-3'>
							{t('brand')}
						</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						className='text-xl md:text-2xl text-darkforth dark:text-primary mb-8 max-w-2xl mx-auto space-y-2'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						<span className='block text-darkthird dark:text-secoundry'>
							{t('history_title')}
						</span>
						<span className='block text-primary'>{t('history_text')}</span>
					</motion.p>

					{/* Call to Actions */}
					<motion.div
						className='flex flex-wrap justify-center gap-4'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4 }}>
						<Link
							href='/Contact'
							className='bg-third dark:bg-third text-primary px-6 py-3 rounded-md font-semibold hover:bg-third transition'>
							{t('nav_contact')}
						</Link>
						<Link
							href='/About'
							className='border-2 border-third dark:border-third text-white dark:text-primary hover:text-primary hover:bg-third dark:hover:bg-third px-6 py-3 rounded-md font-semibold transition'>
							{t('learn_more')}
						</Link>
					</motion.div>
				</div>
			</section>
			{/* Features Section */}
			<section className='relative  max-w-6xl mx-auto px-4 mt-40'>
				<motion.h2
					className='text-3xl font-bold text-center mb-10'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}>
					{t('whyChoose')}
				</motion.h2>

				<div className='grid gap-10 md:grid-cols-3 text-center'>
					{items.map((item, i) => (
						<motion.div
							key={item.key}
							className='rounded-xl p-6 border border-darkthird dark:border-datext-darkforth bg-pritext-primary shadow-lg hover:shadow-md shadow-darkforth dark:shadow-forth dark:hover:shadow-datext-darkforth transition'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 * i }}>
							<div className='text-4xl mb-3'>{item.icon}</div>
							<h3 className='text-xl font-semibold mb-2'>{t(item.key)}</h3>
							<p className='text-darkprimary dark:text-darkforth'>
								{t(item.text)}
							</p>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Hero;
