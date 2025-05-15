const ShopAmount = document.getElementById("shoppingCart__amount");
const ShopButton1 = document.getElementById("shop__button1");
const ShopButton2 = document.getElementById("shop__button2");
const ShopButtonRemove1 = document.getElementById("shop__button-remove1");
const ShopButtonRemove2 = document.getElementById("shop__button-remove2");
const product1Title = document.getElementById("product1__titel");
const product2Title = document.getElementById("product2__titel");
const product3Title = document.getElementById("product3__titel");
const product1Beschrijving = document.getElementById("product1__beschrijving");
const product2Beschrijving = document.getElementById("product2__beschrijving");
const product3Beschrijving = document.getElementById("product3__beschrijving");
const product1Prijs = document.getElementById("product1__prijs");
const product2Prijs = document.getElementById("product2__prijs");
const product3Prijs = document.getElementById("product3__prijs");
const product1Img = document.getElementById("product1__image");
const product2Img = document.getElementById("product2__image");
const product3Img = document.getElementById("product3__image");


const Producten =[
    ["The big 3 poster", 25, src="IMG/big3_poster_product.webp", "Poster met Goku, Luffy, Ichigo en Naruto", false],
    ["Jujutsu Kaisen Poster", 30, src="IMG/jjk_poster_product.webp", "Poster van de anime Jujutsu Kaisen", true],
    ["Hunter x Hunter", 30, src="IMG/HxH_poster_product.webp", "Poster van de anime Hunter x Hunter", true]
]


for(i = 0; i < 1; i++){
product1Title.innerText = Producten[i][0]
product1Prijs.innerText = "€" + Producten[i][1]
product1Img.src = Producten[i][2]
product1Beschrijving.innerText = Producten[i][3]

}

for(i = 0; i < 2; i++){
product2Title.innerText = Producten[i][0]
product2Prijs.innerText = "€" +  Producten[i][1]
product2Img.src = Producten[i][2]
product2Beschrijving.innerText = Producten[i][3]
}

for(i = 0; i < 3; i++){
product3Title.innerText = Producten[i][0]
product3Prijs.innerText = "€" +  Producten[i][1]
product3Img.src = Producten[i][2]
product3Beschrijving.innerText = Producten[i][3]
}
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