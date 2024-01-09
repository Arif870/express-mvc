let count = 0;

const viewCount = (req, res, next) => {
  console.log(count++);
  next();
};

module.exports = viewCount;
