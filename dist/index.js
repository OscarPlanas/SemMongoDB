require('./connection.ts');
// using the model 
const Serie = require('./models/Serie');
// creating a new document base on the model
const serie = new Serie({
    name: 'juego de tronos',
    description: 'serie de tv basada en la saga de libros de george r.r. martin',
    chapters: '50'
});
console.log('created serie', Serie);
/*// saving the created document
product.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
});*/ 
//# sourceMappingURL=index.js.map