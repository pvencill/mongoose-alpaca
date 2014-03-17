var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    alpaca      = require('../lib/alpaca');

describe('alpaca.map', function(){
    describe('given a simple schema', function(){
        var S = new Schema({name : String});
        mongoose.model('M', S);
        var M = mongoose.model('M');
        var m = new M();
        var schema = alpaca.map(m).schema;  

        it('should return a JS object', function(){
            schema.should.be.type('object');
        });
        it('should include a name property with a title with the same name as the property name', function(){
            schema.properties.name.title.should.eql('Name');
        });
        it('should have a title that matches the title case of the model name'); // not sure how to do this yet; the availablity changes over the lifecycle of a schema
    }),
    describe('given a populated model instance', function(){
        var S = new Schema({firstName: {type:String, required:true},
                            lastName : 'String',
                            age      : Number,
                            balance  : 'Number',
                            isMember : Boolean,
                            isAlive  : 'Boolean'});
        mongoose.model('M2',S);
        var M = mongoose.model('M2');
        var m = new M({firstName: 'Burt',
                       lastName : 'Reynolds',
                       age      : 25,
                       balance  : 3000,
                       isMember : false,
                       isAlive  : true});
        var schema = alpaca.map(m).schema;

        it('should correctly convert mongoose types specified as String type', function() {
            schema.properties.firstName.type.should.eql('string');
        });
        it('should correctly convert mongoose types specified as String string', function() {
            schema.properties.lastName.type.should.eql('string');
        });
        it('should correctly convert mongoose types specified as Number type', function() {
            schema.properties.age.type.should.eql('number');
        });
        it('should correctly convert mongoose types specified as Number string', function() {
            schema.properties.balance.type.should.eql('number');
        });
        it('should correctly convert mongoose types specified as Boolean type', function() {
            schema.properties.isMember.type.should.eql('boolean');
        });
        it('should correctly convert mongoose types specified as Boolean string', function() {
            schema.properties.isAlive.type.should.eql('boolean');
        });
        it('should correctly tag properties that are required', function() {
            schema.properties.firstName.required.should.eql(true);
        });

    })
})
