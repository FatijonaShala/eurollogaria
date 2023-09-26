

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const url = 'https://formspree.io/f/moqoqlrq';

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Handle successful form submission
        setIsSubmitted(true);
        //console.log('Form submitted successfully');
      } else {
        // Handle form submission error
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="contact-form">
        {isSubmitted ? (
        <h5>Faleminderit për dërgimin e formularit! Do t'ju kontaktojmë së shpejti.</h5>
      ) : (
      <form id="contact" onSubmit={handleSubmit}>
        <Row>
          <Col lg={4} md={12} sm={12}>
            <fieldset>
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Full Name"
                required=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </fieldset>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <fieldset>
              <input
                name="email"
                type="text"
                className="form-control"
                id="email"
                pattern="[^ @]*@[^ @]*"
                placeholder="E-Mail Address"
                required=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <fieldset>
              <input
                name="subject"
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required=""
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </fieldset>
          </Col>
          <Col lg={12}>
            <fieldset>
              <textarea
                name="message"
                rows="6"
                className="form-control"
                id="message"
                placeholder="Your Message"
                required=""
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </fieldset>
          </Col>
          <Col lg={12}>
            <fieldset>
              <button type="submit" id="form-submit" className="border-button">
                Dërgo Mesazh
              </button>
            </fieldset>
          </Col>
        </Row>
      </form>
      )}
    </div>
  );
};

export default ContactForm;

