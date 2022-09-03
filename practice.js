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
    let activities = exercises.map((obj) => obj.name)
    const numberedActivities = []
    while (numberedActivities.length < number) {
        const randomSelection = Math.floor(Math.random() * (activities.length))
        const selectedExerciseName = activities[randomSelection]
        numberedActivities.push(selectedExerciseName)
        activities = activities.filter((exerciseName) => exerciseName !== selectedExerciseName)
    }
    return numberedActivities
}


// const randomNumberBetween = (min, max) => {
//     return min + Math.floor(Math.random() * (max-min));
//  }


// code wars
// filter (security checkopoint --> you can come through)
console.log(randomWorkout(5))
// console.log(showDurationSecond('dips'));
// console.log(showDurationSecond('run'));



