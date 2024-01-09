module.exports.getAllTools = (req, res, next) => {
  res.json({
    name: "Arif",
  });
  next();
};
module.exports.createTools = (req, res, next) => {
  res.send("Tools Posted");
  next();
};
