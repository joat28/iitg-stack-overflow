module.exports.home = (req, res) => {
    res.json({
        user: req.user,
        message :"test",
    });
};
