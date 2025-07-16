import MainButton from '../components/Button/MainButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	title:
		'أبو نواس  - الحدادة والكريتال  | Abo Nawas The Leading Metalwork Wrought Iron ',
	description:
		'أبو نواس - خبرة 35 سنة في تصميم وتصنيع البوابات الحديدية، درابزين السلالم، الأسوار، والهياكل المعدنية. نقدم حلول حدادة متينة وجميلة تناسب المنازل والفلل والمصانع. نخدم كفر الشيخ وطنطا والدلتا. | Abo Nawas – 35 years of expertise in designing and manufacturing iron gates, stair railings, fences, and metal structures. Durable and elegant metalwork solutions for homes, villas, and factories. Serving Kafr El-Sheikh, Tanta, and the Delta region. ',
	openGraph: {
		title: 'أبو نواس حديد  | Abo Nawas  Iron Designs ',
		description:
			'اكتشف حلول "أبو نواس" المتكاملة في أعمال الحدادة والكريتال منذ عام 1987 — تصميم وتصنيع بوابات حديد فاخرة، درابزين سلالم، شبابيك حماية، مظلات سيارات، برجولات حدائق، شعارات معدنية، فواصل زخرفية، وسلالم حديد. ندمج بين الحِرفة التقليدية والتقنيات الحديثة لنقدم لك تصاميم معدنية عالية الجودة تلبي احتياجات المنازل، الفلل، المصانع، والمشاريع التجارية بأعلى درجات الإتقان. | Discover Abo Nawas’ full-range metalwork solutions — premium iron gates, stair railings, window guards, car canopies, garden pergolas, metal logos, decorative dividers, and steel staircases. Since 1987, we’ve combined traditional craftsmanship with modern technology to deliver high-quality custom metal designs for residential, industrial, and commercial spaces with unmatched precision and elegance.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://abonawas.com/',
		images: [
			{
				url: 'https://abonawas.com/favicon.png', //Abo Nawas.png
				alt: 'أبو نواس - حدادة وكريتال منذ 1987 | Abo Nawas - Metalwork Since 1987',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'أبو نواس حديد  | Abo Nawas  Iron Designs ',
		description:
			'تأسست ورشة الشرنوبي على يد الحاج عبد السند الشرنوبي عام 1987، واليوم نواصل تقديم أعمال الحدادة والكريتال بخبرة واحترافية. خدماتنا تشمل تصنيع البوابات الحديدية، السلالم، الأسوار، الشبابيك، المظلات، الهياكل المعدنية، والديكورات الليزرية الحديثة، مع تنفيذ حسب الطلب.',
		images: ['/favicon.png'],
	},
	icons: {
		icon: '/favicon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ar'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>{' '}
				<meta
					name='author'
					content='أبو نواس | Abo Nawas'
				/>
				<meta
					name='robots'
					content='index, follow'
				/>
				<link
					rel='icon'
					type='image/png'
					href='/favicon.png'
				/>
				<meta
					name='application-name'
					content='أبو نواس لأعمال الحدادة والكريتال |  Abo Nawas The Leading Metalwork Wrought Iron'
				/>
				<meta
					name='image'
					content='https://abonawas.com/favicon.png'
				/>
				<link
					rel='canonical'
					href='https://abonawas.com/'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								'@context': 'https://schema.org',
								'@type': 'Organization',
								name: 'أبو نواس لأعمال الحدادة والكريتال  | Abo Nawas - Metalwork Since 1987',
								url: 'https://abonawas.com/',
								logo: 'https://abonawas.com/favicon.png',
								sameAs: [
									'https://www.facebook.com/people/أبو-نواس-للتجارة-والمقاولات-والتشكيلات-المعدنية/100063877210927/',
									'https://wa.me/201002950495',
								],
								description:
									'ورشة أبو نواس تأسست عام 1987 على يد الحاج عبد السند الشرنوبي... | Abo Nawas - Metalwork Since 1987',
								address: {
									'@type': 'PostalAddress',
									addressLocality: 'كفر الشيخ',
									addressRegion: 'دلتا مصر',
									addressCountry: 'EG',
								},
								contactPoint: {
									'@type': 'ContactPoint',
									telephone: '+20-100-295-0495',
									contactType: 'خدمة العملاء',
									areaServed: 'EG',
									availableLanguage: ['ar', 'en'],
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'WebSite',
								url: 'https://abonawas.com/',
								name: 'أبو نواس لأعمال الحدادة والكريتال  | Abo Nawas - Metalwork Since 1987',
								potentialAction: {
									'@type': 'SearchAction',
									target: 'https://abonawas.com/?s={search_term_string}',
									'query-input': 'required name=search_term_string',
								},
							},
							{
								'@context': 'https://schema.org',
								'@type': 'ImageObject',
								contentUrl: 'https://abonawas.com/favicon.png',
								url: 'https://abonawas.com/favicon.png',
								width: 800,
								height: 600,
								name: 'شعار أبو نواس',
							},
						]),
					}}
				/>
			</head>

			<body
				className={`bg-gradient-to-r relative ${roboto.className} text-darkprimary dark:text-primary custom-scroll overflow-x-hidden bg-primary dark:bg-darkprimary`}>
				<div className='fixed top-0  z-50'>
					<Header />
				</div>
				{children}
				<Footer />
				<MainButton />
			</body>
		</html>
	);
}
