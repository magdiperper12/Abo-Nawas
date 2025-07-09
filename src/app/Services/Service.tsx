'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Services = () => {
	const { t } = useTranslation('translation');

	type ProductCard = {
		id: string;
		title: string;
		subtitle: string;
		image: string;
	};

	type ProductSection = {
		category: string;
		cards: ProductCard[];
	};

	const raw = t('product_sections', { returnObjects: true });
	const product_sections = Array.isArray(raw) ? (raw as ProductSection[]) : [];

	if (!Array.isArray(raw)) {
		return (
			<div className='text-center text-red-600 mt-10'>
				Error: product_sections is not an array.
			</div>
		);
	}

	return (
		<main
			id='services'
			className='py-16 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-darkprimary dark:to-darksecondary text-gray-900 dark:text-white px-6'>
			<motion.h1
				className='text-4xl md:text-6xl font-extrabold text-center mb-10 text-gradient bg-clip-text text-transparent from-darktext-darkthird via-darkthird to-pink-600 bg-gradient-to-r'
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				{t('servicesTitle')}
			</motion.h1>

			<motion.p
				className='max-w-3xl mx-auto text-center text-lg md:text-xl mb-16 text-gray-600 dark:text-gray-300 font-medium tracking-wide'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}>
				{t('servicesIntro')}
			</motion.p>

			{product_sections.map((section, sectionIndex) => (
				<div
					key={sectionIndex}
					className='mb-16'>
					<h2 className='text-3xl font-bold text-center text-darksecoundry dark:text-yellow-400 mb-8 tracking-wide'>
						{section.category}
					</h2>
					<section className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-2'>
						{section.cards.map((card) => (
							<Link
								key={card.id}
								href={`/Services/${card.id}`}
								className='group block rounded-2xl border border-gray-300 dark:border-gray-700 p-6 shadow-lg bg-white dark:bg-gray-900 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'>
								<motion.div
									initial={{ opacity: 0, y: 60 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.7, ease: 'easeOut' }}
									viewport={{ once: true }}
									className='flex flex-col h-full'>
									<div className='overflow-hidden rounded-lg shadow-md'>
										<img
											src={card.image}
											alt={card.title}
											className='w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105'
											loading='lazy'
										/>
									</div>
									<h3 className='mt-6 text-2xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-darkthird transition-colors duration-300'>
										{card.title}
									</h3>
									<p className='mt-2 text-gray-600 dark:text-gray-400 flex-grow'>
										{card.subtitle}
									</p>
									<motion.span
										className='mt-4 inline-block text-darkthird font-semibold group-hover:underline cursor-pointer'
										whileHover={{ scale: 1.1 }}
										transition={{ type: 'spring', stiffness: 300 }}>
										View Details →
									</motion.span>
								</motion.div>

								{/* خلفية متدرجة تتحرك عند hover */}
								<motion.div
									className='absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none bg-gradient-to-r from-yellow-200 via-purple-300 to-pink-300 opacity-0 group-hover:opacity-30 transition-opacity duration-500'
									initial={{ opacity: 0 }}
									animate={{ opacity: 0 }}
									whileHover={{ opacity: 0.3 }}
								/>
							</Link>
						))}
					</section>
				</div>
			))}
		</main>
	);
};

export default Services;
