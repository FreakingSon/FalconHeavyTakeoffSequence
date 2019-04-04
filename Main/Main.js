let IsTilted;
let IsFueled;
let IsCrewed;

function initialization() {
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

    let fuel = window.prompt("Is crew locked and ready to go?");
    if(fuel == "yes")
    {
        IsCrewed = true;
    }

    if(IsTilted == true)
    {
        Console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    if(IsFueled == false)
    {
        Console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    if(IsCrewed == false)
    {
        Console.log("We're not ready to launch! Abort the mission or inspect the vehicle!");
    }

    else{
        Console.log("We're ready to count down!");
    }
} 