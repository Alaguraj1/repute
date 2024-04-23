import React from 'react';
import ContactSectionWrapper from '../contact-area/contact-section-wrapper';
import ClassicFormArea from './classic-form-area';
import ClassicLocationArea from './classic-location-area';

const ContactClassicArea = () => {
  return (
    <>
      <ContactSectionWrapper title="CONTACT US" subtitle="Get in touch with us for more information" />
      <ClassicFormArea/>
      <ClassicLocationArea/>
    </>
  );
};

export default ContactClassicArea;