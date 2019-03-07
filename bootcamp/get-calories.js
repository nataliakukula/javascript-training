
// Calculate food plan based TEE & BMI

// Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
// Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161

// Sedentary or light activity	(Office worker getting little or no exercise)	1.53
// Active or moderately active	(Construction worker or person running one hour daily)	1.76
// Vigorously active	(Agricultural worker (non mechanized) or person swimming two hours daily)	2.25

function getUserTiers() {
    const BMI = calculateBMI(170, 69);
    const idealWeight = caluclateIdealWeight(69);
    const userTEE = calculateBMICalories(170, 69, 32, "male", 1.53);
    const idealTEE = calculateBMICalories(idealWeight, 69, 32, "male", 1.53);
    let userTiers = [];

    // if a person has a healthy BMI
    if (BMI >= 18.5 && BMI <= 25) {
        // calculate their suggestions base on their OWN weight
        const tier = calculateTier(userTEE);
        userTiers.push(tier);

        // if a person is underweight
    } else if (BMI < 18.5) {
        // calculate their suggestions beased on their IDEAL weight
        const tier = calculateTier(idealTEE);
        userTiers.push(tier);

        // if a person is obesese
    } else if (BMI >= 30) {
        // calculate thir suggestions bease on their IDEAL weight
        const tier = calculateTier(idealTEE);
        userTiers.push(tier);

        //if a person is overweight (muscle mass or genetic features come in play)
    } else if (BMI > 25 && BMI < 30) {
        // SHOW TWO SUGGESTIONS
        // calucate based on thier OWN weight & their IDEAL weight
        const tier1 = calculateTier(idealTEE);
        const tier2 = calculateTier(userTEE);

        userTiers.push(tier1, tier2);
    }

    console.log(userTiers);
}


function calculateBMICalories(weight, height, age, sex, activityLevel) {

    let weightKG = weight / 2.205;
    let heightCM = height * 2.54;
    //total energy expenditure
    let tee;

    switch (sex) {
        // if the user has male inputs
        case "male":
            tee = ((10 * weightKG) + (6.25 * heightCM) - (5 * age) + 5) * activityLevel;
            break;
        // if the user has female inputs
        case "female":
            tee = ((10 * weightKG) + (6.25 * heightCM) - (5 * age) - 161) * activityLevel;
            break;

        default:
            tee = NaN;
            console.log(tee);
    }

    return tee;
}


// BMI range formula
function calculateBMI(weight, height) {

    let BMI = 703 * (weight / Math.pow(height, 2));

    return BMI;
}

// Lemmens formula: most reliable -> shows very low weight, corresponds with BMI
// Ideal Body Weight (kg) = 22 x height^2 (meter)
// transform to imperial = 2.205 (IBW)
// tansform inches to meters inches/39.37
function caluclateIdealWeight(height) {

    let heightInMeters = height / 39.37;
    let idealBodyWeightKG = 22 * (Math.pow(heightInMeters, 2));
    let idealBodyWeightPounds = 2.205 * idealBodyWeightKG;

    return idealBodyWeightPounds;
}

function calculateTier(tee) {

    let userTier;

    const caloricRemainder = tee % 100;
    // Drop 2 zeros
    const checkTier = (tee - caloricRemainder) / 100;
    // Check if a number is odd
    const isOdd = checkTier % 2;
    //if isOdd = 0 then false -> go lower
    // if is Odd = 1, then true -> go higher
    if (isOdd === 1) {
        userTier = (checkTier + isOdd) * 100;
    } else {
        userTier = checkTier * 100
    }

    return userTier;
}

getUserTiers();