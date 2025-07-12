'use client';

import React from 'react';
import Hero from './Home/Hero';
import InfiniteMarquee from '../components/InfiniteMarquee';
import About from './About/About';
import Services from './Services/Service';
import Strategy from './Projects/Strategy';

function Collection() {
	return (
		<main className='   overflow-x-hidden'>
			{/* <ParticlesComponent id='Particles' /> */}

			<Hero />

			<div className=' mt-64  space-y-36  z-10 '>
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
