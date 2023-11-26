import React from 'react'
import Card from '../../common/Card';
import ComingSoon from '../../common/Error/ComingSoon';
import Hero from './Hero';
import Marketplace from './Marketplace';
import Payout from './Payout';
import Threads from './Threads';

const About = () => {
  return (
    <>
  
      <Card>
        <Hero />
        <Marketplace />
        <Threads />
        <Payout />
      </Card>
    </>
  );
}

export default About;