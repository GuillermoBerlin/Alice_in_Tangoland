import React, {useRef, useEffect} from "react";
import "./contact.css";
import { useForm, Controller } from "react-hook-form";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import IconsSocialMedia from "../components/iconsSocialMedia";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const form = useRef();

  
  const sendEmail = (e) => {
    
    emailjs.sendForm('service_i9qw7n9', 'template_tuxgf8p', form.current, 'wvWC_7QHnHst1r-86')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };

  const handleEmailClick = () => {
    const email = 'circuslucho@gmail.com';
    const subject = '';
    const body = '';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-main-div">
      <div className="left-column">
        <h3>Send A Message</h3>
        <div className="form">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="field">
              <label>Name</label>
              <input name="name" type="text" required {...register("name")} />
            </div>
            <div className="field">
              <label>Email</label>
              <input name="email" type="email" required {...register("email")} />
            </div>
            <div className="field">
              <label>Telephone</label>
              <input name="telephone" type="tel" {...register("telephone")} />
            </div>
            <div className="field">
              <label>Message</label>
              <textarea name="message" type="text" required {...register("message")} />
            </div>
            <button className="button-send" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="right-column">
        <h3>Contact</h3>
        <div className="contact-element">
          <div className="icon-contact">
            <PhoneIcon />
          </div>
          <div className="contact-element-texts">
            <h3>Telephone</h3>
            <div className="contact-element-text-icon">
              <h4>0341 4854457</h4>
              <CopyToClipboard text="0341 4854457">
              <div className="icon-contact" style={{ cursor: "pointer" }}><Tooltip title="Copy To Clipboard" placement="right"><ContentCopyIcon /><Tooltip/></Tooltip></div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div  className="contact-element">
          <div className="icon-contact">
            <EmailIcon />
          </div>
          <div className="contact-element-texts">
            <h3>Email</h3>
            <div className="contact-element-text-icon">
              <h4 onClick={handleEmailClick} style={{ cursor: "pointer" }}>circuslucho@gmail.com</h4>
              <CopyToClipboard text="circuslucho@gmail.com">
                <div className="icon-contact" style={{ cursor: "pointer" }}><Tooltip title="Copy To Clipboard" placement="right"><ContentCopyIcon /><Tooltip/></Tooltip></div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <IconsSocialMedia />
      </div>
    </div>
  );
}
