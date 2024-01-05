// src/components/FormComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from './Store.jsx';
import "./About.css"
import {v4 as uuidv4}  from "uuid"
import { NavLink  , useNavigate} from 'react-router-dom';
  


function FormComponent() {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addData({id:uuidv4(), name, link, text }));

    setName('');
    setLink('');
    setText('');
     alert(`${name} project  is added succefullly to projects section`)
     navigate("/details")

  };
  return (
   
  <div className='main-container '>
            <div className='about-section'>
                  <div className='about-container'>
                        <h3>UI/UX Designer</h3>
                        <h1>Hello,  my name is Madelyn Torff</h1>
                        <p>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
                          <div className='button-container'>
                            <button type="button" >
                              Projects
                            </button>
                            <button type="button">
                              Linkedin
                            </button>
                          </div>
                  </div>
                  
                  <div className='about-image-container'>
                    <img src="https://res.cloudinary.com/dky69roxl/image/upload/v1704387158/pexels-artem-beliaikin-1832323-removebg-preview_ltlxgo.png"
                      alt="profile pic"
                      className='profile-pic'
                    />
                  </div>
            </div>
    <div className='add-projects-container'>
      <h1>Add Project</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor='projectName'>Project Name</label><br />
          <input type='text'
            placeholder='Project name'
            id="projectName"
           onChange={(e)=>setName(e.target.value)}
            value={name}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='projectLink'>Project link</label><br />
          <input type='text'
            placeholder='Project link/url'
            id="projectLink"
            onChange={(e)=>setLink(e.target.value)}
            value={link}
          />
        </div>
        <div className='input-container'>
          <label htmlFor='description'>Description</label><br />
          <textarea id="description" rows={10} cols={33}
           onChange={(e)=>setText(e.target.value)}
            value={text}
          />
        </div>
        <div className='form-button'>
          <button  type="submit">
           Add   
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default FormComponent;






















