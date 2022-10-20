const cartBtn=document.querySelector(".addbtn");
const productBox=document.getElementById("all-products");
const cartContent=document.getElementById("basket-container");
let cart=[];
let buttonsDOM=[];
console.log(cartBtn)

class Products{
async getProducts(){
    try{
let result=await fetch("most.json");
let data=await result.json();
let products=data;
return products;
    }catch(error){
        console.log(error);
    }
}
}
class UI{
displayProducts(products){
    let area=document.getElementById("all-products")
    let result="";
    products.forEach(item => {
        area.innerHTML+=`
        <div class="product-box">
        <div class="product-img">
            <i class="fa-regular fa-heart"></i>
            <img src="${item.picture}">
        </div>
        <div class="product-info">
            <h4>${item.name}</h4>
            <p class="price">${item.prices}</p>
        </div>
        <span class="addbtn" data-id=${item.id}>Səbətə At</span>
     </div>
     </div>
    
        `
    })
    
}
getBagButtons(){
    const buttons=[...document.querySelectorAll(".addbtn")];
buttonsDOM=buttons;
buttons.forEach(button=>{
    let id=button.dataset.value;
    let inCart=cart.find(item=>item.id===id);
    if(inCart){
        button.setAttribute("disabled","disabled");
        button.opacity=".3"
    }else{
        button.addEventListener("click",event=>{
event.target.disabled=true;
event.target.style.opacity=".3";
let cartItem={...Storage.getProduct(id,item),amount:1};
cart=[...cart,cartItem];
Storage.saveCart(cart);
this.saveCartValues(cart);
this.addCartItem(cartItem);
        })
    }
})
}
saveCartValues(cart){
    let tempTotal=0;
    let itemsTotal=0;
    cart.map(item=>{
        tempTotal+=item.price * item.amount;
        itemsTotal+=item.amount;
    });
}
addCartItem(item){
    const basket =document.getElementById("basket-container");


basket.innerHTML+=`
<div class="basket-product">
<img src="${item.picture}">
<div class="basket-info">
    <h4>${cart.name}</h4>
    <h6>${item.prices}</h6>
</div>
<i class="fa-solid fa-x "></i>
</div>
`;

console.log(item.id)

}
}
class Storage{
static saveProducts(products){
    localStorage.setItem("products",JSON.stringify(products))
}
static getProduct(id,item){
    let products=JSON.parse(localStorage.getItem("products"));
let item =products.find(product=>product.id===id
)
}
static saveCart(cart){
    localStorage.setItem("cart",JSON.stringify(cart))
}
}
document.addEventListener("DOMContentLoaded",()=>{
    const ui=new UI();
const products=new Products();
products.getProducts().then(products=>{
    ui.displayProducts(products);
    Storage.saveProducts(products);
}).then(()=>{
    ui.getBagButtons(products);
})
})