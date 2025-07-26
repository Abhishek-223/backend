import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/temp"); // specify the directory to save uploaded files
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname );
  }
});

export const upload = multer({
  storage,
})