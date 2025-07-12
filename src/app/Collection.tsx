'use client';

import React from 'react';
import Hero from './Home/Hero';
import InfiniteMarquee from '../components/InfiniteMarquee';
import About from './About/About';
import Strategy from './Projects/Strategy';
import Services from './Services/page';

function Collection() {
	return (
		<main className='   overflow-x-hidden'>
			<Hero />

			<div className=' mt-64  space-y-36  z-10 '>
				<InfiniteMarquee />
				<About />
				<Strategy />
				<Services />
			</div>
		</main>
	);
}

export default Collection;
