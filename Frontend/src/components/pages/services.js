
import Styles from "../css/services.module.css"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetchServices();
  // }, []);
  
  // const fetchServices = async () => {
  //   try
  //   {
  //   const response = await fetch('http://localhost:8000/data')
  //   const data = await response.json();
  
  //   setServices(data);}
  //   catch(error){
  //     console.error('Error fetching services:', error);
  //   }
      
  // }
  useEffect(() => {
    
    
    axios.get('http://localhost:8000/data')
    
  .then(response => {
    setServices(response.data);
  })
  .catch(error => {
    console.error('Error fetching services:', error);
  });
  }, []);


  return (
    <>
    
    <div class='container' className={Styles.services} >
        <h2 className={Styles.text1}>SERVICES</h2>
        <div className={Styles.display}>

        <div>
        <Row>
      {services.map((item, index) => (
      
       <Col md={4} key={index}>
        <div  className={Styles.display1}>
   
          <img src={`http://localhost:8000/${item.imageUrl}`} className={Styles.images} alt={`Image ${index}`} />
          <h2 className={Styles.heading1}>{item.heading1}</h2>
          <h4 className={Styles.heading2}>{item.heading2}</h4>
          <p className={Styles.text}>{item.text}</p>
          </div>
         </Col>
      
      ))}
      </Row>
    </div>
  

   
</div>
</div>

</>
  );
}

export default Services;