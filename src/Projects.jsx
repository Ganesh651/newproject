import React from 'react';
import "./Projects.css"
import { useSelector } from 'react-redux';

function Projects() {
  const data = useSelector((state) => state.formData.data); // Corrected the useSelector argument
  console.log(data);

  return (
    <>
      <h1> PROJECT DETAILS</h1>

      <div>
        {data.map((item, index) => ( // Added a return statement here
          <div  className="projectdetailscon" key={index}>
            <div>
                <img src= {item.link}/>
            </div>
                  <div>        
                          <h1>{item.name}</h1>
                          <p> {item.text}</p>

                  </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
