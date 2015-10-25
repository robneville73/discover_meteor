Template.header.helpers({
  activeRouteClass: function(/* route names*/) {
    var args = Array.prototype.slice.call(arguments, 0);
    args.pop(); //pop hash added by underscore at the end here

    var active = _.any(args, function(name) {
      return Router.current() && Router.current().route.getName() === name;
    });

    return active && 'active'; //true && someString returns the string while false && someString returns false
  }
})