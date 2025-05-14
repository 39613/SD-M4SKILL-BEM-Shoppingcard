const ShopAmount = document.getElementById("shoppingCart__amount");
const ShopButton1 = document.getElementById("shop__button1");
const ShopButton2 = document.getElementById("shop__button2");
const ShopButtonRemove1 = document.getElementById("shop__button-remove1");
const ShopButtonRemove2 = document.getElementById("shop__button-remove2");


let amount = 0;

ShopButton1.onclick = function () { func1() };
ShopButton2.onclick = function () { func1() };
ShopButtonRemove1.onclick = function () { func2() };
ShopButtonRemove2.onclick = function () { func2() };




function func1() {
    amount++;
    ShopAmount.innerText = amount;
    if (amount === 0) {
        ShopAmount.classList.remove("DisplayShow");
        ShopAmount.classList.add("DisplayHide");
    }
    else {
        ShopAmount.classList.remove("DisplayHide");
        ShopAmount.classList.add("DisplayShow");
    }
    if (amount > 9) {
        ShopAmount.innerText = "9+";
        ShopAmount.classList.remove("DisplayShow");
        ShopAmount.classList.add("DisplayShow9");
        amount = 9
    }
};

function func2() {
    console.log(amount)
    amount--;
    ShopAmount.innerText = amount;
    if (amount <= 0) {
        amount = 0
        ShopAmount.innerText = amount;
        ShopAmount.classList.add("DisplayHide");
    }
    if(amount < 9){
        ShopAmount.classList.remove("DisplayShow9");
        ShopAmount.classList.add("DisplayShow");
    }    
}

if (amount === 0) {
    ShopAmount.classList.remove("DisplayShow");
    ShopAmount.className = "DisplayHide";
}
else {
    ShopAmount.classList.remove("DisplayHide");
    ShopAmount.className = "DisplayShow";
}