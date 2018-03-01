$(document).ready(function() {
    var HelloView = Backbone.View.extend({
        el: $('body'),

        initialize: function() {
            this.render();
        },

        render: function() {
            $(this.el).append("<h1>Hello World</h1>");
        },

        events: {
            "click #click-me": "botao"
        },

        botao: function(){
            console.log("clicou");
        }

    });
    var helloView = new HelloView();
});
