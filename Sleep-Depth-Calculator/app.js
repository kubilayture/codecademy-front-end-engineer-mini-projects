const getSleepHours = day => {
    day = day.toLowerCase();
    if (day === 'monday') {
        return 8;
    } else if (day === 'tuesday') {
        return 7;
    } else if (day === 'wednesday') {
        return 5.5;
    } else if (day === 'thursday') {
        return 9;
    } else if (day === 'friday') {
        return 9.5;
    } else if (day === 'saturday') {
        return 6.5;
    } else if (day === 'sunday') {
        return 10.5;
    }
}
// console.log(getSleepHours('FriDAy'))
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
}
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You should get some rest.')
    } else {
        console.log('You slept more than needed.')
    }
}
calculateSleepDebt()