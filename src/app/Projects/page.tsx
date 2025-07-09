'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { myProjects } from './ProjectElement';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Projects() {
	const { t } = useTranslation();

	const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
		null
	);

	const handleShow = (index: number) => {
		setActiveProjectIndex(index); // بدلًا من index - 1
	};
	useEffect(() => {
		if (activeProjectIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [activeProjectIndex]);

	return (
		<section className='py-24 px-4  text-gray-700 dark:text-white transition-colors duration-500'>
			<div className='max-w-7xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-6xl font-bold text-center mb-16'
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					{t('OurProjects')}
				</motion.h1>

				<div className='grid xl:gap-x-20 xl:gap-y-28 lg:gap-y-12 lg:gap-x-10 gap-y-16  sm:grid-cols-1 lg:grid-cols-2'>
					{myProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className='md:rounded-[30px]  rounded-xl overflow-hidden group p-2 lg:p-3 xl:p-6  bg-white dark:bg-darkprimary dark:border-darkthird/25 border-2 shadow-xl hover:shadow-sm transition duration-300'>
							<div className='relative w-full h-[250px] md:h-[400px] overflow-hidden bg-gray-200 rounded-xl dark:rounded-none dark:bg-gray-950 dark:border-b-2 border-orange-900/60 '>
								<Image
									src={project.image}
									alt='Tech tag'
									fill
									className=' object-contain  px-3 scale-105 w-full group-hover:scale-110 transition-transform duration-500'
								/>
							</div>

							<div className='md:p-10 p-6 lg:p-4 xl:p-8 lg:pb-10 xl:pb-10'>
								<h3 className='text-3xl font-bold text-[#000000] dark:text-[#FFB22C] mb-4'>
									{project.title}
								</h3>
								<p className='text-lg text-[#E38B29] dark:text-[#F7F7F7] mb-6'>
									{project.description}
								</p>
								<div className='flex items-center flex-wrap gap-4'>
									<button
										onClick={() => handleShow(index)}
										className='md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-[#F1A661] dark:bg-[#FFB22C] text-white font-semibold rounded-full hover:opacity-90 transition'>
										{t('ViewDetails')}
									</button>
									<a
										href={project.href}
										target='_blank'
										rel='noopener noreferrer'
										className='md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-[#E38B29] dark:bg-[#F7F7F7] text-white dark:text-darkprimary font-semibold rounded-full hover:opacity-90 transition'>
										{t('LiveSite')}
									</a>
									<span className='ml-auto md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-darkprimary dark:bg-white text-white dark:text-darkprimary font-semibold rounded-full transform transition-transform'>
										{project.type}
									</span>
									{activeProjectIndex === index && (
										<div className='z-50 fixed  top-0 right-0  flex items-center justify-center gap-2 h-[100vh] w-full bg-darkprimary/60'>
											<div className=' p-5 rounded-lg shadow-lg max-w-4xl bg-white dark:bg-gray-950 max-h-[100vh] w-full'>
												<div className='relative w-11/12 m-auto   h-[250px] md:h-[350px] overflow-hidden  dark:bg-darkprimary/5'>
													<div className='bg-gray-100 dark:bg-gray-900 rounded-xl    w-full h-full'>
														<Image
															src={project.image}
															alt={project.title}
															fill
															className='object-contain  bg-transparent scale-105 hover:scale-125 transition-transform duration-500'
														/>
													</div>
												</div>
												<h2 className='text-2xl text-orange-400 text-center font-bold m-4 '>
													{project.title}
												</h2>
												<p className='text-lg mb-4'>{project.description}</p>
												<ul className='list-disc pl-5 mb-4'>
													{project.subDescription.map((feature, idx) => (
														<li
															key={idx}
															className='text-sm'>
															{feature}
														</li>
													))}
												</ul>
												<ul className=' pl-5 mb-4 flex justify-center items-center gap-4 '>
													{project.tags.map((tag, idx) => (
														<li
															key={idx}
															className='text-lg'>
															<img
																className='w-10 h-10 rounded-full '
																src={tag.path}
															/>
														</li>
													))}
												</ul>
												<div className='flex justify-end'>
													<button
														onClick={() => setActiveProjectIndex(null)}
														className='px-4 mb-5 py-2 bg-[#F1A661] dark:bg-[#FFB22C] text-white font-semibold rounded-full hover:opacity-90 transition'>
														{t('Close')}
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
