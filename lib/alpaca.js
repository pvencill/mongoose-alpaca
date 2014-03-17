var _     = require('lodash'),
    str   = require('underscore.string');


function convertType(mongooseType) {
    switch (mongooseType){
      case Number:
          return "number";
      case 'Number':
          return "number";
      case Date:
          return "string";
      case 'Date':
          return "string";
      case Boolean:
          return "boolean";
      case 'Boolean':
          return "boolean";
      case String:
          return "string";
      case 'String':
          return "string";
      default:
          return "any";
	  }
}

function makeProperty(val, key, obj){
    return {
        title : str.titleize(key),
        type  : convertType(val.options.type),
        required: val.options.required
    };
}

function map(model){
    var paths = _.mapValues(model.schema.paths, makeProperty);

    return {
        schema:{
            title : '',
            description: '',
            type : 'object',
            properties : paths
        }	
    };
}


module.exports = {
    map : map
}
