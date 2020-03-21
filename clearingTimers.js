const timerId = setTimeout(() => {
    console.log ('you will not see this one'),
    5
}, clearTimeout(timerId));