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








// Anagram practice

// i should get input of two words and output should be true or false
// validAnagram('aab', 'baa')
// validAnagram('awesome', 'aweso')
// validAnagram('', '')
// validAnagram('awesome', 12)


const returnString = () => {
return 'a'
}

const validAnagram = (string1, string2) => {

    if (string1.length !== string2.length) {
        return false
    }

    const firstWord = {};
    const secondWord = {};
    for (let char of string1) {
        firstWord[char] = (firstWord[char] || 0) + 1
    }
    for (let char of string2) {
        secondWord[char] = (secondWord[char] || 0) + 1
    }
    for (let letter in firstWord) {
        if (letter in secondWord) {
            if (firstWord[letter] !== secondWord[letter]) {
                return false
            }
        }
    }
    return true
}

validAnagram('awesome', 'matthew')
// iterate over each letter and put in a separate object with keys as letters and amounts as values
// if there's an exact match of the two objects that we have created, true. Otherwise, false


// dot notation vs bracket notation in objects