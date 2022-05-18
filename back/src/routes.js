const { Router } = require("express");
const itemsController = require("./controller/itemsController");

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello World' });
});

routes.get('/api/items', itemsController.getItems);
routes.get('/api/items/:id', itemsController.getItemById);

module.exports = routes;