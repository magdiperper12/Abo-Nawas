'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';
const MapsPage = () => {
	const { t } = useTranslation();
	return (
		<main className='bg-primary py-16 relative h-screen md:h-auto dark:bg-darkprimary text-darkprimary dark:text-primary px-6 pb-20'>
			{/* Title */}
			<motion.h1
				className='text-4xl md:text-6xl font-bold text-center mb-20'
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{t('officeTitle')}
			</motion.h1>

			{/* Map Embed */}
			<div className='max-w-7xl m-auto h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg mb-10'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.9807323615496!2d31.0845625!3d31.586062500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f73b0024e94461%3A0x772f4de389b926a7!2z2KfYqNmI2YbZiNin2LMg2YTZhNiq2KzYp9ix2Ycg2YjYp9mE2YXZgtin2YjZhNin2Kog2KfZhNi52KfZhdmH!5e1!3m2!1sen!2seg!4v1752036316626!5m2!1sen!2seg'
					width='100%'
					height='100%'
					style={{ border: 0 }}
					allowFullScreen={true}
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>

			<motion.div
				className=' absolute xl:bottom-0 xl:left-56 lg:bottom-0 -bottom-72 md:-bottom-96  grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-8 w-11/12 md:max-w-6xl mx-auto px-4 text-center py-12'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				viewport={{ once: true }}>
				{[
					{
						Icon: FaMapMarkerAlt,
						label: t('addressLabel'),
						value: t('addressValue'),
					},
					{
						Icon: FaPhoneAlt,
						label: t('phoneLabel'),
						value: t('phoneValue'),
					},
					{
						Icon: FaEnvelope,
						label: t('emailLabel'),
						value: t('emailValue'),
					},
				].map(({ Icon, label, value }, index) => (
					<motion.div
						key={index}
						className='bg-white dark:border-darksecoundry dark:bg-darkprimary border-2  rounded-2xl p-4 md:p-8 shadow-md hover:shadow-xl transition duration-300'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						viewport={{ once: true }}>
						<Icon className='text-2xl md:text-3xl m-auto mb-4 text-darksecoundry  dark:text-third' />
						<h3 className='text-base md:text-xl font-bold mb-2 text-forth dark:text-darkforth'>
							{label}
						</h3>
						<p className='text-xs md:text-base text-darksecoundry dark:text-darkthird'>
							{value}
						</p>
					</motion.div>
				))}
			</motion.div>
		</main>
	);
};

export default MapsPage;
