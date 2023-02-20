// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (toDo = 'go to the office') {
    return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(p = '*') {
    return function (p1 = 'special') {
        return `You are ${p}${p1}${p}!`;
    }
}