import '../css/contact.css'
import '../components/Footer.js';

function ContactForm() {
    return (
        <div>
            <h1 className="contact-h1">Send me a message:</h1>
            <form className="contact-form">
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="4"> </textarea>      
                <button>Send Message</button>
            </form>
        </div>
       
    )
}

export default ContactForm;