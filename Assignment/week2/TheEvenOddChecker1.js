/*
INPUT: Get number from user 
IPO

PROCESSES: 
    If the is divisible by 2 equal to zero then it is even
    If number %2 !=0 then it is odd

OUTPUT:
    Show odd or Even

Edges: 
        If zero ---> number is zero
        If negative ---> number must be postive to find even or Odd
        
pseudo-code:
            Get number from User

            IF number is zero
            SHOW "number is zero" 
            STOP;

            IF number is negative 
            SHOW "number must be postive to find even or odd" 
            STOP;


            ELSE
                IF number % 2 =0
                SHOW "Even"
                STOP;

            ELSE IF (number%2!=0)
                SHOW "odd"
                STOP;
            ELSE
                SHOW "Invalid output";
                STOP;
            
*/


let number = prompt("Enter a number")

if (number == 0) {
    console.log("Number is zero");

}
else if (number < 0) {
    console.log("Number must be postive to find even or odd")

}
else {
    if (number % 2 == 0) {
        console.log("EVEN Number")

    }
    else if (number % 2 == 1) {
        console.log("ODD Number")

    }
    else {
        console.log("Invalid Input");

    }
}

