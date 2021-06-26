module.exports.home = (req, res) => {
  res.json({
    user: req.user,
    message: "test",
  });
};
module.exports.test = (req, res) => {
  return res.json({
    message: "server running",
  });
};
