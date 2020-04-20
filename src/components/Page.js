import React from 'react';
import { Helmet } from 'react-helmet';

import smoothScroll from '../helpers/smoothScroll';

const Page = (props) => {
	const { children, location } = props;
	
	if (location.hash) {
		setTimeout(() => {
			smoothScroll.scrollTo(
				location.hash.replace('#',''),
				'page-content',
				100,
				() => {
					console.log('hi')
					document.getElementById(location.hash.replace('#',''))
						.classList.add('highlight');
				}
			);
		}, 500);
	}

	return (
		<>{children}</>
	)
}

export default Page
