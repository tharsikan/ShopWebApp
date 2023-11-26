import React from 'react'
import JumboHeader from '../../common/JumboHeader'
import Jumbo from '../../common/Jumbotron/Jumbo'
import Hero from './Hero'
import Hero2 from './Hero2'
import Testimonals from './Testimonals'

const Donate = () => {
  return (
    <div>
      {/* <JumboHeader title="Donate " des="Help the self-funded Platform" /> */}
      <Jumbo title="Donate " des="Help the self-funded Platform" />
          <Hero />
          <Hero2/>
      <Testimonals />
    </div>
  );
}

export default Donate