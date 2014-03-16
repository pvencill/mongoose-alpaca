var _     = require('lodash'),
    str   = require('underscore.string');

function makeProperty(val, key, obj){
    return {
        title : str.titleize(key)
    };
}

function map(model){
    var paths = _.mapValues(model.schema.tree, makeProperty);

    return {
        title : '',
        description: '',
        type : 'object',
        properties : paths 
    };
}


module.exports = {
    map : map
}