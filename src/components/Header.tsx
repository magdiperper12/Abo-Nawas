'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import Dark from './Dark';
import Lang from './Lang';
import { useTranslation } from 'next-i18next';
import { Suspense } from 'react';
import NestedNav from './NestNav';
import Image from 'next/image';
const Header = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	if (!i18n.isInitialized) return null;

	const navLinks = [
		{ name: t('nav_home'), href: '/' },
		{ name: t('nav_projects'), href: '/Projects' },
		{ name: t('catalog'), href: '/Catalog' },
		{ name: t('Rosomat'), href: '/Rosomat' },
		{ name: t('Other'), href: '/other' },
		{ name: t('nav_contact'), href: '/Contact' },
	];
	return (
		<header className='backdrop-blur-lg dark:bg-darkprimary/10 bg-white/10 dark:shadow-forth/20 shadow-forth/10 	  fixed   w-full pb-2   text-darkprimary  dark:text-white  shadow-lg '>
			<div className='mx-auto flex  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link
					href='/'
					className='w-20 h-20 overflow-hidden'>
					<Image
						src='/image/Abo Nawas.png'
						alt='شركة كودا - تطوير البرمجيات والذكاء الاصطناعي'
						width={100}
						height={100}
						priority
						className=' m-auto'
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className='hidden lg:flex items-center  gap-9  font-bold text-lg'>
					{navLinks.map((link, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * i }}>
							<Link
								className='hover:text-darksecoundry transition focus:text-third  '
								href={link.href}>
								{link.name}
							</Link>
						</motion.div>
					))}
					<NestedNav />
				</nav>

				{/* Right actions */}
				<div className='flex items-center gap-4'>
					<Dark />
					<Lang />
					{/* Mobile Menu Button */}
					<button
						className='lg:hidden  p-2 text-darkprimary text-3xl dark:text-primary'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
				</div>
			</div>

			{isOpen && (
				<motion.nav
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: 'auto' }}
					exit={{ opacity: 0, height: 0 }}
					transition={{ duration: 0.3 }}
					className='fixed z-50  w-full left-0 top-0 lg:hidden px-4 pt-4 pb-6 space-y-10 bg-blue-50 dark:bg-darkprimary min-h-screen'>
					<button
						className='lg:hidden fixed right-4 top-4  p-2 text-darkprimary text-3xl dark:text-blue-100'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
					<nav className='h-screen space-y-10 '>
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 * i }}
								className='ps-5'>
								<Link
									className='hover:text-third transition focus:text-yellow-500 text-2xl font-bold'
									href={link.href}
									onClick={() => setIsOpen(!isOpen)}>
									{link.name}
								</Link>
							</motion.div>
						))}

						<div onClick={() => setIsOpen(!isOpen)}>
							<NestedNav />
						</div>
					</nav>
				</motion.nav>
			)}
		</header>
	);
};

export default Header;
