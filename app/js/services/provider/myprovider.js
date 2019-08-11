(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.provider("$userPreferences", function(){

        

 



        let $data = [];


        
        this.setLogLevel = (level) => {
            $data = level;
        }

        this.$get = [() => {

            var userPreferences = {}
          

            return{ 
                switchData: function() {
                    let preference = [];
                    switch(preference) {
                        case "1":
                            console.log("case 1")
                            break;
            
                        case "2":
                            console.log("case 2")
                            break;
                    }
                    return preference;
            }
        }

        }];
    });



})();