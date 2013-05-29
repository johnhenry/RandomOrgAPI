/*!
 * CreateAPI.js
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 */

/**
 * random.org API module:
 *
 * Library for Creating APIs within your application that connect to APIs on the web.
 * Can be used in both client-side (Browser) and server-side (Node) applications.
 *
 *   
 */
(function (exports, global) {

    //Define any functions used to transform results
        //Note: These functions are by nature, expected to be somewhat obscure

    //Converts plain text to array and filters out empty strings
    var plain_to_array = function (str) {
        return str.split("\n").filter(function (str) {return str !== ""; });
    };
    //Maps array of strings to array of numbers
    var map_string_to_number = function (str) {
        return str.map(function (str) {return Number(str); });
    };
    //Maps array of strings to array of integers in base 10
    var map_string_to_int_10 = function (str) {
        return str.map(function (str) {return parseInt(str, 10); });
    };
    //Maps an array of strings to a maxtix of integers in base 10
    var map_array_strings_to_matrix_int_10 = function (arr) {
        return arr.map(function (str) {return str.split(" ").map(function (str) {return parseInt(str, 10); }); });
    };
    //API - Object
        //Members
            //url:
            //defaultData:
            //dataRequired:
            //responseTransform:Array
    var BASE_URL = "http://www.random.org/";
    var API_LIST = {
        sequences : {
            url : BASE_URL + "sequences",
            dataDefault : {
                min : 0,
                max : 9,
                rnd : "new"
            },
            dataRequired : {
                format : "plain",
                col : 1
            },
            transformResponse : [plain_to_array, map_string_to_int_10]
        },
        integers : {
            url : BASE_URL + "integers",
            dataDefault : {
                min : 0,
                max : 9,
                num : 0,
                base : 10,
                rnd : "new"
            },
            dataRequired : {
                format : "plain",
                col : 1
            },
            transformResponse : [plain_to_array, map_string_to_int_10]
        },
        integerSets : {
            url : BASE_URL + "integer-sets",
            dataDefault : {
                min : 0,
                max : 10,
                num : 10,
                sets : 10,
                order : "random",
                rnd : "new"
            },
            dataRequired : {
                format : "plain"
            },
            transformResponse : [plain_to_array, map_array_strings_to_matrix_int_10]
        },
        gaussianDistributions : {
            url : BASE_URL + "gaussian-distributions",
            dataDefault : {
                mean : 0,
                stdev : 1,
                num : 10,
                dec : 10,
                notation : "scientific",
                rnd : "new"
            },
            dataRequired : {
                format : "plain",
                col : 1
            },
            transformResponse : [plain_to_array, map_string_to_number]
        },
        decimalFractions : {
            url : BASE_URL + "decimal-fractions",
            dataDefault : {
                num : 10,
                dec : 10,
                rnd : "new"
            },
            dataRequired : {
                format : "plain",
                col : 1
            },
            transformResponse : [plain_to_array, map_string_to_number]
        },
        bytes : {
            url : BASE_URL + "cgi-bin/randbyte",
            dataDefault : {
                nbytes : 8,
                rnd : "new"
            },
            dataRequired : {
                base : "f"
            }
        }
    };
    var errorFuncByName = function (name) {
        return function(error) {
            console.log("RandomOrg Error accessing API : " + name + " -- " + String(error));
        };
    };
    var CreateAPI = global.CreateAPI ? global.CreateAPI : require("create-api");
    CreateAPI.Create(API_LIST, exports, errorFuncByName);
})(typeof exports === 'undefined' ? this['RandomOrgAPI'] = {} : exports, typeof global === 'undefined' ? window : global);
/*
var result_haldler = function(result){console.log(result)};
//All functions are asynchronous and, as such, a take a result_handler function to handle the result. 
RandomOrg.sequence(result_handler);
*/