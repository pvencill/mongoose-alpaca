var alpaca = require('./alpaca');

module.exports = exports = function(schema,options){
    schema.virtual('alpaca').get(alpaca.map.bind(null, schema));
}