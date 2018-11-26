import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="hero is-white">
            <div className="hero-body">
                <div className="container">
                <div className="contact">
                <hr />
                    <h1 className="title has-text-black">
                        ADDRESS <br></br>
                        & HOURS
                     </h1>
                    <h2 className="subtitle has-text-black">
                        <br/>
                        185 7th Aveny, NY 10011 | 212 989 4466 <br/>
                        <br/>
                        Lunch: 7 Days 12:00p-2:30p <br/>
                        Dinner: Sun 5:30p-10:00p, Mon-Thu 5:30p-10:15p, <br/>
                        Fri-Sat: 5:30p-10:30p <br/>
                    </h2>
                    <a class="button is-black">Contact</a>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;