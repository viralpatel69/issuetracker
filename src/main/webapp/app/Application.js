/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Buzzor.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Buzzor',

    
    views: [
        
    ],

    controllers: [
        'Root'
    ],

    stores: [
            'Buzzor.store.QueryCriteriaWidgetsStore'
    ],
    
    launch: function () {
        // TODO - Launch the application
    	
    	debugger;
    }
});
