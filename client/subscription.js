Meteor.subscribe("game", function () {
  return TaskCollection.find({
    user_id: this.userId
  });
});