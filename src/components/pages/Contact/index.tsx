import React from 'react'
import ContactCard from './ContactCard';
import Feedback from './Feedback';
import Icons from '../../common/Icons/Icons';
import JumboHeader from '../../common/JumboHeader';

const Contact = () => {
  return (
    <div>
     <JumboHeader title='Muzfi Contact Center' des='Find solution and answers'/>

      <ContactCard />
      <Feedback />
      {/* <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20230821104522/gfg-(5).jpg"
        style={{ marginTop: "14%", marginLeft: "44%" }}
      />{" "} */}
    </div>
  );
}

export default Contact;