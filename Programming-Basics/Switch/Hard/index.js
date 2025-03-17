// Roman Numeral Converter
// Take an integer (1-10) as input.
// Use switch to print the corresponding Roman numeral.

function romanConverter(params) {
    let result = ''
    switch (params) {
        case 1:
            result = 'I'
            break;
    
        case 2:
            result = 'II'
            break;
    
        case 3:
            result = 'III'
            break;
    
        case 4:
            result = 'IV'
            break;
    
        case 5:
            result = 'V'
            break;
    
        case 6:
            result = 'VI'
            break;
    
        case 7:
            result = 'VII'
            break;
    
        case 8:
            result = 'VIII'
            break;
        case 9:
            result = 'IX'
            break;
        case 10:
            result = 'X'
            break;
        default:
            result = "invalid input"
            break;
    }
    return result
}

console.log(romanConverter(2));  //II
console.log(romanConverter(4));  //IV


// Zodiac Sign Finder
// Take a birth month and day.
// Use switch to determine the person's zodiac sign.

function zodiacSignFinder(month,day) {
    const zodiacSigns = [
        { cutoff: 120, sign: "Capricorn" }, { cutoff: 218, sign: "Aquarius" }, { cutoff: 320, sign: "Pisces" },
        { cutoff: 419, sign: "Aries" }, { cutoff: 520, sign: "Taurus" }, { cutoff: 620, sign: "Gemini" },
        { cutoff: 722, sign: "Cancer" }, { cutoff: 822, sign: "Leo" }, { cutoff: 922, sign: "Virgo" },
        { cutoff: 1022, sign: "Libra" }, { cutoff: 1121, sign: "Scorpio" }, { cutoff: 1221, sign: "Sagittarius" },
        { cutoff: 1231, sign: "Capricorn" }
    ];
    const date = (month*100) + day
    
    for (const element of zodiacSigns) {
        switch (true) {
            case element.cutoff>date:
            return element.sign  
        }
    }
}

console.log(zodiacSignFinder(1,12));    //Capricorn
console.log(zodiacSignFinder(3,12));    //Pisces


// Discount System Based on Membership
// Input membership type ("Gold", "Silver", "Bronze").
// Use switch to apply different discount rates on a purchase.

function discountSystem(type) {
    const purchase = 15000
    let discount
    switch (type) {
        case "Gold":
            discount = .4          
            break;
    
        case "Silver":
            discount = .2            
            break;
    
        case "Bronze":
            discount = .1            
            break;

        default:
            discount = "Invalid type"
            break;
    }
    return `${discount*purchase} with ${discount*100}% discount`
}

console.log(discountSystem("Gold"));  //6000 with 40% discount
console.log(discountSystem("Silver"));//3000 with 20% discount


// Automated Toll Booth System
// Take a vehicle type ("Car", "Truck", "Bike") as input.
// Use switch to determine the toll fee.
function toolBoothSystem(vehicle) {
    let fee 
    switch (vehicle.toLowerCase()) {
        case "car":
            fee = 20
            break;
        case "truck":
            fee = 40
            break;
        case "bike":
            fee = 10
            break;
        default:
            fee= "invalid vehicle"
            break;
    }
    return fee
}

console.log(toolBoothSystem("Car"));        //20
console.log(toolBoothSystem("Bicycle"));    //invalid vehicle


// Music Playlist Controller
// Take a command ("Play", "Pause", "Next", "Previous").
// Use switch to perform the correct action.
function playListController(op) {
    let operation
    switch (op.toLowerCase()) {
        case "play":
            operation = "playing music"
            break;
        case "pause":
            operation = "pausing music"
            break;
        case "next":
            operation = "next song"
            break;
        case "previous":
            operation = "previous song"
            break;
        default:
            operation = "invalid command"
            break;
    }
    return operation
}

console.log(playListController("play"));//playing music
console.log(playListController("loop"));//invalid command
