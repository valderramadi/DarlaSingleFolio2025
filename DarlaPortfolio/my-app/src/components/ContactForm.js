import { useState } from 'react'; // importing useState for form state handling
import '../css/contact.css';
import '../components/Footer.js';


function ContactForm() {
    return (
        <div className="contact-page">
            <div className="contact-left" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                <h2>I WOULD LOVE TO HEAR FROM YOU!</h2>
                <h1 className="contact-header">Contact.</h1>

                <div className="contact-info">
                    <p>
                        <strong>Email:</strong>
                        <br />
                        <a href="mailto:darlavalderrama5@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-5.857 3.514L15 12.118V5.383zM14.803 13 8 8.882 1.197 13H14.803zM1 12.118l5.857-3.221L1 5.383v6.735z"/>
                            </svg>
                            darlavalderrama5@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong>
                        <br />
                        <a href="tel:+18648041486">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 1 .58-.093c.203.058.387.17.518.318l1.78 2.013c.3.34.333.85.08 1.224L5.605 6.29a.678.678 0 0 0-.111.572c.207.744.762 1.512 1.482 2.232.72.72 1.488 1.275 2.232 1.482.21.058.43-.004.572-.111l1.5-1.507c.374-.253.884-.22 1.224.08l2.013 1.78c.148.131.26.315.318.518a.678.678 0 0 1-.093.58l-1.034 1.55c-.24.36-.637.602-1.08.648-1.27.13-3.293-.26-5.435-2.403C3.219 7.566 2.83 5.543 2.958 4.273c.046-.443.288-.84.648-1.08L4.156 2.16z"/>
                            </svg>
                            (864) 804-1486
                        </a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>
                        <br />
                        <a href="https://www.linkedin.com/in/darla-valderrama" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.71-.52-1.247-1.342-1.247-.822 0-1.359.537-1.359 1.247 0 .694.521 1.248 1.326 1.248h.017zm4.908 8.212V9.359c0-.205.015-.41.076-.557.167-.41.547-.834 1.185-.834.836 0 1.17.63 1.17 1.554v3.872h2.401V9.253c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.705-2.165 1.2h.03v-1.03H7.573c.03.663 0 7.225 0 7.225h2.401z"/>
                            </svg>
                            darla-valderrama
                        </a>
                    </p>
                </div>
                <div className="personal-message">
                    <p>
                        Thank you for considering my portfolio —
                        <br />
                        Built with love,
                        <br />
                        Darla
                    </p>
                </div>
            </div>
            <div className="contact-right" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
                <img
                    src={process.env.PUBLIC_URL + "/dv favicon website.png"} 
                    alt="DV Favicon" 
                    className="contact-image" 
                />
            </div>
        </div>
    );
}

export default ContactForm;
