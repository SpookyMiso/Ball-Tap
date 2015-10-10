Router.configure({
  layoutTemplate: "layout"
});

Router.route ('/', function () {
  this.render('login');
});

Router.route ('/create', function () {
  this.render('create');
});

Router.route ('/join', function () {
  this.render('join');
});

Router.route ('/lobby', function () {
  this.render('lobby');
});