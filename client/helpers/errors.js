//Local (client-only minimongo collection)
Errors = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message});
};