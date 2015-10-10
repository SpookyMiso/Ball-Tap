Meteor.publish("games", function(){
  return GameCollection.find({userId: this.userId});
});