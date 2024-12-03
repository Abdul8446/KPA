import React from 'react'
import HeroContactPage from '../components/HeroContactPage'
import ContactDetails from '../components/ContactDetails'
import ContactForm from '../components/ContactForm'

function ContactPage() {
  return (
    <div className=''>
        <HeroContactPage/>
        <ContactDetails/>
        <ContactForm/>
    </div>
  )
}

export default ContactPage