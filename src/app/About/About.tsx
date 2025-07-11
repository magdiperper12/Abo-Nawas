'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
const About = () => {
	const { t } = useTranslation();
	const items = [
		{
			title: t('our_values'),
			desc: t('values_text'),
			icon: '🏆',
		},
		{
			title: t('our_goals'),
			desc: t('goals_text'),
			icon: '🤝',
		},
		{
			title: t('our_vision'),
			desc: t('vision_text'),

			icon: '💡',
		},
	];

	return (
		<main
			id='about'
			className=' py-16 bg-primary dark:bg-darkprimary text-darkprimary dark:text-darkthird  p-6 '>
			<section className='max-w-5xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-5xl dark:text-primary text-darkprimary font-bold mb-6 text-center'
					initial={{ opacity: 0, y: -40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					{t('learn_more')}
				</motion.h1>

				{/* <motion.p
					className='text-lg text-darksecoundry dark:	text-darkforth text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					{t('history_text')}
				</motion.p>
				<motion.p
					className='text-lg text-darksecoundry dark:text-darkforth text-center mb-12'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}>
					{t('continue_text')}
				</motion.p> */}

				<div className='grid md:grid-cols-2 gap-12'>
					<motion.div
						className='space-y-4'
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}>
						<h2 className='text-2xl font-semibold text-darksecoundry dark:text-darkthird'>
							{t('history_title')}
						</h2>
						<p className='text-darkprimary dark:text-primary'>
							{t('history_text')}
						</p>
					</motion.div>

					<motion.div
						className='space-y-4'
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<h2 className='text-2xl font-semibold text-darksecoundry dark:text-darkthird'>
							{t('continue_title')}
						</h2>
						<p className='text-darkprimary dark:text-primary'>
							{t('continue_text')}
						</p>
					</motion.div>
				</div>

				{/* Core Values */}
				<motion.div
					className='mt-20 hidden md:block'
					initial={{ opacity: 0, x: -40 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.6 }}>
					<h2 className='text-3xl font-bold text-center mb-10'>
						{t('valuesTitle')}
					</h2>
					<div className='grid md:grid-cols-3 gap-8 text-center m-auto'>
						{items.map((value, i) => (
							<motion.div
								key={i}
								className='p-6 border rounded-xl  shadow-xl hover:shadow-md hover:shadow-darkforth transition shadow-darkforth dark:shadow-forth dark:hover:shadow-darksecoundry border-darkthird '
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 * i }}>
								<div className='text-4xl mb-2'>{value.icon}</div>
								<h3 className='text-xl font-semibold mb-1 text-darksecoundry dark:text-darkthird'>
									{value.title}
								</h3>
								<p className='text-darkprimary dark:text-primary'>
									{value.desc}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</section>
		</main>
	);
};

export default About;
