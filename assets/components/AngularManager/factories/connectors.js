/**
 * Created by levi.kim on 25/05/2017.
 */
/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var connectors = function ($resource, BASE_RESTAPI) {
//BASE_RESTAPI
    var categoriesServices = $resource(BASE_RESTAPI + "/categories/:category/:subcat", {}, {
        get: {method: "GET", cache: true}
    });


    return {
        getAllSubCats: function (category, onelevel, skipthemes) {
            var result = categoriesServices.get({
                category: category,
                subcat:'subcategories',
                onelevel: onelevel != undefined ? 1 : 0,
                skipthemes: skipthemes != undefined ? 1 : 0
            });
            return result.$promise;
        },
        info:function(category) {
            var result = categoriesServices.get({category: category});
            return result.$promise;
        }

    };
};

try {
    angular.module('WoowApp').factory("categories", categories);
}catch(e) {}
try {
    angular.module('woowAppMyAccount').factory("categories", categories);
}catch(e) {}
try {
    angular.module('WoowCanvasApp').factory("categories", categories);
}catch(e) {}
try {
    angular.module('WoowCalendarApp').factory("categories", categories);
}catch(e) {}
try {
    angular.module('WoowGiftApp').factory("categories", categories);
}catch(e) {}
try {
    angular.module('WoowPrintApp').factory("categories", categories);
}catch(e) {}

