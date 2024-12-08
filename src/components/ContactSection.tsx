import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
//@ts-ignore
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1000); // Reset message after 1 second
  };

  return (
    <section id="contact" className="contact">
      
      <div className="contact-icons">
        {/* Mail Icon with Copy Functionality */}
        <div className="icon-container">
          <CopyToClipboard text="dradityaupadhyay.me@gmail.com" onCopy={handleCopy}>
            <div>
              <FaEnvelope size={32} style={{ cursor: "pointer" }} />
            </div>
          </CopyToClipboard>
          {copied && <div className="copy-message">Copied!</div>}
        </div>

        {/* LinkedIn Icon */}
        <div className="icon-container">
          <a href="https://www.linkedin.com/in/aditya-upadhyay-480915276/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} />
          </a>
        </div>

        {/* GitHub Icon */}
        <div className="icon-container">
          <a href="https://github.com/adityaupadhyay0" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
