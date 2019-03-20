//Write a function that converts a string input of stadard time to military time

const currentDate = new Date();

// const timeStapm = currentDate.getTime();
// // const timeStamp2 = new Date('02/10/2016').getTime();
// const todate = new Date(timeStapm).getDate();
// const tomonth = new Date(timeStapm).getMonth() + 1;
// const toyear = new Date(timeStapm).getFullYear();
// const original_date = tomonth + '/' + todate + '/' + toyear;

// console.log(original_date);

// const hours = currentDate.getHours();
// const minutes = currentDate.getMinutes();
// const seconds = currentDate.getSeconds();
// const milliseconds = currentDate.getMilliseconds();
// const currentMiliraryTime = hours + ':' + minutes + ':' + seconds;

// console.log(currentMiliraryTime);

function toMilitaryTime(standardTime) {
    standardTime = standardTime.split(" ");
    let timeOfDay = standardTime[1];
    let time = standardTime[0].split(":");
    // when it's 12:00:00 a.m. timer officially shows 24:00:00, otherwise it shows 00:00:01
    // when it's 12:00:00 p.m. -> we want to to keep it to show 12:00:00
    // normally it's gonna be 1:00:00 p.m. => 1+12 => 13:00:00
    // 11:30:00 p.m. => 23:30:00
    // 7:00:00 a.m. => 7:00:00

    if (timeOfDay === "A.M." && time[0] === "12" && time[2][1] > "0") {

        return "00" + ":" + time[1] + ":" + time[2]

    } else if (timeOfDay === "P.M." && time[0] !== "12") {

        return (parseInt(time[0]) + 12) + ":" + time[1] + ":" + time[2]

    } else if (timeOfDay === "A.M." && time[0] === "12") {

        return (parseInt(time[0]) + 12) + ":" + time[1] + ":" + time[2]

    } else {

        return time.join(":")

    }
}

console.log(toMilitaryTime('12:00:01 A.M.'));

// TODO This fuction doesn't pass all of the tests!!! 
function toStandardTime(militaryTime) {
    militaryTime = militaryTime.split(':');
    return (
        // make decision of time is past 12 pm
        //if there's a 1 in the first position & the second elemenent is larger than two
        //else keep it as is, just add A.M.
        (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ?
            (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.' :
            militaryTime.join(':') + ' A.M.'
    )
}

console.log(toStandardTime('12:30:00'));