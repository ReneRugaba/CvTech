export const editFileName = (req, file, cb) => {
  const newFilename =
    Math.round(Math.random() * 1e9).toString(16) + '-' + Date.now() + '.jpg';
  cb(null, newFilename);
};
