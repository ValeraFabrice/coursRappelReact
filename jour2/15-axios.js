// 15-axios.js
// cd jour2
// const req = new XMLHttpRequest(); 
// ReferenceError: XMLHttpRequest is not defined
//node 15-axios.js

/* fetch("https://restcountries.com/v3.1/all")
    .then(reponse => reponse.json()) */
// ReferenceError: fetch is not defined
//node 15-axios.js

// window n'existe pas lorsque vous éxécuter du code js dans le contexte de nodeJS 
// console.log(window);
// ReferenceError: window is not defined

// télécharger une libraire depuis npmjs.com
// https://www.npmjs.com/package/axios
// https://www.npmjs.com/package/fetch
// https://www.npmjs.com/package/xmlhttprequest

// npm init --yes => package.json
// npm i axios => créer dossier node_modules contenant axios

const axios = require( "axios" ); // module Common JS => NodeJS
// import axios from "axios" ; // module ECMA Script => React 
axios.get("https://restcountries.com/v3.1/all")
    .then(pays => console.log(pays));

// créer un nouveau fichier 16-exo.js 
// télécharger la librairie fetch pour node js 
// et l'utiliser pour récupérer l'ensemble des pays dans le fichier 16-exo.js
