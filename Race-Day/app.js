let raceNumber = Math.floor(Math.random() * 1000);
// I have created random number between 0 and 1000
isEarly = true;
runnerAge = "20"
if (runnerAge > 18 && isEarly) {
    raceNumber += 1000;
}
if (runnerAge > 18 && isEarly) {
    console.log(`You'll race at 9.30 am, runner: ${raceNumber}`)
} else if (runnerAge > 18 && !isEarly) {
    console.log(`You'll race at 11.00 am, runner: ${raceNumber}`)
} else if (runnerAge < 18) {
    console.log(`You'll race at 12.30 pm, runner: ${raceNumber}`)
} else {
    console.log('You better see the registration desk')
}