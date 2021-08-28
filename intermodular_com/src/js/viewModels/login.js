define(['ojs/ojcore', 'knockout', 'jquery',  'ojs/ojinputtext', 'ojs/ojformlayout',  'ojs/ojbutton',  'knockout-postbox'],
    function(oj, ko, $){
        function loginViewModel(){
            var self  = this;
            self.user = ko.observable();
            self.pwd  = ko.observable();
            self.info = ko.observable();
            self.dispControl = ko.observable('N');

            
            self.lifecycleFunction = function(info) {
                ko.postbox.publish("currentUser",
                {
                    'name': self.user()
                });
            };
            

            self.rInstance = ko.dataFor(document.getElementById("routing-container"));
            self.info(self.rInstance.viewModel);

            self.clickListenerLogin = function(event, data, bindingContext){
                self.rInstance.login();
                self.dispControl('Y');
                self.lifecycleFunction();
            };

            self.clickListenerLogout = function(event, data, bindingContext){
                self.rInstance.logout();
                self.dispControl('N');
                self.lifecycleFunction();
            };
            
        }
        return new loginViewModel();
    }
);