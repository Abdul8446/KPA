import React from 'react'
import { Facebook, Linkedin, Instagram, MapPin, Clock, Phone, Mail, ChevronDown, ArrowDown } from 'lucide-react';

function ContactDetails() {
  return (
    <section className='pt-10 lg:pt-5 2xl:pt-10'>
        <div className='w-[95%] p-10 bg-[#fff9] border border-white mx-auto rounded-2xl 2xl:rounded-3xl'>
         

           {/* Footer */}

           <footer className=" py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-12">
                    {/* Contact */}
                    <div>
                        <h3 className="text-2xl lato-black mb-6" style={{ color: '#003A2E' }}>
                        Contact
                        </h3>
                        <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <MapPin className="w-10 h-10 " style={{ color: '#BB914A' }} />
                            <div>
                            <p className="lato-bold" style={{ color: '#003A2E' }}>
                                VISIT US
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-2 merriweather-light">
                                We welcome you to our offices for a more personal
                                interaction. Our address is:
                            </p>
                            <p className="text-[#003A2E] mt-2 lato-black">
                                123 Learning Avenue, Suite 100
                                <br />
                                Education City, EC 45678
                            </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 mt-1" style={{ color: '#BB914A' }} />
                            <div>
                            <p className="lato-bold" style={{ color: '#003A2E' }}>
                                OUR DOORS ARE OPEN
                            </p>
                            <p className="text-gray-600 merriweather-light">Monday to Friday, from 9 AM to 5 PM.</p>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-2xl lato-black mb-6" style={{ color: '#003A2E' }}>
                        Get in Touch
                        </h3>
                        <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5" style={{ color: '#BB914A' }} />
                            <div>
                            <p className="lato-bold" style={{ color: '#003A2E' }}>
                                EMAIL US
                            </p>
                            <a
                                href="mailto:name@example.com"
                                className="hover:underline merriweather-light"
                                style={{ color: '#BB914A' }}
                            >
                                name@example.com
                            </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5" style={{ color: '#BB914A' }} />
                            <div>
                            <p className="lato-bold" style={{ color: '#003A2E' }}>
                                CALL US
                            </p>
                            <a
                                href="tel:+12345678954"
                                className="hover:underline merriweather-light"
                                style={{ color: '#BB914A' }}
                            >
                                +12 (34) 567 851 54
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-2xl lato-black mb-6" style={{ color: '#003A2E' }}>
                        Social Media
                        </h3>
                        <p className="text-gray-600 mb-6 merriweather-light">
                        Follow us on our social platforms to stay updated with the latest news, courses, and
                        community events.
                        </p>
                        <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                            style={{ backgroundColor: '#BB914A', color: '#003A2E' }}
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                            style={{ backgroundColor: '#BB914A', color: '#003A2E' }}
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                            style={{ backgroundColor: '#BB914A', color: '#003A2E' }}
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
           </footer>


        </div>
    </section>
  )
}

export default ContactDetails