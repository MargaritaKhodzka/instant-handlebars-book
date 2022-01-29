console.log('loaded');

var helpers = [
    'userfy'
];

var partials = [
    'header',
    'footer'
];

var deps = [];

for (var i in helpers) {
    deps.push('h/' + helpers[i]);
}

for (var i in partials) {
    deps.push('text!p/' + partials[i] + '.partial');
}

require.config({
    paths: {
        't': 'templates',
        'p': 'partials',
        'h': 'helpers'
    },
    shim: {
        'handlebars': {
            'exports': 'Handlebars',
            'deps': deps
        }
    },
    config: {
        'H': {
            'helpers': helpers,
            'partials': partials
        }
    }
});

require(['H', 'text!t/home.template'], function(H, src) {
    var template = H.compile(src);

    var context = {
        name: 'John Smith'
    };

    document.body.innerHTML += template(context);
});