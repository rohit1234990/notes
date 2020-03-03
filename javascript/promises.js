/*
Techsith :   https://www.youtube.com/watch?v=s6SH72uAn3Q 

Promises in javascript are pretty much same as promises in real life.
Promise takes a callback function as an argument, 
which further takes two parameters - resolve and reject
*/

if(0) {
    let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
        // cleaning the room
        let isClean = false

        if (isClean) {
            resolve('clean')
        } else {
            reject('not clearn');
        }
    })

    /*
        if I clean this code a little bit so that it start lookin like the below one

        let promiseToCleanTheRoom = new Promise(function (resolve, reject) {
            resolve('clean')
        })

        the reason he might be doing this is because he doesn't want to first create the promise
        and then useit, he actually want to do it on the fly.
    */

    boundry(promiseToCleanTheRoom)
    console.log('output for promise : promiseToCleanTheRoom')
    promiseToCleanTheRoom.then(function (fromResolve) {
        console.log('the room is ' + fromResolve)
    })
    .catch(function (fromReject) {
        console.log('the room is ' + fromReject)
    })
}

/*
Another way of writing promises
*/

if(0) {
    boundry('Another way of writing promises')
    let cleanRoom = function() {
        return new Promise(function(resolve, reject) {
            resolve('the room was cleaned')
        })
    }

    cleanRoom().then(res => {
        console.log(res)
    })
}

/*
    lets implement techsith bigger example on promise
    
*/

if(1) {
    let cleanRoom = function() {
        return new Promise(function(resolve, reject) {
            resolve('room is cleaned')
        })
    }

    let takeTheGarbageOut = function() {
        return new Promise(function(resolve, reject) {
            resolve('taken out the garbage')
        })
    }

    let getTheIceCream = function() {
        return new Promise(function(resolve, reject) {
            resolve('got ice cream')
        })
    }


    // so let's try calling them one after the other

    cleanRoom().then(function(result) {
        console.log(result)
        return takeTheGarbageOut() 
        // as soon as i write the return takeTheGarbageOut the whole thing is replaced by 
        // takeTheGarbageOut promise, try to visualize, now i can again write then and proceed                  
    }).then(function(result) {
        console.log(result)
        return getTheIceCream()
    }).then(function(result) {
        console.log(result)
        console.log('done')
    })
}




// utility function
function boundry(message) {
    console.log('--------------------------------------------')
    console.log(message)
    console.log('--------------------------------------------')
}