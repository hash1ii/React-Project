import React from 'react'


const state = ({states}) => {

  return (
    <div>
{states.map((state)=>(
  <div className='bg-danger text-white'>
  <h1>{state.name}</h1>
  <h5>Languege:{state.language}</h5>
  <h5>Population:{state.population}</h5>
</div>
))

}

</div>
  );
};

export default state
