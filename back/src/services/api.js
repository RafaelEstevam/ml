const axios = require("axios");

const API = axios.create({
  baseURL: "https://api.mercadolibre.com/",
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

module.exports = API;