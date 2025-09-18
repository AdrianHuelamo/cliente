let spending = parseInt(prompt("Enter your spending: "));

if (spending <= 25){
    alert("Your category is Standard");  
} else if (spending >25 && spending <=50){
    alert("Your category is BRONZE");
} else if (spending >50 && spending <100){
    alert("Your category is SILVER"); 
} else if (spending >=100){
    alert("Your category is GOLD");
} else{
    alert("no valid");
}