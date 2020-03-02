import React from 'react';
import Token from './Token';

const isPlainObject = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
};

class Group extends React.Component {
	//TODO: figure out why ths prevents proper re-renders
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return JSON.stringify(this.props.object) === JSON.stringify(nextProps.object);
	// }
	
	render() {
		const { object, path = [], updateToken, resolveReference, currentTheme } = this.props;
		return (
			<div className="group">
			{Object.keys(object).map((key, i) => {
				if (object[key].hasOwnProperty('value')) {
					const refs = resolveReference(path.concat(key,'value').join('.'));
					return (
						<Token key={key} refs={refs} {...object[key]} path={path.concat(key,'value').join('.')} name={key} updateToken={updateToken} currentTheme={currentTheme} />
					)
				} else if (isPlainObject(object[key])) {
					return (
						<div key={i}>
							<h3>{key}</h3>
							<Group key={key} object={object[key]} path={path.concat(key)} updateToken={updateToken} resolveReference={resolveReference} currentTheme={currentTheme} />
						</div>
					)
				} else {
					console.log(`leaf node token without 'value': ${path},${key}`);
					return null
				}
			})}
			</div>
		)
	}
}

// const Group = ({ object, path = [], updateToken, resolveReference, currentTheme }) => {
//   return (
//     <div className="group">
//     {Object.keys(object).map((key, i) => {
//       if (object[key].hasOwnProperty('value')) {
//         return (
//           <Token {...object[key]} path={path.concat(key,'value').join('.')} name={key} updateToken={updateToken} resolveReference={resolveReference} currentTheme={currentTheme} />
//         )
//       } else {
//         return (
//           <div key={i}>
//             <h3>{key}</h3>
//             <Group object={object[key]} path={path.concat(key)} updateToken={updateToken} resolveReference={resolveReference} currentTheme={currentTheme} />
//           </div>
//         )
//       }
//     })}
//     </div>
//   )

// }

export default Group;
