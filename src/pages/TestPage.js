import React from 'react';
import nightOwlTokens from '../tokens/night-owl/application';
import lightOwlTokens from '../tokens/night-owl/light';

const TestPage = () => {
	return (
		<div className="page-content">
			{Object.values(nightOwlTokens)
				.filter((value, index, array) => array.indexOf(value) === index)
				.map(value => (
					<span style={{display:'inline-block', width:'5rem',height:'5rem',backgroundColor:value}}>{value||"foo"}</span>
			))}
			<hr />
			{Object.values(lightOwlTokens)
				.filter((value, index, array) => array.indexOf(value) === index)
				.map(value => (
					<span style={{display:'inline-block', width:'5rem',height:'5rem',backgroundColor:value}}>{value||"foo"}</span>
			))}
		</div>
	);
}

export default TestPage;
