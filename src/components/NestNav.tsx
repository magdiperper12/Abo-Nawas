import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

// Type definitions
interface Card {
	id: any;
	title: string;
	subtitle: string;
	image: string | StaticImageData;
}

interface ContentCategory {
	category: string;
	cards: Card[];
	id: string;
}

const navdata = [{ text: 'Latest News ▽', href: '/#' }];

const NestedNav: React.FC = () => {
	const { t, i18n } = useTranslation();
	if (!i18n.isInitialized) return null;

	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>('');

	const contentData = t('product_sections', {
		returnObjects: true,
	}) as ContentCategory[];

	useEffect(() => {
		// Set default selected category if none is selected
		if (!selectedCategory && contentData.length > 0) {
			setSelectedCategory(contentData[0].category);
		}
	}, [selectedCategory, contentData]);

	const renderCards = (cards: Card[]) =>
		cards.map((card, index) => (
			<div
				key={index}
				className='bg-primary rounded-t-lg dark:bg-darksecoundry/70 transition-transform transform hover:-translate-y-2 duration-300'>
				<div className='h-24 w-full overflow-hidden relative'>
					<Image
						src={card.image}
						alt={card.subtitle}
						fill
						className='object-contain rounded-t-lg'
					/>
				</div>
				<div className='px-4 py-3'>
					<h3 className='text-sm xl:text-lg font-bold line-clamp-1 text-darksecoundry/70 dark:text-primary'>
						{card.title}
					</h3>
					<p className='text-xs xl:text-sm text-darkthird line-clamp-1 dark:text-blue-300'>
						{card.subtitle}
					</p>
				</div>
			</div>
		));

	return (
		<div>
			{/* Desktop Navigation */}
			<nav className='flex gap-4 xl:gap-8 relative py-4 px-6 animate-fadeIn'>
				<div
					className='relative'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					<Link
						href='/Services'
						className='hover:text-darkthird text-2xl md:text-xl flex justify-center items-center gap-1  focus:text-darksecoundry   transition-all duration-300 ease-in-out'>
						{t('nav_products')}
						<span className='hidden md:flex justify-center items-center'>
							▽
						</span>
					</Link>

					{/* Hover Content */}
					{isHovered && (
						<div className=' absolute z-10 top-7 -end-96 transform bg-secoundry border-secoundry rounded-2xl overflow-hidden dark:border-darksecoundry border-2 text-darkprimary dark:bg-darkprimary shadow-lg shadow-darkforth dark:shadow-darkprimary hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-6 pe-2 xl:pe-4 w-[67vw] max-w-6xl animate-slideIn'>
							<div className='space-y-2 col-span-1 bg-primary dark:bg-darksecoundry '>
								{contentData.map((item, idx) => (
									<div
										key={idx}
										className=''>
										<p
											onClick={() =>
												setSelectedCategory(
													item.category === selectedCategory
														? ''
														: item.category
												)
											}
											className='text-sm xl:text-xl font-semibold text-center text-darksecoundry hover:bg-secoundry hover:text-primary dark:text-primary dark:hover:text-secoundry dark:hover:bg-darkprimary transition-all w-full py-4 cursor-pointer'>
											{item.category}
										</p>
									</div>
								))}
							</div>

							<div className='col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4  mb-4 pt-4 overflow-hidden'>
								{contentData
									.filter((item) => item.category === selectedCategory)
									.flatMap((item) =>
										item.cards.map((card, i) => (
											<Link
												key={i}
												href={`/Services/${card.id}`}
												className='block hover:scale-105 transition-transform duration-300'>
												<div className='bg-primary dark:bg-darksecoundry/70 shadow rounded-xl p-4 h-full flex flex-col items-center text-center'>
													<img
														src={
															typeof card.image === 'string'
																? card.image
																: card.image.src
														}
														alt={card.title}
														className='w-full h-40 object-cover rounded-md mb-3'
													/>
													<h3 className='text-lg font-semibold text-darkprimary dark:text-primary'>
														{card.title}
													</h3>
												</div>
											</Link>
										))
									)}
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Mobile Button */}
			<button
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label='menu'
				className='text-darkthird md:hidden dark:text-primary -ms-16 p-2 rounded-lg hover:bg-blue-200 dark:hover:bg-darksecoundry'>
				{menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
			</button>

			{/* Mobile Navigation */}
			<div
				className={`fixed md:hidden top-0 left-0 w-full h-full bg-secoundry dark:bg-darkprimary z-50 transform transition-transform ${
					menuOpen ? 'translate-x-0' : '-translate-x-full'
				} duration-300`}>
				<nav className='flex flex-col items-center justify-center h-full gap-6 text-lg font-semibold'>
					{navdata.map((link, index) => (
						<div
							key={link.text}
							className='relative w-full text-center'>
							<Link
								href={link.href}
								className='block py-4 text-darkthird dark:text-primary hover:text-darksecoundry transition-all'>
								{link.text}
							</Link>
						</div>
					))}
				</nav>

				{/* Close Button */}
				<button
					aria-label='close'
					onClick={() => setMenuOpen(false)}
					className='absolute md:hidden top-6 right-6 text-darkthird dark:text-primary p-2'>
					<FaTimes size={28} />
				</button>
			</div>
		</div>
	);
};

export default NestedNav;
