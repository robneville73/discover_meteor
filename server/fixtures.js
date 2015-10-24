if (Posts.find().count() === 0) {

  var now = new Date().getTime();

  //create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman'}
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Grief' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2
  });

  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting project Sacha, can I get involved?'
  });

  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 12 * 3600 * 1000),
    commentsCount: 0
  });
}