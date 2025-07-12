'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Services = () => {
	const { t } = useTranslation('translation');

	type ProductSection = {
		mainimage: string | undefined;
		id: any;
		category: string;
	};

	const raw = t('product_sections', { returnObjects: true });
	const product_sections = Array.isArray(raw) ? (raw as ProductSection[]) : [];

	if (!Array.isArray(raw)) {
		return (
			<div className='text-center text-darksecoundry mt-10'>
				Error: product_sections is not an array.
			</div>
		);
	}

	return (
		<main
			id='services'
			className='py-32 bg-gradient-to-tr from-primary to-white dark:from-forth dark:to-darkprimary text-blue-900 dark:text-white px-6'>
			<motion.h1
				className='text-4xl md:text-6xl font-extrabold text-center mb-10 text-darksecoundry dark:text-primary'
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				{t('servicesTitle')}
			</motion.h1>

			<motion.p
				className='max-w-3xl mx-auto text-center text-lg md:text-xl mb-16 text-darkprimary dark:text-darkforth font-medium tracking-wide'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.6 }}>
				{t('servicesIntro')}
			</motion.p>
			<section className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-2'>
				{product_sections.map((section, sectionIndex) => (
					<div
						key={sectionIndex}
						className='mb-16'>
						<Link
							key={sectionIndex}
							href={`/Services/Items?category=${encodeURIComponent(
								section.category
							)}`}
							className='group block rounded-2xl border  dark:border-darkthird dark:shadow-forth dark:hover:shadow-darksecoundry p-6 shadow-lg bg-darksecoundry dark:bg-darkprimary hover:shadow-2xl hover:shadow-darkforth shadow-darkforth transition-shadow duration-300 relative overflow-hidden'>
							<h2 className='text-3xl font-bold text-center text-primary  mb-10 tracking-wide'>
								{section.category}
							</h2>
							<motion.div
								initial={{ opacity: 0, y: 60 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.7, ease: 'easeOut' }}
								viewport={{ once: true }}
								className='flex flex-col h-full'>
								<div className='overflow-hidden rounded-lg shadow-md'>
									<img
										src={section.mainimage}
										alt={section.category}
										className='w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105'
										loading='lazy'
									/>
								</div>
							</motion.div>
							<motion.span
								className='mt-4 inline-block text-darkthird  dark:text-darkthird font-semibold group-hover:underline cursor-pointer'
								transition={{ type: 'spring', stiffness: 300 }}>
								{t('View Details')}
							</motion.span>
						</Link>
					</div>
				))}
			</section>
		</main>
	);
};

export default Services;
