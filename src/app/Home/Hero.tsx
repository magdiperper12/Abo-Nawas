'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
const Hero = () => {
	const { t } = useTranslation();
	const items = [
		{
			title: t('our_vision'),
			desc: t('vision_text'),
			icon: '💡',
		},
		{
			title: t('our_approach'),
			desc: t('approach_text'),
			icon: '🤝',
		},
		{
			title: t('our_goals'),
			desc: t('goals_text'),
			icon: '🏆',
		},
	];
	return (
		<div className='  space-y-20 -mt-32     text-darkprimary dark:text-primary px-6 '>
			<div>
				<section className=' mx-auto text-center'>
					<motion.h1
						className='text-4xl md:text-6xl font-extrabold mb-6'
						initial={{ opacity: 0, y: -40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}>
						{t('welcom')}
						<span className='text-darksecoundry dark:text-secoundry px-3'>
							{t('brand')}
						</span>
					</motion.h1>
					<motion.p
						className='text-2xl flex flex-col text-darksecoundry dark:text-primary mb-8 max-w-2xl mx-auto'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}>
						<span className='text-darkprimary dark:text-secoundry '>
							{' '}
							{t('history_title')}
						</span>
						<span className=''> {t('history_text')}</span>
					</motion.p>

					<motion.div
						className='flex justify-center gap-4'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4 }}>
						<Link
							href='/Contact'
							className='bg-forth dark:bg-third text-primary px-6 py-3 rounded-md font-semibold hover:bg-third transition'>
							{t('nav_contact')}
						</Link>
						<Link
							href='/About'
							className='border-forth dark:border-third border-2 dark:text-primary hover:text-primary px-6 py-3 rounded-md font-semibold hover:bg-darksecoundry dark:hover:bg-third transition'>
							{t('learn_more')}
						</Link>
					</motion.div>
				</section>

				{/* Features Section */}
				<section className='mt-14 max-w-6xl mx-auto'>
					<motion.h2
						className='text-3xl font-bold  text-center mb-10'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5 }}>
						<span className=''>{t('whyChoose')}</span>
					</motion.h2>
					<div className='grid gap-10 md:grid-cols-3 text-center'>
						{items.map((feature, i) => (
							<motion.div
								key={i}
								className='rounded-xl p-6 border border-darkthird dark:border-darksecoundry bg-pritext-primary  shadow-sm hover:shadow-md transition'
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 * i }}>
								<div className='text-4xl mb-3'>{feature.icon}</div>
								<h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
								<p className='text-darkprimary dark:text-darkforth'>
									{feature.desc}
								</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Hero;
