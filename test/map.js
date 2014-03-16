var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    alpaca      = require('../lib/alpaca');

describe('alpaca.map', function(){
    describe('given a simple schema', function(){
        var S = new Schema({name : String});
        mongoose.model('M', S);
        var M = mongoose.model('M');
        var m = new M();
        var schema = alpaca.map(m);  

        it('should return a JS object', function(){
            schema.should.be.type('object');
        });
        it('should include a name property with a title with the same name as the property name', function(){
            schema.properties.name.title.should.eql('Name');
        });
        it('should have a title that matches the title case of the model name'); // not sure how to do this yet; the availablity changes over the lifecycle of a schema
    })
})
