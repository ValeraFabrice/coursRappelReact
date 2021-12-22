// npm i fetch
// https://www.npmjs.com/package/fetch

const fetch = require("fetch");

fetch.fetchUrl("https://restcountries.com/v3.1/all" , function(error, meta, body){
    console.log(JSON.parse(body.toString()));
});
