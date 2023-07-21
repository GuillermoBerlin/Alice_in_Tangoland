import React from 'react'
import './contact.css';
import { useForm, Controller } from 'react-hook-form';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import IconsSocialMedia from './iconsSocialMedia';

export default function Contact() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log("Form", data.name)
  }


  return (
    <div className='contact-main-div'>
      <div className='left-column'>
        <h3>Send A Message</h3>
        <div className='form'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='field'>
              <label>Name</label>
              <input type="text" {...register("name")}/>
            </div>
            <div className='field'>
              <label>Email</label>
              <input type="text" {...register("email")}/>
            </div>
            <div className='field'>
              <label>Telephone</label>
              <input type="text" {...register("telephone")}/>
            </div>
            <div className='field'>
              <label>Message</label>
              <textarea type="text" {...register("message")}/>
            </div>
            <button className="button-send" type='submit'>Send</button>
          </form>
        </div>
      </div>
      <div className='right-column'>
        <h3>Contact</h3>
        <div className='contact-element'>
          <div className='icon-contact'><PhoneIcon/></div>
          <div className='contact-element-texts'>
            <h3>Telephone</h3>
            <h4>0341 4854457</h4>
          </div>
        </div>
        <div className='contact-element'>
          <div className='icon-contact'><EmailIcon/></div>
          <div className='contact-element-texts'>
            <h3>Email</h3>
            <h4>circuslucho@gmail.com</h4>
          </div>
        </div>
        <IconsSocialMedia/>
      </div>
    </div>
  )
}
