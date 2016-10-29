import {Profiles} from '../imports/api/profiles.js'

Router.route('/p/:_id', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
  this.render("profile", {
    data: function() { return Profiles.findOne({userId: this.id });}
  });
}, {
    name: 'profile'
});

Router.route('/new', function () {
  this.render("new");
});

Router.route('/', function() {
  this.render("home");
});
