/*
IPO
INPUT:
        Get userName and password form user
Processes:
        If usereName and password is correct then login sucessful
      
        
OUTPUT :
        Login sucessful
        
EDGES:
        If !userName then user name not found
        If !password then Wrong password
        If both empty "Both filed is empty"

Pseudo-code:
    Get userName and password form user

    IF UserName and Password is empty 
        SHOW "Both filed is empty"
        STOP;
    IF !username
        SHOW "User name not found"
        STOP;
    IF !password 
        SHOW "Wrong password"
        STOP;
    ELSE
        IF userName === "name" && password ==="userPassword"
        SHOW "Login sucessfully"
        STOP;

*/

function loginValidator() {
    let entername = prompt("Enter userName")
    let userPassword = prompt("Enter password")

    const usereName = "sundar"
    const password = "1234"

    if (entername === "" && userPassword === "") {
        console.log("Both filed is empty")
        return
    }
    if (entername != usereName) {
        console.log("user name not found")
        return
    }
    if (userPassword != password) {
        console.log("Wrong password")
        return
    }
    else {
        if (entername === usereName && userPassword === password) {
            console.log("Logon sucessful")
            return
        }
    }
}

loginValidator();