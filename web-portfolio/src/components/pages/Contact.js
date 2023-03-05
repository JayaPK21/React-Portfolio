import React from 'react';
import Form from '../Form';

function Contact(props) {
  const pstyles = {
    margin: 25,
    fontSize: 'larger',
    fontWeight: 'bold'
  };

  return (
    <div className='container text-center'>
      <p style={pstyles}>If you have any questions regarding the projects or looking for a front-end developer, please use the following contact form, and I will get in touch with you soon. </p>
      
      <Form />
    </div>
  );
}

export default Contact;
