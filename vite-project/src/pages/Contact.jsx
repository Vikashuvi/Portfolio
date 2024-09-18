import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { SiBehance, SiDribbble } from 'react-icons/si';

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const glassmorphicStyle = {
    background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: isDarkMode ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.37)',
  };

  const iconStyle = "text-xl text-black dark:text-white";
  const socialIconStyle = "text-3xl text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300";

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3bcf415d-16b8-4357-b41f-c4ee9308b926");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success", res);
        setSubmitMessage('Message sent successfully!');
        event.target.reset();
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-8 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2" style={{...glassmorphicStyle, padding: '20px'}}>
            <h3 className="text-lg font-semibold mb-3">Send Me a Message</h3>
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Name" 
                  className="w-full p-2 text-sm rounded" 
                  style={glassmorphicStyle} 
                  required
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className="w-full p-2 text-sm rounded" 
                  style={glassmorphicStyle} 
                  required
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full p-2 text-sm rounded" 
                  style={glassmorphicStyle} 
                  required
                />
              </div>
              <div className="mb-3">
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Message" 
                  className="w-full p-2 text-sm rounded" 
                  style={glassmorphicStyle}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
              {submitMessage && (
                <p className={`mt-2 ${submitMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
          <div>
            <div style={{...glassmorphicStyle, padding: '15px', marginBottom: '15px'}}>
              <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center">
                  <FaEnvelope className={`${iconStyle} mr-2`} />
                  vikashuvi07@gmail.com
                </p>
                <p className="flex items-center">
                  <FaPhone className={`${iconStyle} mr-2`} />
                  +91 9994813832
                </p>
                <p className="flex items-center">
                  <FaMapMarkerAlt className={`${iconStyle} mr-2`} />
                  Namakkal, Tamil Nadu, India
                </p>
              </div>
            </div>
            <div style={{...glassmorphicStyle, padding: '15px'}}>
              <h3 className="text-lg font-semibold mb-3">Connect with Me</h3>
              <div className="flex justify-around">
                <a href="https://github.com/Vikashuvi" target="_blank" rel="noopener noreferrer">
                  <FaGithub className={socialIconStyle} />
                </a>
                <a href="https://www.linkedin.com/in/vikash-t-designer/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className={socialIconStyle} />
                </a>
                <a href="https://www.behance.net/vikashuvi1" target="_blank" rel="noopener noreferrer">
                  <SiBehance className={socialIconStyle} />
                </a>
                <a href="https://dribbble.com/vikashuvi" target="_blank" rel="noopener noreferrer">
                  <SiDribbble className={socialIconStyle} />
                </a>
                <a href="https://www.instagram.com/vikash_uvi/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={socialIconStyle} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
