var HomeView = Backbone.View.extend({
    template: '<h1>Home</h1>',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
});


var AboutView = Backbone.View.extend({
    template: '<h1>About</h1>',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html(this.template);
    }
});

var AppRouter = Backbone.Router.extend({
    routes: {          
        '': 'homeRoute',
        'home': 'homeRoute',
        'about': 'aboutRoute',          
    },
    homeRoute: function () {
        var homeView = new HomeView();          
        $("#content").html(homeView.el);
    },
    aboutRoute: function () {
        var aboutView = new AboutView();          
        $("#content").html(aboutView.el);
    }
});

var appRouter = new AppRouter();
Backbone.history.start();
