'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { FaCogs, FaIndustry, FaDraftingCompass, FaTools } from 'react-icons/fa';

type ExpertiseField = {
	title: string;
	description: string;
};

const icons = [<FaCogs />, <FaIndustry />, <FaDraftingCompass />, <FaTools />];

const Strategy = () => {
	const { t } = useTranslation();

	// Get translated expertise fields and make sure it's an array
	const rawFields = t('expertiseFields', { returnObjects: true });
	const expertiseFields: ExpertiseField[] = Array.isArray(rawFields)
		? rawFields
		: [];

	return (
		<div className='min-h-screen px-6 md:px-20 pt-16 pb-0 text-darkprimary dark:text-white container m-auto'>
			<motion.h1
				className='text-4xl md:text-6xl pb-12 font-bold text-center text-darkprimary dark:text-white'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				<span className='border-b-4 pb-3 border-darkprimary dark:border-white'>
					{t('area')}
				</span>{' '}
				{t('expertiseTitle')}
			</motion.h1>

			<motion.p
				className='text-xl md:text-2xl pb-16 font-bold text-center text-darkprimary dark:text-white'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{t('expertiseDescription')}
			</motion.p>

			<div className='flex justify-center items-center flex-col xl:flex-row gap-8'>
				<div className='w-auto h-80 md:h-72 lg:h-[400px] lg:w-2/3 object-cover'>
					<img
						src='/image/sour/sour.webp'
						alt={t('expertiseTitle')}
						className='w-auto h-full object-contain'
					/>
				</div>
				{/*src='/image/bawabat feer for g/bawaba4.webp'     src='/public/image/metal Acsessory/table3.webp'*/}
				<div className='grid grid-cols-1 gap-10 lg:w-1/3'>
					{expertiseFields.map((field, index) => (
						<motion.div
							key={index}
							whileTap={{ scale: 0.98 }}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className='bg-white dark:bg-gray-950 dark:border-2 dark:border-third rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-2xl'>
							<div className='p-6 flex items-start gap-4'>
								<div className='text-3xl text-darksecoundry dark:text-secoundry'>
									{icons[index % icons.length]}
								</div>
								<div>
									<h2 className='text-xl font-semibold mb-2'>{field.title}</h2>
									<p className='text-sm text-darksecoundry dark:text-gray-300'>
										{field.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Strategy;
