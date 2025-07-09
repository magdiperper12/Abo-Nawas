'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { HiGlobeAlt } from 'react-icons/hi';

export default function LanguageSwitcher() {
	const { i18n, t } = useTranslation();

	const toggleLanguage = () => {
		const newLang = i18n.language === 'en' ? 'ar' : 'en';
		i18n.changeLanguage(newLang);
	};

	return (
		<div className='text-darkprimary dark:text-darkthird'>
			<button
				onClick={toggleLanguage}
				className='flex items-center   py-2 font-bold transition duration-300'>
				<HiGlobeAlt className='w-10 h-10 md:w-9 md:h-9 text-darksecoundry dark:text-darkthird' />
				<span className='text-2xl md:text-xl uppercase'>
					{i18n.language === 'en' ? 'ع' : 'EN'}
				</span>
			</button>
		</div>
	);
}
