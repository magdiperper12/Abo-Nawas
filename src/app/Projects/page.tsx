'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Strategy from './Strategy';

type ProjectType = {
	id: number;
	title: string;
	description: string;
	subDescription: string[];
	image: string;
};

export default function Projects() {
	const { t } = useTranslation();
	const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
		null
	);

	const handleShow = (index: number) => setActiveProjectIndex(index);
	const handleClose = () => setActiveProjectIndex(null);

	useEffect(() => {
		document.body.style.overflow =
			activeProjectIndex !== null ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [activeProjectIndex]);

	const raw = t('projects', { returnObjects: true });
	const projects: ProjectType[] = Array.isArray(raw)
		? (raw as ProjectType[])
		: [];

	if (!Array.isArray(projects)) {
		return (
			<div className='text-center text-red-600 mt-10'>
				Error: projects is not an array.
			</div>
		);
	}

	return (
		<section className='py-24 px-4 space-y-16 text-gray-700 dark:text-white transition-colors duration-500'>
			<Strategy />

			<div className='max-w-7xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-6xl font-bold text-center mb-16'
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					{t('OurProjects')}
				</motion.h1>

				<div className='grid xl:gap-x-20 xl:gap-y-28 lg:gap-y-12 lg:gap-x-10 gap-y-16 sm:grid-cols-1 lg:grid-cols-2'>
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className='rounded-xl overflow-hidden group p-4 bg-white dark:bg-darkprimary border-2 dark:border-darkthird/25 shadow-lg hover:shadow-xl transition duration-300'>
							<div className='relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-200 dark:bg-gray-950'>
								<Image
									src={project.image}
									alt={project.title}
									fill
									className='object-contain px-3 scale-105 group-hover:scale-110 transition-transform duration-500'
								/>
							</div>

							<div className='p-6 lg:p-4 xl:p-8'>
								<h3 className='text-3xl font-bold text-[#000000] dark:text-[#FFB22C] mb-4'>
									{project.title}
								</h3>
								<p className='text-lg text-[#E38B29] dark:text-[#F7F7F7] mb-6'>
									{project.description}
								</p>

								<div className='flex items-center flex-wrap gap-4'>
									<button
										onClick={() => handleShow(index)}
										className='ml-auto md:px-6 md:py-2 px-3 py-1 text-xs md:text-base bg-darkprimary dark:bg-white text-white dark:text-darkprimary font-semibold rounded-full transition-transform hover:scale-105'>
										{t('ViewDetails')}
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Overlay Details */}
			{activeProjectIndex !== null && (
				<div className='fixed z-50 top-0 left-0 w-full h-full bg-darkprimary/60 flex items-center justify-center'>
					<div className='bg-white dark:bg-gray-950 p-6 rounded-xl max-w-4xl w-full max-h-[95vh] overflow-auto shadow-2xl'>
						<div className='relative w-full h-[250px] md:h-[350px] mb-4'>
							<Image
								src={projects[activeProjectIndex].image}
								alt={projects[activeProjectIndex].title}
								fill
								className='object-contain rounded-md'
							/>
						</div>

						<h2 className='text-2xl text-orange-400 font-bold text-center mb-4'>
							{projects[activeProjectIndex].title}
						</h2>

						<p className='text-lg mb-4 text-gray-700 dark:text-gray-300'>
							{projects[activeProjectIndex].description}
						</p>

						<ul className='list-disc pl-5 text-sm md:text-base text-gray-800 dark:text-gray-300 space-y-2'>
							{projects[activeProjectIndex].subDescription.map((item, idx) => (
								<li key={idx}>{item}</li>
							))}
						</ul>

						<div className='text-end mt-6'>
							<button
								onClick={handleClose}
								className='px-4 py-2 bg-[#F1A661] dark:bg-[#FFB22C] text-white font-semibold rounded-full hover:opacity-90 transition'>
								{t('Close')}
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
