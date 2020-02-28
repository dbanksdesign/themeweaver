import React from 'react';
import Token from './Token';

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
				} else {
					return (
						<div key={i}>
							<h3>{key}</h3>
							<Group key={key} object={object[key]} path={path.concat(key)} updateToken={updateToken} resolveReference={resolveReference} currentTheme={currentTheme} />
						</div>
					)
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
