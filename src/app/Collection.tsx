'use client';

import React from 'react';
import Hero from './Home/Hero';
import InfiniteMarquee from '../components/InfiniteMarquee';
import About from './About/About';
import Services from './Services/Service';
import Strategy from './Projects/Strategy';

function Collection() {
	return (
		<main className=' pt-32 pb-28  overflow-x-hidden'>
			{/* <ParticlesComponent id='Particles' /> */}
			<div className='my-16 mt-40'>
				<Hero />
			</div>
			<div className=' mt-28  space-y-36  z-10 '>
				<InfiniteMarquee />
				<About />
				<Strategy />
				<Services />
				{/* <Projects /> */}
			</div>
		</main>
	);
}

export default Collection;
