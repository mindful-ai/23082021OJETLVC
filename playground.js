define(['knockout', 
        'ojs/ojcollectiondataprovider', 
        "ojs/ojmodel", 
        "ojs/ojtable"],
 function(ko, 
    CollectionDataProvider, 
    Model ){

    function playgroundViewModel(){

        var self = this;

        // Define the URL
        self.serviceURL = "https://apex.oracle.com/pls/apex/oraclejet/lp/activities/";

        // prototype for the model
        self.parseData = function(response) {
            return {name: response['name'],
                short_desc: response['short_desc']
            };
          };

        // Creating a model
        // Extend the Model class
        self.Department = Model.Model.extend({
            urlRoot: self.serviceURL,
            parse: self.parseData,
            idAttribute: 'id'
        });

        // Create the Model object
        self.myDept = new self.Department();

        // Create a collection
        // Extend the Collection class
        self.DeptCollection = Model.Collection.extend({
            url: self.serviceURL + "?limit=50",
            model: self.myDept
        });

        // Create a collection object
        self.DeptCol = ko.observable();
        self.DeptCol(new self.DeptCollection());

        // Connect the datasource to collection through CDP
        self.datasource = ko.observable();
        self.datasource(new CollectionDataProvider(self.DeptCol()));


    }
    return playgroundViewModel;
    
})