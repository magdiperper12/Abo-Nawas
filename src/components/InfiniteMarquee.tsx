'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useTranslation } from 'next-i18next';

interface Partner {
	icon: string;
	text: string;
}

const InfiniteMarquee: React.FC = () => {
	const { t } = useTranslation();
	const controls = useAnimation();
	const rawInfinitData = t('infinit', { returnObjects: true });
	const infinitData = Array.isArray(rawInfinitData)
		? (rawInfinitData as Partner[])
		: [];

	useEffect(() => {
		controls.start({
			x: '-100%',
			transition: {
				duration: 20, // يمكنك تعديل السرعة هنا
				ease: 'linear',
				repeat: Infinity,
				repeatType: 'loop',
			},
		});
	}, []);

	return (
		<div className='text-center'>
			<div className='w-full m-auto text-darkprimary dark:text-primary'>
				<h1 className='text-xl md:text-4xl font-extrabold mb-8'>
					{t('partners')}
				</h1>
			</div>

			<div className='w-full overflow-hidden bg-forth dark:bg-black dark:border-y-2 border-y-darkthird py-12'>
				<motion.div
					className='flex whitespace-nowrap gap-10 text-primary dark:text-secoundry text-lg font-medium'
					initial={{ x: '100%' }}
					animate={controls}>
					{infinitData.map((item, index) => (
						<div
							key={index}
							className='flex items-center gap-2 px-4 min-w-max uppercase tracking-wide cursor-pointer'>
							<div className='w-20 h-20'>
								<img
									src={item.icon}
									alt={item.text}
									className='object-contain'
								/>
							</div>
							<span className='text-2xl'>{item.text}</span>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default InfiniteMarquee;
