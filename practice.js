/// objects with name key (exercise they are) and duration key 

//

const exercises = [
    { name: 'push-up', duration: 10 },
    { name: 'squats', duration: 5 },
    { name: 'pull-ups', duration: 15 },
    { name: 'dips', duration: 10 },
    { name: 'rolling-out', duration: 3 },
    { name: 'lunges', duration: 5 },
    { name: 'core', duration: 10 },
];

// function that accepts a name of one exercise as a string and returns the duration of that exercise

function showDuration(name) {
    for (let ex of exercises) {
        if (name === ex.name) {
            return ex.duration
        }
    }
    return false
}

function showDurationSecond(name) {
    const foundExercise = exercises.find(ex => ex.name === name)
    if (foundExercise === undefined) {
        return false
    }
    return foundExercise.duration
}

//word properties means key on an object


// write a function that puts together, given a numver of exercises 
//that the person wants to do (e.g. 4), gives them a random set of unique exercises back as a workout

const randomWorkout = (number) => {
    // return Math.floor(Math.random() * number)
    let activities = []
    for (let ex of exercises) {
        activities.push(ex.name)
    }
    return activities.slice(0, number)
}


// const randomNumberBetween = (min, max) => {
//     return min + Math.floor(Math.random() * (max-min));
//  }




console.log(randomWorkout(4))
// console.log(showDurationSecond('dips'));
// console.log(showDurationSecond('run'));



