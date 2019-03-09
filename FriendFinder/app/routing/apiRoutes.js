var path = require("path");

// Getting the array of friends.
var friendsList = require("../data/friends");

// Exporting the logic that will handle the get and post requests for the friendsList array.
module.exports = function (app) {

    // get request for the friendsList JSON
    app.get("/api/friends", function (req, res) {

        res.json(friendsList);

    });

    // Listening for the post request.
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        // If there are is at least one other person registered.
        if (friendsList.length > 0) {

            // Array that will hold all the values of each friends' score difference.
            var candidates = [];

            // Looping through the list of friends.
            for (i = 0; i < friendsList.length; i++) {

                // value that represents the difference in scores.
                var scoreDiff = 0;

                // Looping through the current friend being compared - answers of each survey question.
                for (j = 0; j < friendsList[i].scores.length; j++) {
                    // finding the absolute value of the difference and getting the total
                    scoreDiff = scoreDiff + Math.abs(newFriend.scores[j] - friendsList[i].scores[j]);
                }

                // Pushing the total difference in scores, to the candidates array.
                candidates.push(scoreDiff);
            }

            // The variable 'lowestDiff', will hold the number value of the least amount of differences.
            var lowestDiff = candidates[0];

            // Looping through all of the candidates score differences and looking to get the lowest number out of them all.
            for (i = 1; i <= candidates.length; i++) {
                 if (candidates[i] < lowestDiff) {
                     lowestDiff = candidates[i];
                 }
            }

            // The variable 'bestMatch', will hold the 'newFriend' object of the one with the lowest diffences. Looks for the indexOf the lowest difference friend inside the friendsList array.
            var bestMatch = friendsList[candidates.indexOf(lowestDiff)];

            console.log("You matched with: " + bestMatch.name);
        }
        else {
            console.log("hello");
        }

        // pushing the new friend to the friends list after comparing it to the rest. (I didn't want it to compare it to itself at the end of the array).
        res.json(newFriend);
        friendsList.push(newFriend);
    });
};
