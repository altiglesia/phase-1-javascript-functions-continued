function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("I want to bathe my dog");

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

// function wrapAdjective(niceWords = "special"){
//     const symbol = "*";
//     return function() {
//         console.log(`You are ${symbol} ${niceWords} ${symbol}!`);
//     }
// };
// wrapAdjective()();

function wrapAdjective(niceWords, msg = "You are") {
    const innerFunction = function (symbol = "*") {
        return `${msg} ${niceWords}${symbol}${niceWords}!`;
    }
    return innerFunction;
}