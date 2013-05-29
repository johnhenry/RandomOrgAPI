#RandomOrgAPI
##Library for accessing Random.org's from within your javascript application. 
Can be used in both client-side and server-side applications.
### Installation
#### Node
```
    $ npm install random-org-api
```

```js
    var RandomOrgAPI = require('random-org-api');
```

Note: CreateAPI.js is a dependency.
	While you can find it here: [https://github.com/johnhenry/CreateAPI](https://github.com/johnhenry/CreateAPI),
	it should install automatically when you install RandomOrgAPI through npm. If you install it sehparately or manually, it should work fine placed either in RandomOrgAPI's node_modules folder or side-by-side with RandomOrgAPI.



#### Browser
```html
   <script src="./lib/CreateAPI.js" ></script>
    <!--
    CreatAPI.js is a dependency. 
    You can find it here: https://github.com/johnhenry/CreateAPI/
    -->
   <script src="./lib/RandomOrgAPI.js" ></script>
   <!--Henceforth, you may access the global RandomOrgAPI object...-->
```

##API Description
Each API takes up to three arguments -- parameters, callback, failure

    * parameters (optional) - Object containing parameters to be passed to API e.g.
    * callback (optional) - Function to be called upon response
        callback is passed the result as a parameter
    * failure (optional) - function to be called upon response
        failure is passed the error as a parameter

Each API is based on an API found here: [http://www.random.org/#numbers](http://www.random.org/#numbers)

### RandomOrgAPI.integers - creates an array of random integers
parameters

    * min - the minimum possible value for the generated integers
        //Default:0
    * max - the maximum possible value for the generated integers
        //Default:9
    * base - the base in which the numbers generate is returned
        //Default:10
        //Note: Even though random.org will accept a base of 2,4,8,10,or 16
            //Only base 10 is supported
    * num - the amount of random numbers generated
        //Default:10

### RandomOrgAPI.sequence - creates a randomly ordered array of all integers between two numbers
parameters

    * min - the smallest number included
        //Default:0
    * max - the largest number included
        //Default:9

### RandomOrgAPI.integerSet - creates an list of sets of integers
parameters

    * min - the minimum possible value for the generated integers
        //Default:0
    * max - the maximum possible value for the generated integers
        //Default:10
    * num - the amount of integers per set
    * sets - the amount of sets generated
        //Default:10

### RandomOrgAPI.decimalFractions - creates an list random numbers between 0 and 1
parameters

    * dec - the decimal precision of each number
        //Default:10
    * num - the amount of numbers generated
        //Default:10

### RandomOrgAPI.gaussianDistributions - creates a list of random numbers that satisfy a given guassian distribution
parameters

    * mean - the mean of the given guassian distribution
        //Default:0
    * stdev - the standard deviation of the given guassian distribution
        //Default:1
    * dec - the decimal precision of each number
        //Default:10
    * num - the amount of numbers generated
        //Default:10

### RandomOrgAPI.bytes - creates random bytes
parameters

    * nbytes - the number of bytes to be generated
        //Default:8

##Example
The following example creates a variable named "die" and then assigns a random integer between 1 and 6 (inclusive) to it's value.

```js
var die;
RandomOrgAPI.integer({min:1,max:6,num:1},function(result){console.log(die = result[0])});
```js

## License

(The MIT License)

Copyright (c) 2013 John Henry &lt;john@iamjohnhenry.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.