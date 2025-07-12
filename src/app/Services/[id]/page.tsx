'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Servicesitems = () => {
	const { t } = useTranslation('translation');
	const searchParams = useSearchParams();
	const selectedCategory = searchParams.get('category');

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

	const selectedSection = product_sections.find(
		(section) => section.category === selectedCategory
	);

	if (!Array.isArray(raw)) {
		return (
			<div className='text-center text-darksecoundry mt-10'>
				Error: product_sections is not an array.
			</div>
		);
	}

	if (!selectedSection) {
		return (
			<div className='text-center text-darksecoundry mt-10'>
				{t('noDataFound')}
			</div>
		);
	}

	return (
		<main className='py-44  bg-gradient-to-tr from-primary to-white dark:from-forth dark:to-darkprimary text-blue-900 dark:text-white'>
			<section className='max-w-7xl mx-auto'>
				<div className='flex gap-6  px-4 snap-x snap-mandatory bar-scroll'>
					{selectedSection.cards.map((card) => (
						<Link
							key={card.id}
							href={`/Services/Subservices/${card.id}`}
							className='group snap-center w-[360px] flex-shrink-0 rounded-2xl border p-4 shadow-lg bg-darksecoundry dark:bg-darkprimary hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden'>
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
										className='w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105'
										loading='lazy'
									/>
								</div>
								<h3 className='mt-6 text-xl font-semibold text-primary group-hover:text-secoundry transition-colors duration-300'>
									{card.title}
								</h3>
								<p className='mt-2 text-darkforth flex-grow'>{card.subtitle}</p>
								<motion.span className='mt-4 inline-block text-darkthird font-semibold group-hover:underline'>
									{t('View Details')}
								</motion.span>
							</motion.div>
						</Link>
					))}
				</div>
			</section>
		</main>
	);
};

export default Servicesitems;
