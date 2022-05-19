const API = require("../services/api");

let categories;

const autor = {
    autor: "Rafael Estevam",
    lastname: "Oliveira"
}

const orderByQuantity = categories => {
    const list = categories?.sort(function (a, b) {
        return b.results - a.results;
    });
    return list;
};

const productItem = (data) => {
    const { id, title, price, currency_id, condition, shipping, sold_quantity, description, pictures, thumbnail } = data;

    const itemReturn = {
        id,
        title,
        price: {
            currency: currency_id,
            amount: parseInt(price?.toString()?.split('.')[0], 10),
            decimals: parseInt(price?.toString()?.split('.')[1], 10),
        },
        picture: pictures && pictures[0]?.url || thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: description && description?.data?.plain_text
    }
    return itemReturn;
}

module.exports = {
    async getItems(req, res) {
        const { Q } = req.query;
        try {
            const queryResponse = await API.get(`/sites/MLA/search?q=:${Q}&limit=4`);
            const { available_filters } = queryResponse.data;

            categories = orderByQuantity(available_filters.find((item) => { return item.id === 'category' })?.values);

            const listResponse = queryResponse.data.results.map((item) => {
                return {
                    item: productItem(item, categories)
                }
            });

            const response = {
                autor: autor,
                categories: categories?.map((item) => { return item.name }),
                items: listResponse
            };
            res.json(response);
        } catch (e) {
            res.status(400).send(e.message)
        }
    },

    async getItemById(req, res) {
        const { id } = req.params;
        try {
            const { data } = await API.get(`/items/${id}`);
            const descriptionData = await API.get(`/items/${id}/description`);

            const response = {
                autor: autor,
                item: productItem({ ...data, ...{ description: descriptionData } })
            }

            res.json(response);
        } catch (e) {
            res.status(400).send(e.message)
        }
    }
}