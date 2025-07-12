import MainButton from '../components/Button/MainButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	title: 'Abo Nawas',
	description:
		'ورشة الشرنوبي لأعمال الحدادة والكريتال، تأسست عام 1987 على يد الحاج عبد السند الشرنوبي، ونستمر اليوم بتقديم حلول معدنية عصرية ومبتكرة تجمع بين الحرفة والتطور.',
	openGraph: {
		title: 'ابونواس | خبرة منذ 1987 في الحدادة والكريتال',
		description:
			'نقدم أعمال الكريتال والحدادة بأعلى جودة، بتصاميم فريدة تشمل البوابات، السلالم، الشبابيك، والمظلات. تأسيس متين منذ 1987 وتطوير مستمر حتى اليوم.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://sharnouby-metal.com/',
		images: [
			{
				url: '/image/newlogo-removebg-preview.png',
				alt: 'ابونواس لأعمال الحدادة والكريتال',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ابونواس - بوابات وسلالم وحدادة فنية منذ عام 1987',
		description:
			'ورشة الشرنوبي تقدم خدمات صناعة البوابات الحديدية، السلالم، درابزين الشبابيك، والمظلات بتصاميم فريدة وجودة عالية.',
		images: ['/image/newlogo-removebg-preview.png'],
	},
	icons: {
		icon: '/image/newlogo-removebg-preview.png',
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
				/>
				<meta
					name='author'
					content='ابونواس'
				/>
				<meta
					name='application-name'
					content='ابونواس لأعمال الحدادة والكريتال'
				/>
				<link
					rel='canonical'
					href='https://sharnouby-metal.com/'
				/>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'ابونواس لأعمال الحدادة والكريتال',
							url: 'https://sharnouby-metal.com/',
							logo: '/image/newlogo-removebg-preview.png',
							sameAs: [
								'https://www.facebook.com/ElSharnoubyMetal',
								'https://www.instagram.com/ElSharnoubyMetal',
								'https://www.linkedin.com/company/elsharnouby-metal',
							],
							description:
								'ورشة ابونواس تأسست عام 1987 على يد الحاج عبد السند الشرنوبي، مختصة في أعمال الحدادة والكريتال، وتُقدم بوابات وسلالم ومظلات بجودة وحِرفة عالية.',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'كفر الشيخ',
								addressRegion: 'دلتا مصر',
								addressCountry: 'EG',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+20-100-123-4567',
								contactType: 'خدمة العملاء',
								areaServed: 'EG',
								availableLanguage: ['ar', 'en'],
							},
						}),
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
