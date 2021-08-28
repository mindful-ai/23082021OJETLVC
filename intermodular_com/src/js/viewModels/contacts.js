define(['knockout', 'ojs/ojchart'],
 function(ko, chart){
        function contactViewModel(){
                var self = this;

                var data1 = [
                    {name:"Papers Published", items:[12]},
                    {name:"Projects Completed", items:[14]},
                    {name:"Team Size", items:[28]}   
                ];

                var data2 = [
                        {name:"Papers Published", items:[10]},
                        {name:"Projects Completed", items:[18]},
                        {name:"Team Size", items:[8]}   
                        ]; 
                
                var data3 = [
                        {name:"Papers Published", items:[17]},
                        {name:"Projects Completed", items:[8]},
                        {name:"Team Size", items:[18]}   
                        ];

                self.datasource1 = ko.observableArray(data1);
                self.datasource2 = ko.observableArray(data2);
                self.datasource3 = ko.observableArray(data3);

        }
        return new contactViewModel();
    }
);