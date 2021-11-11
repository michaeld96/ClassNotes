
function input()
{
    // Have to add .value to get what the element stored.
    var num1 = document.getElementById("num1").value;
    var operation = document.getElementById("operation").value;
    var num2 = document.getElementById("num2").value;
    var result = 0;
    //Checking if spot 1 and 3 are numbers.
    if(isNaN(num1) || isNaN(num2) || (isNaN(num1) && isNaN(num2)))
    {
        alert("Spot 1 and spot 3 must be a number!");
    }
    //Checking if the middle operator is a number.
    if(operation == "+" || operation == "-" || operation == "/" || operation == "*")
    {
        if(operation == "+")
        {
            result = Number(num1) + Number(num2);
        }
        if(operation == "-")
        {
            result = Number(num1) - Number(num2);
        }
        if(operation == "*")
        {
            result = Number(num1) * Number(num2);
        }
        if(operation == "/")
        {
            if(num2 != 0)
            {
                result = Number(num1) / Number(num2);
                result = parseFloat(result).toFixed(2);
            }
            else
            {
                alert("Cannot divide by zero!");
            }
        }
    }
    console.log(result);
    return result;
}
function starting_timer()
{
    var outcome = document.getElementById('outcome');
    var computer_ans = document.getElementById("correct-ans");
    var solution = document.getElementById("solution");
    var correct_result = 0;
    correct_answer = input();
    display = document.querySelector('#time');
    var time_remaining = 30;
    var start_interval = setInterval(function () 
    {
        time_remaining = time_remaining < 10 ? "0" + time_remaining : time_remaining;

        display.textContent = "00" + ":" + time_remaining;
        if (--time_remaining < 0) 
        {
            clearInterval(start_interval);
            //Comparing Answers
            computer_ans.innerHTML = input();
            if(correct_answer == guess)
            {
                outcome.innerHTML = "You're Correct!";
            }
            else
            {
                outcome.innerHTML = "Wrong Unfortunately...";
                if(operation.value == "/")
                {
                    solution.innerHTML = "<sup>" + num1.value + "</sup>&frasl;<sub>" + num2.value + "</sub> = " + parseFloat(input()).toFixed(2);  
                }
                // else if (operation.value == "*")
                // {
                //     solution.innerHTML = num1.value + "&#215" + num2.value + " = " + parseFloat(input()).toFixed(2);

                // }
                else
                {
                    solution.innerHTML = num1.value + " " + operation.value + " " + num2.value + " = " + input();
                }
            }
        }
    }, 1000);
}
function user_guess()
{
    var correct_result = 0;
    correct_answer = input();
    guess = document.getElementById("guess").value;
    console.log(guess);
    if(isNaN(guess))
    {
        alert("Your answer needs to be a number!");
    }
    var write_guess = document.getElementById("result");
    write_guess.innerHTML = guess;
    
}
function display_div()
{
    var target_div = document.getElementById('hidden');
    var enter_button = document.getElementById('enter-button');
    if(target_div.style.display !== "none")
    {
        target_div.style.display = "block";
        target_div.style.opacity = "1";
    }

}
