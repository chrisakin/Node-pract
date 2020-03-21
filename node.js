// Hello after 4 seconds

// Hello after 8 seconds

// You can define only one function


const theOneFunc = delay => {
    console.log ('Hello after' + delay + 'seconds');
};

setTimeout (theOneFunc, 4*1000, 4);
setTimeout (theOneFunc, 8*1000, 8);

