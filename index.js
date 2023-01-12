// code your solution here
function saturdayFun (activity ='roller-skate'){
    let message = `This Saturday, I want to ${activity}!`;
    return message;
}

function mondayWork (activity ='go to the office'){
    let message = `This Monday, I will ${activity}.`;
    return message;
}


function wrapAdjective(message = "*") {
    const part1 = "You are ";
    return function(adjective = "special") {
        //console.log(`${part1}${message}${adjective}${message}!`); 
        return `${part1}${message}${adjective}${message}!`;
    };
  }
  