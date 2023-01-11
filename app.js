console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) 
{
    if(count > 0)
    {
        for(let i = 0; i <= count; i++)
        {
            if (i % 2 != 0)
            {
                console.log(i);
            }
        }
    } 
    else 
    {
        for(let j = 0; j >= count; j--)
        {
            if (j % 2 != 0)
            {
                console.log(j);
            }
        }

    }  
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) 
{
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if(age >= 16) 
    {
        console.log(aboveSixteen);
    }
    else if (age < 16) 
    {
        console.log(belowSixteen);
    }
    else 
    {
        console.log("Can not determine if user can drive because no age has been specified");
    }
}


// Exercise 3 

function whichQuad(x, y) 
{
    if(x == 0 && y == 0)
    {
        console.log("The point lies on the x and y axis at (0,0)");
    }
    else if(x == 0)
    {
        console.log("The point lies on the y-axis");
    }
    else if (y == 0)
    {
        console.log("The point lies on the x-axis");
    }
    else if (x > 0 && y > 0)
    {
        console.log("The point lies in the Quadrant 1");
    }
    else if (x > 0 && y < 0)
    {
        console.log("The point lies in Quadrant 4");
    }
    else if (x < 0 && y > 0)
    {
        console.log("The point lies in Quadrant 2");
    }
    else
    {
        console.log("The point lies in Quadrant 3");
    }
}

// Exercise 4 

function triangle(side1, side2, side3)
{
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2)
    {
        console.log("Invalid triangle");
    }
    else if (side1 == side2 && side2 == side3)
    {
        console.log("Equilateral triangle");
    }
    else if (side1 == side2 || side1 == side3 || side2 == side3)
    {
        console.log("Isosceles triangle");
    }
    else if (side1 != side2 && side1 != side3)
    {
        console.log("Scalene triangle");
    }
}

// Exercise 5

function dataUsage(planLimit, day, usage)
{
    let avgUse = planLimit / 30;
    let daysRemaining = 30 - day;
    let dailyUsage = usage / day;
    let remainUsage = (planLimit - usage) / daysRemaining;
    let overUse = (dailyUsage * 30) - planLimit;
    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use : ${avgUse} GB/day`);
    if(dailyUsage < avgUse)
    {
        console.log(`You are UNDER your average daily use (${dailyUsage} GB/day)`);
        console.log(`To stay below your data plan, do not use more than ${remainUsage} GB/day`);
    }
    if(dailyUsage == avgUse)
    {
        console.log(`You are RIGHT ON your average daily use (${dailyUsage})`);
    }
    if(dailyUsage > avgUse)
    {
        console.log(`You are EXCEEDING your daily average use (${dailyUsage})`);
        console.log(`Continuing this high usage, you will exceed your data plan by ${overUse.toFixed(2)} GB.`);
        console.log(`To stay below your data plan, use no more than ${remainUsage} GB/day`);
    }


}

