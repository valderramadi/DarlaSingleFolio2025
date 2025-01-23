
import { useState } from 'react'; // Import useState for form state handling
import '../css/contact.css';
import '../components/Footer.js';

function ContactForm() {
    // State for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(''); // Status message for success/error feedback

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(''); // Clear any previous status messages
        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form fields
            } else {
                setStatus('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-left" data-aos="fade-right" data-aos-duration="1500">
                <h2>I WOULD LOVE TO HEAR FROM YOU!</h2>
                <h1 className="contact-header">Contact.</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="What's your name?"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="email">Email Address *</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="What's your email?"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        rows="4"
                        placeholder="What do you want to say?"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    
                    <button type="submit">Send Message</button>
                </form>
                {status && <p className="status-message">{status}</p>} {/* Display status message */}
            </div>
            <div className="contact-right" data-aos="fade-left" data-aos-duration="1500">
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
