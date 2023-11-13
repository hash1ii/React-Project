const asyncHandler = require('express-async-handler');
const listModel = require('../model/listModel');

let dataInserted = false;

exports.listData = asyncHandler(async (req, res) => {
  try {
    if (!dataInserted) {
      const documents = [
        {
          name: 'ayisha',
          email: 'hashi123@gmail.com',
          password: 'hashim123'
        },
        {
          name: 'hello',
          email: 'hashi123@gmail.com',
          password: 'hashim123'
        },
        {
            name: 'hashi',
            email: 'hashi123@gmail.com',
            password: 'hashim123'
          }
      ];

    //   const response = await listModel.insertMany(documents);
    //   res.json(response);
    //   console.log(response);

      dataInserted = true;
    } else {
      const list = await listModel.find({});
      res.json(list);
      console.log(list);
    }
  } catch (err) {
    console.log(err);
  }
});
