// The helper convert the name to lowercase and replaces spaces with underscores
define([], function() {
    return function(name) {
        var username = name.toLowerCase().replace(/ /g, "_");
        return username;
    }
});