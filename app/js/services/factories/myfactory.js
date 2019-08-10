(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.factory("platFactory", function (platforms) {

        let factoryplatform = function (name){
            this.loadData = () => {
                let data = JSON.parse(platFactory.getItem(name));
                if (!data){
                    return platforms[name].Data;
                }
                return data;
            }
        }

        return factoryplatform;
    });

})();