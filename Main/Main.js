
let IsTilted;
let IsFueled;
let IsCrewed;

function gg() {
    let tilt = window.prompt("How tiled the rocket is on a lachpad (degrees)?");
    if(tilt == 80)
    {
        IsTilted = true;
    }

    let fuel = window.prompt("Is it fueled yet?");
    if(fuel == "yes")
    {
        IsFueled = true;
    }

    let crew = window.prompt("Is crew locked and ready to go?");
    if(crew == "yes")
    {
        IsCrewed = true;
    }

    if(IsTilted == true)
    {
        console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    if(IsFueled == false)
    {
        console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    if(IsCrewed == false)
    {
        console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    else{
        console.log("We're ready to count down!");
    }
} 

    gg();