import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothScroll from '../helpers/smoothScroll';

export default function ScrollToTop() {
	const location = useLocation();

	useEffect(() => {
		const { hash } = location;
		if (hash) {
			smoothScroll.scrollTo(
				hash.replace('#',''),
				'page-content',
				100,
				() => {
					document.getElementById(hash.replace('#',''))
						.classList.add('highlight');
				}
			);
		}
	}, [location]);

	return null;
}
