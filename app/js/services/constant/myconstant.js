(() => {
    'use strict';

    var module = angular.module("mainApp");

    module.constant("platforms", {
        "Links":{
            "headers": ["name", "link"],
            "Data": [
                {id: 1, name: "facebook", link: "https://facebook.com/my-company"},
                {id: 2, name: "twitter", link: "https://twitter.com/my-company"},
                {id: 3, name: "instagram", link: "https://intagram/my-company"}
            ]
        
        },
    });
})();