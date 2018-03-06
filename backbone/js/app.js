$( document ).ready( function() {

    require(["models/surfboard"], function() {

        var board1 = new Surfboard({
            manufacturer:   'Channel Island',
            model:          'Whip',
            stock:          12
        });
    
        var board2 = new Surfboard({
            manufacturer:   'Sun Rocha',
            model:          'Whap',
            stock:          23
        });
    
        $( '#manufacturer' ).html( board1.get( 'manufacturer' ));
        $( '#model' ).html( board1.get( 'model' ));
        $( '#stock' ).html( board1.get( 'stock' ));
        
        $( '#manufacturer2' ).html( board2.get( 'manufacturer' ));
        $( '#model2' ).html( board2.get( 'model' ));
        $( '#stock2' ).html( board2.get( 'stock' ));


    });

});
