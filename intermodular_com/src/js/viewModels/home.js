define(['ojs/ojcore', 'knockout', 'jquery', 'knockout-postbox'],
    function(oj, ko, $){
        function homeViewModel(){
            var self = this;
            self.name = ko.observable("Purushotham");
            self.age  = ko.observable("35");

            ko.postbox.subscribe("currentUser", function (newValue) {
                self.name(newValue.name);
            });
        }
        return new homeViewModel();
    }
);