import React from 'react';
import Contact from './Contact';
import MapsPage from '@/src/components/Maps';

function ContactPage() {
	return (
		<div className='pt-16 lg:space-y-10 space-y-96'>
			<MapsPage />
			<Contact />
		</div>
	);
}

export default ContactPage;
