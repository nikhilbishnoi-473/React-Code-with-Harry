import React from 'react';
// import PropTypes from 'prop-types';

export default function Props(props) {
  return (
    <div className='border-5 container border-black w-25 bg-danger p-4'>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.student ? "yes" : "no"}</h1>
    </div>
  );
}

// Props.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   student: PropTypes.bool,
// };

