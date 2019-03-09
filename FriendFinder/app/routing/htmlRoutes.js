var path = require("path");

// Exporting the logic that will route user to html pages.
module.exports = function (app) {
    // Displays home.html as the default route.
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    // Displays survey.html.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};
