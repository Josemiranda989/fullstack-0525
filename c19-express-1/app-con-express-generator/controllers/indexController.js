const indexController = {
    // Devolver la vista home
    home: function (req, res, next) {
        res.render("index.ejs", { title: "Express" });
    },
    // Devolver vista de contacto
    contact: function (req, res, next) {
        res.render("contacto.ejs", { title: "Express" });
    },
};
module.exports = indexController