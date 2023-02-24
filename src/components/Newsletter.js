import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

export const Newsletter = ({ status, message, onValidated }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iz3geoj', 'template_xjhp3xm', form.current, 'H2MS5nUlD2gKmIjTv')
      .then((result) => {
          console.log(result.text);
          console.log("Messge sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Submit Me your <br></br>Email id to contact you</h3>
            </Col>
            <Col md={6} xl={7}>
              <form ref={form} onSubmit={sendEmail}>
                <div className="new-email-bx">
                  <input type="email" name="user_email" placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
