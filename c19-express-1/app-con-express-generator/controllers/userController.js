const userController = {
    list: function (req, res, next) {
        res.send("Lista de usuarios");
    },
};

module.exports = userController