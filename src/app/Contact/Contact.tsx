'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
const Contact = () => {
	const [submitted, setSubmitted] = useState(false);
	const { t } = useTranslation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitted(true);
	};

	return (
		<main
			id='contact'
			className='container px-2 md:px-8 mx-auto mt-16 '>
			<motion.h1
				className='text-3xl mb-32 sm:text-4xl md:text-6xl font-extrabold text-center  text-darkprimary dark:text-primary'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{t('connectTitle')}
			</motion.h1>

			<div className='relative mb-20 md:mb-40'>
				<img
					src='/image/Reading.png'
					alt='mobile application الموبايل'
					className='w-auto z-20  h-64 md:h-72 lg:h-1/2 xl:h-5/6 object-cover  absolute xl:-top-64 lg:-top-40 md:-top-44 -top-36 left-1/2 md:left-2/3 xl:left-6/12 '
				/>

				<motion.form
					onSubmit={handleSubmit}
					className='relative z-10 max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 bg-primary dark:bg-blue-950 dark:border-2 dark:border-darksecoundry text-darkprimary dark:text-primary p-3 md:p-8 rounded-2xl shadow-xl'
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}>
					{/* Inputs */}
					<div className='space-y-5 w-full'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-semibold mb-1'>
								{t('formName')}
							</label>
							<input
								required
								type='text'
								placeholder='Your Name'
								id='name'
								className='w-full rounded-lg border border-darkthird dark:border-darkthird bg-primary dark:bg-darkprimary px-4 py-3 outline-none focus:ring-2 focus:ring-secoundry'
							/>
						</div>

						<div>
							<label className='block text-sm font-semibold mb-1'>
								Phone Number
							</label>
							<input
								type='tel'
								name='phone'
								placeholder='+20 01021589478'
								className='w-full rounded-lg border border-darkthird dark:border-darkthird bg-primary dark:bg-darkprimary px-4 py-3 outline-none focus:ring-2 focus:ring-secoundry text-darkprimary'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-semibold mb-1'>
								{t('formEmail')}
							</label>
							<input
								required
								type='email'
								placeholder='Your Email'
								id='email'
								className='w-full rounded-lg border border-darkthird dark:border-darkthird bg-primary dark:bg-darkprimary px-4 py-3 outline-none focus:ring-2 focus:ring-secoundry'
							/>
						</div>
					</div>

					{/* Message Textarea */}
					<div className='w-full'>
						<label
							htmlFor='message'
							className='block text-sm font-semibold mb-1'>
							{t('formMessage')}
						</label>
						<textarea
							required
							id='message'
							rows={6}
							className='w-full min-h-36 md:min-h-56 rounded-lg border border-darkthird dark:border-darkthird bg-primary dark:bg-darkprimary px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-secoundry'></textarea>
					</div>

					{/* Submit Button */}
					<motion.a
						className=' md:col-span-2 bg-third dark:bg-darkprimary text-primary text-base sm:text-lg font-semibold py-3 px-6 rounded-xl hover:bg-darkthird transition-all duration-200 flex justify-center items-center w-1/2 m-auto'
						href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ceo@abonawas.com'
						target='_blank'
						rel='noopener noreferrer'>
						{t('sendMessage')}
					</motion.a>

					{/* Submitted Message */}
					{submitted && (
						<motion.p
							className='text-center text-secoundry dark:text-third font-medium mt-4 md:col-span-2'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}>
							✅ Thanks! We’ve received your message and will reach out soon.
						</motion.p>
					)}
				</motion.form>
			</div>
		</main>
	);
};

export default Contact;
