
(() => {
    'use strict'

    let homeModule = angular.module("mainApp");

    homeModule.controller('homeController', function(platforms){
        let vm = this;
        vm.test = platforms;
        vm.plats = platforms.Links.Data;


        
        

        

    });

}

)();