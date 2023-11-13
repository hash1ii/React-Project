const frm = require("../model/frmmodel");
const asyncHandler = require("express-async-handler");

exports.frmData = asyncHandler(async (req, res) =>{
    const {name,email,password}=req.body;
    const form=await frm.create({name:name,email:email,password:password});

    if (form){
        res.send("Success")
    }else{res.send("Error")}
    console.log("form successfully added");
}
);


exports.getList = asyncHandler(async (req, res) =>{
    try{
        const element = await frm.find({})
        res.json(element);

    }catch(error){
        res.send("failed to list");
    }
    
}
);


exports.editList = asyncHandler(async (req, res) =>{
    const {id}=req.params;
    const {name,email,password}=req.body;
    try{
        const element = await frm.findByIdAndUpdate(
            id,
            { name, email, password },
            // { new: true }
        )
        res.json(element);

    }catch(error){
        res.send("failed to list");
    }
    
}
);

exports.deleteList = asyncHandler(async (req, res) =>{
    const id = req.params.id;

    try {
      await frm.findByIdAndDelete(id);
      res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
      console.error(error);
      res.json({ message: 'Error deleting entry' });
    }
  
    
}
);