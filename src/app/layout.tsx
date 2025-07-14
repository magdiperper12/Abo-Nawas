import MainButton from '../components/Button/MainButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	title: 'أبو نواس | Abo Nawas - الحدادة والكريتال منذ 1987',
	description:
		'أبو نواس - الورشة الرائدة في أعمال الحدادة والكريتال منذ عام 1987، بخبرة تمتد لأكثر من 35 عامًا في تصميم وتصنيع البوابات الحديدية، درابزين السلالم، حماية الشبابيك، الأسوار، المظلات، البرجولات، الهياكل المعدنية، والديكورات المصنوعة من الحديد المشغول أو الليزر. نقدم حلولًا معدنية تجمع بين المتانة، الجمال، والدقة لتناسب المنازل، الفلل، المصانع، والشركات التجارية. نخدم كفر الشيخ وطنطا والدلتا بالكامل.',
	openGraph: {
		title: 'أبو نواس | خبرة منذ 1987 في صناعة الحديد والديكورات المعدنية',
		description:
			'اكتشف كل ما نقدمه من حلول متكاملة في الحدادة والكريتال – بوابات، درابزين، شبابيك حماية، مظلات سيارات، برجولات حدائق، شعارات معدنية، فواصل زخرفية، وسلالم حديد. نحن ندمج الحرفة اليدوية بالتكنولوجيا الحديثة لنقدم لك أعمالًا فنية متقنة تناسب احتياجاتك السكنية والصناعية والتجارية.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://abonawas.com/',
		images: [
			{
				url: '/image/newlogo-removebg-preview.png',
				alt: 'أبو نواس - ورشة الشرنوبي لأعمال الحدادة والكريتال',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'أبو نواس | بوابات وحديد مشغول ومظلات مميزة منذ عام 1987',
		description:
			'تأسست ورشة الشرنوبي على يد الحاج عبد السند الشرنوبي عام 1987، واليوم نواصل تقديم أعمال الحدادة والكريتال بخبرة واحترافية. خدماتنا تشمل تصنيع البوابات الحديدية، السلالم، الأسوار، الشبابيك، المظلات، الهياكل المعدنية، والديكورات الليزرية الحديثة، مع تنفيذ حسب الطلب.',
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
					content='أبو نواس'
				/>
				<meta
					name='application-name'
					content='أبو نواس لأعمال الحدادة والكريتال'
				/>
				<link
					rel='canonical'
					href='https://abonawas.com/'
				/>

				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org', // ✅ تم تصحيحه هنا
							'@type': 'Organization',
							name: 'أبو نواس لأعمال الحدادة والكريتال',
							url: 'https://abonawas.com/',
							logo: 'https://abonawas.com/image/newlogo-removebg-preview.png',
							sameAs: [
								'https://www.facebook.com/people/أبو-نواس-للتجارة-والمقاولات-والتشكيلات-المعدنية/100063877210927/',
							],
							description:
								'ورشة أبو نواس تأسست عام 1987 على يد الحاج عبد السند الشرنوبي، متخصصة في أعمال الحدادة والكريتال، وتشمل خدماتها تصميم وتنفيذ البوابات، السلالم، الشبابيك، الأسوار، المظلات، البرجولات، والهياكل المعدنية بخبرة وحرفية عالية.',
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
