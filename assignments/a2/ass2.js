// QUESTION 1 CHOICE 1
function group_1_choice_1()
{
    let inputq1c1 = document.getElementById("q1_input").value;
    let check1 = Number(inputq1c1);

    let output = document.getElementById("q1_output");



    if (!Number.isNaN(check1))
    {
        if (check1 >= 13 && check1 <= 17)
        {
            output.value = "In range";
        }
        else 
        {
            output.value = "Out of range";
        }
    }
    else 
    {
        output.value = "Not a number";
    }

}



// QUESTION 1 CHOICE 3
function group_1_choice_3()
{
    let inputq1c3 = document.getElementById("q1c3_input").value;
    let check2 = Number(inputq1c3);

    let output = document.getElementById("q1c3_output");

    if (!Number.isNaN(check2)) //first barrier to check if its a number (decimals and negatives included)
    {
        if (check2 > 0) 
        {
            let z = check2 * check2
            output.value = "Your total area is equal to: " + z;
        }
        else
        {
            output.value = "Please enter a value greater than 0..."
        }
    }
    else
    {
        output.value = "Can't calculate, please enter a number"
    }

}



// QUESTION 2 CHOICE 1
function group_2_choice_1()
{
    let inputq2c1 = document.getElementById("q2c1_input").value;
    let check3 = String(inputq2c1);
    let numbercheck3 = check3.length;

    let output = document.getElementById("q2c1_output");

    if (numbercheck3 == 1)
    {
        if (check3.charAt(0) == "a" || check3.charAt(0) == "e" || check3.charAt(0) == "i" || check3.charAt(0) == "o" || check3.charAt(0) == "u" || check3.charAt(0) == "A" || check3.charAt(0) == "E" || check3.charAt(0) == "I" || check3.charAt(0) == "O" || check3.charAt(0) == "U")
        {
            output.value = "A vowel!";
        }
        else if (check3.charAt(0) == "y" || check3.charAt(0) == "Y")
        {
            output.value = "Sometimes";
        }
        else
        {
            output.value = "Not a vowel.";
        }
    }     
    else
    {
        output.value = "Please enter only ONE character";
    }
}


//QUESTION 2 CHOICE 3
function group_2_choice_3()
{
    let inputq2c3 = document.getElementById("q2c3_input").value;
    let numbercheck4 = Number(inputq2c3);
    let error = "Cannot compute factorial value (Positive, NO decimals)";

    let output = document.getElementById("q2c3_output");

    if (Number.isInteger(numbercheck4)) //checks to see if its an integer 
    {
        if(numbercheck4 > 0) //checks to see if its positive
        {
        let returnvalue = numbercheck4;
            for (let factorialcount = numbercheck4 - 1; factorialcount > 0; factorialcount--) //factorialcount variable and returnvalue are different, return value updates as it gets multiplied, factorial count goes down the list
            {
                returnvalue = returnvalue * factorialcount;
            }
            output.value = returnvalue; //returns the final one
        }
        else
        {
            output.value = error;
        }
        
    }
    else 
    {
        output.value = error;
    }
}


//QUESTION 3 CHOICE 1
function group_3_choice_1()
{
    let inputq3c1 = document.getElementById("q3c1_input").value;
    let output = document.getElementById("q3c1_output");
    let toggle = document.getElementById("restrictiontoggle").checked;

    let lengthcheck = String(inputq3c1).length;
    let string = String(inputq3c1);

    if (toggle) 
    {
        if(checkbinarystring(string))
            {
                output.value = "" + calculatebinary(string);
            }
            else 
            {
                output.value = "0";    
            }
    }
    else
    {
        if(lengthcheck >= 10 && lengthcheck <= 20)
        {
            if(checkbinarystring(string))
            {
                output.value = "" + calculatebinary(string);
            }
            else 
            {
                output.value = "0";    
            }
        }
        else
        {
        output.value = "0"; 
        }
    }
}

//helper function1
function checkbinarystring(string)
{
    let check = String(string);
    let iteration = check.length - 1;
    let booleancheck = 1;

    while (iteration >= 0)
    {
        if(check.charAt(iteration) != "0" && check.charAt(iteration) != "1")
        {
            booleancheck = booleancheck * 0;
        }
        iteration--;
    }

    if (booleancheck == 1)
        return true;
    else
    {
        return false;
    }
}

//helper function1
function calculatebinary(string)
{
    let check = String(string);
    let iteration = check.length - 1;
    let binaryupdate = 0;

    for (let i = 0; i <= iteration; i++)
    {
        if(string.charAt(i) == "1")
        {
            binaryupdate = binaryupdate + (2**i);
        }
    }

    return binaryupdate;
}

//change text on toggle 
function changetext() {
    let textchange = document.getElementById("toggleres");
    let textchange2 = document.getElementById("scrollspyHeading1");
    let toggle = document.getElementById("restrictiontoggle").checked;

    if (toggle)
    {
        textchange.textContent = "Restriction OFF";
        textchange2.textContent = "Enter a binary number (Unlimited)";
    }
    else 
    {
        textchange.textContent = "Restriction ON";
        textchange2.textContent = "Enter a binary number (10-20 digits)";
    }

}