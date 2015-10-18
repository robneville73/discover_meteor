//check that the userId specific owns the documents
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
}