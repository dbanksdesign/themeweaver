import React from 'react';
import Token from './Token';

const Group = ({ object, path = [] }) => {
  return (
    <div className="group">
    {Object.keys(object).map((key, i) => {
      if (object[key].hasOwnProperty('value')) {
        return (
          <Token {...object[key]} path={path.concat(key)} name={key} />
        )
      } else {
        return (
          <div key={i}>
            <h3>{key}</h3>
            <Group object={object[key]} path={path.concat(key)} />
          </div>
        )
      }
    })}
    </div>
  )

}

export default Group;