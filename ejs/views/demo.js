const ejs = require("ejs");

let template = ` <h2>Hello <%= name %>!</h2>`
 
const output = ejs.render(template, {name: "bhargav"});

console.log(output);

const renderTemplate = ejs.compile(`<h2>Hello <%= name %>!</h2>`);

console.log(renderTemplate({name:"Dangar"}))


