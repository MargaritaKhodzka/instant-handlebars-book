require.config({
    paths: {
        'p': 'precomp',
        'h': 'helpers'
    },
    shim: {
        'handlebars': {
            'exports': 'Handlebars'
        }
    }
});

require (
    ['p/home', 'h/userfy', 'p/partials'],
    function (home, userfy, partials) {
        var helpers = {
            'userfy': userfy
        };

        var html = home({name: 'Gabriel'}, {helpers: helpers});
        document.body.innerHTML += html;
    }
);