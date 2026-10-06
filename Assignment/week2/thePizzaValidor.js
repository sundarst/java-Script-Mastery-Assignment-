/*
IPO
INPUT
    Get from user
        Size: small 199,Medium 299, Larger 399
        Topping: 40 per topping max 5 toppings
        Delivery: pickup free or delivery Rs 40 free over 500
Processes
        take size using look up object
        toppingCount =0
        totalToppingAmt= toppingCount*40 = 40 (1*40) max 5
        size+totalToppingAmt >=500 (delivery free)
        else delivery fee=40
Output
        base price ( based on size)
        topping cost = totalToppingAmt
        delivery fee
        Finaltotal price
Edges
        invalid size, more than 5 toppings,
        negative topping count,invalid delivery type
-----------------------------------------------------------------
Pseudo-code:

        Get size,Topping,Delivery from user
DEFINE PizzaSize:
        small ->199
        Medium -> 299
        Larger -> 399
DEFINE Toopoing
    ToppingCount=0;
        Topping1 
        Topping2
        Topping3
        Topping4
        Topping5
        Topping6
    	
totalToppingAmt =ToppingCount*40	

totalPrice= Size+totalToppingAmt

IF size not in pizzaSize
    SHOW "invalid size"
    return;
IF toppingCount > 5
    SHOW "Not more than 5 toppings"
    return;
IF toppingCount <0
    SHOW "No negative topping count"
    return;
	
(In my code delivery type auto calculate)

// IF totalPrice >=500
//     SHOW "Free Delivery"
//     return
// Else 
//     Delivery free =40
//     return

	
SET pizzaPrice = pizzaSize[size]

    IF(toppingCount=0;toppingCount<=5;toppingCount++)
    {
        toppingCount++
        totalToppingAmt = toppingCount*40
    }
    else
    {
        SHOW "Not more than 5 toppings"
    }
	
    Calculate totalPrice = pizzaPrice+totalToppingAmt
	
IF totalPrice >=500
    deliveryfree =0;
	
ELSE 
    deliveryfree =40;

SHOW 
        base price ( based on size)
        topping cost = totalToppingAmt
        delivery fee
        Finaltotal price
------------------------------------------------------

*/

//Code :


function pizzaValidor() {

    let size = prompt("Small,Medium,Larger").toLowerCase();
    let toppingCount = Number(prompt("Max 5 toppings"));

    let deliveryfree = 0;

    let pizzaSize = {
        small: 199,
        medium: 299,
        larger: 399,
    }

    let totalToppingAmt = 0;
    let totalPrice = 0;

    if (!pizzaSize[size]) {
        console.log("Invalid Size")
        return;
    }

    if (toppingCount > 5) {
        console.log("Not more than 5 topping")
        return;
    }

    // if (toppingCount < 0) {
    //     console.log("No Negative topping count")
    // }


    let pizzaPrice = pizzaSize[size];

    //calculation
    // for (let i = 0; topping <= 5; i++)

    //     if (topping[i].checked) {
    //         toppingCount++;
    //     }

    if (toppingCount <= 5) {
        totalToppingAmt = toppingCount * 40;
    }
    else {
        console.log("Not More than 5 topping")
    }

    //



    if (totalPrice >= 500) {
        console.log("Free Delivery")
        totalPrice = pizzaPrice + totalToppingAmt;
        return;
    }
    else {
        console.log("Delvery free 40");
        deliveryfree = 40;
        totalPrice = pizzaPrice + totalToppingAmt + deliveryfree;

    }


    console.log("------------------------------------------")
    console.log("Pizza Size: ", size, "Price", pizzaSize[size])
    console.log("Topping Cost", "Topping Count", toppingCount, "Price", totalToppingAmt);
    console.log("Delivery Free", deliveryfree)
    console.log("Final Total price", totalPrice)


}

pizzaValidor();