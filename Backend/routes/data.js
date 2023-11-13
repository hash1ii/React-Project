
const express = require('express');
var router = express.Router();



  router.get('/', (req, res) => {
    const servicesData = [
        {
          imageUrl: "/images/schedule.jpg",
          heading1: 'Service',
          heading2: 'Schedule',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
          imageUrl: "/images/OIP.jpg",
          heading1: 'Customer',
          heading2: 'Services',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          imageUrl: "/images/Financial-Services.jpg",
          heading1: 'Financial',
          heading2: 'Services',
          text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ];
    res.json(servicesData);
  });

   router.get('/insert', (req, res) => {
  
     });
       module.exports = router;
  