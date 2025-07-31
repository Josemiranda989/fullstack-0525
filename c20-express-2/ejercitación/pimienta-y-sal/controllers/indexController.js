const menu = [
    {
        id: 1,
        nombre: "Carpaccio fresco",
        precio: 10000,
    },
    {
        id: 2,
        nombre: "Risotto de berenjena",
        descripcion: "Risotto de berenjena y queso de cabra",
        precio: 4546,
    },
    {
        id: 3,
        nombre: "Mousse de arroz",
        descripcion: "Mousse de arroz con leche y aroma de azahar",
        precio: 37.5,
    },
    {
        id: 4,
        nombre: "Espárragos blancos",
        descripcion:
            "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 27.5,
    },
];

const indexController = {
    index: function (req, res, next) {
        res.render("index", { title: "Express", menu });
    },
    detail: function (req, res, next) {
        const id = req.params.id;
        const plato = menu.find((plato) => plato.id == id);
        if (!plato) {
            return res.send(`
            <h1>El plato no existe</h1>
            `);
        }
        res.render("detalleMenu.ejs", { title: "Express", plato });
    },
};

module.exports = indexController;
