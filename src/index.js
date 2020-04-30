/** Imutable, o estado nunca é modificado e sim um novo estado é
 * retornando sobrescrevendo o estado atual da aplicação
 * */

const _ = require('underscore');

const resultado = _.map([1, 2, 3, 4], function(num){
    return num * 2;
});

console.log(resultado);

let obj = {
  name: "WebApp",
  site: "www.webapp.com"
};

obj.name = "WEBAPP"; // Funciona

let freezedObj = Object.freeze(obj);

freezedObj.name = "RocketSeeeeat"; // Não funciona
