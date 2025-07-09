'use client';

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type ProductCard = {
	id: string;
	title: string;
	subtitle: string;
	description?: string;
	image: string;
};

type ProductSection = {
	category: string;
	cards: ProductCard[];
};

const ProductPage = () => {
	const { t, i18n } = useTranslation('translation');
	const params = useParams();
	const router = useRouter();

	// التعامل مع حالة id ممكن تكون array أو undefined
	const id = Array.isArray(params?.id)
		? params.id[0]
		: typeof params?.id === 'string'
		? params.id
		: undefined;

	const [product, setProduct] = useState<ProductCard | null>(null);

	useEffect(() => {
		if (!id || !i18n.language) return;

		const raw = t('product_sections', { returnObjects: true });
		const product_sections: ProductSection[] = Array.isArray(raw)
			? (raw as ProductSection[])
			: [];

		for (const section of product_sections) {
			const found = section.cards.find((card) => card.id === id);
			if (found) {
				setProduct(found);
				return;
			}
		}

		setProduct(null);
	}, [id, i18n.language]);

	if (!id) {
		return (
			<main className='flex flex-col items-center justify-center min-h-screen p-10 text-center bg-gray-50 dark:bg-gray-900'>
				<p className='text-xl text-red-500'>المعرف غير متاح</p>
			</main>
		);
	}

	if (!product) {
		return (
			<main className='flex flex-col items-center justify-center min-h-screen p-10 text-center'>
				<motion.h1
					className='text-4xl font-extrabold mb-6 text-yellow-600 dark:text-yellow-400'
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}>
					{t('product_not_found')}
				</motion.h1>
				<p className='text-gray-600 dark:text-gray-300 mb-4'>
					{t('product_not_found')} (ID: {id})
				</p>
				<Link
					href={'/Services'}
					className='px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition'>
					{t('back_to_services')}
				</Link>
			</main>
		);
	}

	return (
		<main className='p-6 lg:pt-32 sm:p-10 max-w-4xl mx-auto rounded-lg shadow-lg'>
			<motion.h1
				className='text-4xl sm:text-5xl font-extrabold mb-6 text-center text-gray-900 dark:text-white'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{product.title}
			</motion.h1>
			<motion.div
				className='relative w-full h-64 sm:h-96 rounded-lg overflow-hidden mb-6 shadow-lg'
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}>
				<img
					src={product.image}
					alt={product.title}
					className='object-cover w-full h-full'
					loading='lazy'
				/>
			</motion.div>
			<motion.p
				className='text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 text-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.5 }}>
				{product.subtitle}
			</motion.p>
			{product.description && (
				<motion.p
					className='text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-prose mx-auto leading-relaxed'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.5 }}>
					{product.description}
				</motion.p>
			)}
		</main>
	);
};

export default ProductPage;
