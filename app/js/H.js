define(['handlebars', 'module', 'require'],
    function (H, module, require) {
        var opts = module.config();

        for (var i in opts.helpers) {
            var helper = opts.helpers[i];
            var func = require('h/' + helper);
            H.registerHelper(helper, func);
        }

        for (var i in opts.partials) {
            var partial = opts.partials[i];
            var src = require('text!p/' + partial + ".partial");
            H.registerPartial(partial, src);
        }
        return H;
    }
);