const express = require('express');
const multer = require('multer');
const docxToPdf = require('docx-pdf');
const path = require('path');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from the server')
})

// setup for the File Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  
const upload = multer({ storage: storage })

app.post('/convertFile', upload.single('file'), (req, res, next)=> {
try {

if(!req.file){
  return res.status(400).json({
     message: "No file uploaded",
  });
}

//Defining the output file path
let outputPath = path.join(__dirname,'files', `${req.file.originalname}.pdf`);

    docxToPdf(req.file.path, outputPath , (err,result)=>{
        if(err){
          console.log(err);
          return res.status(500).json({
            message:"Error converting docx to pdf "
          })
        }
        res.download(outputPath,()=>{
          console.log('file downloaded')
        })
     
      });
    
} catch (error) {
    console.log(error);
    return res.status(500).json({
      message:"Internal server error  "
    })
}
  })

app.listen(3000, ()=>{
    console.log('Server is listening at 3000 port ;)')
});