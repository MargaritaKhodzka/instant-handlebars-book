var fs = require("fs");
var requirejs = require("requirejs");

fs.readdir("helpers/", function (err, files) {
    if (err) {
        console.log(err);
    } else {
        var out = "define(['handlebars'], function(Handlebars) {\n}";

        for (var i = 0; i < files.length; i++) {
            var filename = files[i];

            if (filename.substring(-3) == ".js") {
                var func = requirejs("helpers/" + filename);
                var name = filename.substring(0, filename.length - 3);
                out += "\tHandlebars.helpers['" + name + "']";
                out += " = " + func.toString() + ";\n";
            }
        }

        out += "\treturn Handlebars.helpers\n";
        out += "});"

        fs.writeFileSync("precomp/helpers.js", out);
    }
});