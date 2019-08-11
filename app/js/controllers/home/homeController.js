
(() => {
    'use strict'

    let homeModule = angular.module("mainApp");

    homeModule.controller('homeController', function(platforms, $userPreferences){
        let vm = this;
        vm.plats = platforms.Links.Data;

        
        vm.animals = [    
            { name: "Firulais", type: "dog", sex: "male" },
            { name: "Cookie", type: "dog", sex: "female" },
            { name: "Lucas", type: "cat", sex: "male" },
            { name: "Peter", type: "spider", sex: "male" },
        ];      

        vm.eng = $userPreferences.switchData();
    

    });


}

)();