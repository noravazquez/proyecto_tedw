import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from './ContactForm';
import ContactInformation from './ContactInformation';

const Contact = () => {
    return (
        <>  
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Contact</title>
            </Helmet>
            <section className="relative z-10 overflow-hidden bg-Blue6 py-20 lg:py-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap lg:justify-between">
                        <ContactInformation />
                        <ContactForm />
                    </div>
                </div>
            </section>
            </>
      );
}

export default Contact