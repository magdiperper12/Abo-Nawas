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
	const infinitData = t('infinit', { returnObjects: true }) as Partner[];
	const startAnimation = () =>
		controls.start({
			x: '-100%',
			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				duration: 16,
				ease: 'linear',
			},
		});

	useEffect(() => {
		startAnimation(); // تبدأ الحركة تلقائيًا عند التحميل
	}, []);

	const handleHoverStart = () => controls.stop();
	const handleHoverEnd = () => startAnimation();

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
					initial={{ x: '0%' }}
					animate={controls}
					onMouseEnter={handleHoverStart}
					onMouseLeave={handleHoverEnd}>
					{[...infinitData, ...infinitData].map((item, index) => (
						<motion.div
							key={index}
							className='flex items-center gap-2 px-4 min-w-max uppercase tracking-wide cursor-pointer'
							whileHover={{ scale: 1.1, color: '#ccf' }}
							transition={{ type: 'spring', stiffness: 300 }}>
							<div className='w-20 h-20 '>
								<img
									src={item.icon}
									alt={''}
									className=' object-contain'
								/>
							</div>

							<span className='text-2xl'>{item.text}</span>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default InfiniteMarquee;
