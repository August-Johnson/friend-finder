var path = require("path");

// Getting the array of friends.
var friendsList = require("../data/friends");


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        
        res.json(friendsList);

    });


    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        friendsList.push(newFriend);

    });
};
