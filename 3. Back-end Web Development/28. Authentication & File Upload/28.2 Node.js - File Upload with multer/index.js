require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const fileExists = (fileName) => {
  const files = fs.readdirSync(`${__dirname}/uploads`);

  return files.some((file) => file.includes(fileName));
};

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;

    return cb(null, false);
  }

  if (fileExists(file.origin)) {
    req.fileDuplicated = true;

    return cb(null, false);
  }

  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); },
  filename: (req, file, callback) => { callback(null, `${Date.now()}-${file.originalname}`); },
});

const upload = multer({ storage, fileFilter });

const defaultStorage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'uploads'); },
});

const multiUpload = multer({ storage: defaultStorage });

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/upload', upload.single('file'), controllers.upload);
app.post('/multiple', multiUpload.array('files'), controllers.multiple);

app.use(express.static(`${__dirname}/uploads`));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
