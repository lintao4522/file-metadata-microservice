var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer=require('multer')
const upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
// "POST" action="/api/fileanalyse">
app.post('/api/fileanalyse',upload.single('upfile'),(req,res)=>{
  res.json({
    name:req.file.originalname,
    type:req.file.mimetype,
    size:req.file.size
    // {
    //   "name": "新建 Microsoft Word 文档 (2).docx",
    //   "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    //   "size": 642672
    //   }
  })
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
