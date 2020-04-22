import React from 'react';

import smoothScroll from '../helpers/smoothScroll';

class Page extends React.Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(nextProps.hash !== this.props.hash);
	// 	return nextProps.hash !== this.props.hash;
	// }
	
	
	render() {
		const { children, hash } = this.props;
		console.log(hash, window.location.hash);
		
		if (hash) {
			setTimeout(() => {
				smoothScroll.scrollTo(
					hash.replace('#',''),
					'page-content',
					100,
					() => {
						console.log('hi')
						document.getElementById(hash.replace('#',''))
							.classList.add('highlight');
					}
				);
			}, 500);
		}
	
		return (
			<>{children}</>
		)
	}
}

// const Page = (props) => {
// 	const { children, hash } = props;
	
// 	if (hash) {
// 		setTimeout(() => {
// 			smoothScroll.scrollTo(
// 				hash.replace('#',''),
// 				'page-content',
// 				100,
// 				() => {
// 					console.log('hi')
// 					document.getElementById(hash.replace('#',''))
// 						.classList.add('highlight');
// 				}
// 			);
// 		}, 500);
// 	}

// 	return (
// 		<>{children}</>
// 	)
// }

export default Page
