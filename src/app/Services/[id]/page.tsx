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
				<Link
					href={'/Services'}
					className='px-6 py-3 bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition'>
					{t('Back')}
				</Link>
			</main>
		);
	}

	return (
		<main className='p-6 pt-32 lg:pt-36 sm:p-10 max-w-4xl mx-auto rounded-lg '>
			<motion.h1
				className='text-4xl sm:text-5xl font-extrabold mb-6 text-center text-yellow-600 dark:text-white'
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}>
				{product.title}
			</motion.h1>
			<motion.div
				className='relative w-full h-[70vh] rounded-lg overflow-hidden mb-6 '
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6, delay: 0.2 }}>
				<img
					src={product.image}
					alt={product.title}
					className='object-contain w-full h-full rounded-xl shadow-lg'
					loading='lazy'
				/>
			</motion.div>
			<motion.p
				className='text-2xl text-yellow-950 dark:text-gray-300 mb-4 text-center'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4, duration: 0.5 }}>
				{product.subtitle}
			</motion.p>
			{product.description && (
				<motion.p
					className='text-xl text-yellow-600 dark:text-gray-400 max-w-prose mx-auto leading-relaxed'
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.5 }}>
					{product.description}
				</motion.p>
			)}

			<Link
				href={'/Services'}
				className='px-6 py-3 flex justify-center items-center  my-8 w-1/2 m-auto bg-yellow-600 text-white rounded-md shadow-md hover:bg-yellow-700 transition'>
				{t('Back')}
			</Link>
		</main>
	);
};

export default ProductPage;
