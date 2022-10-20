/*async function load() {
    const productBox = document.getElementById("all-products");
    const chats = await fetch("most.json");
    const data = await chats.json();
    for (i = 0; i < data.length; i++) {
        productBox.innerHTML += `
        <div class="product-box">
        <div class="product-img">
            <i class="fa-regular fa-heart"></i>
            <img src="${data[i].picture}">
        </div>
        <div class="product-info">
            <h4>${data[i].name}</h4>
            <p class="price">${data[i].prices}</p>
        </div>
        <span class="addbtn">Səbətə At</span>
     </div>
     </div>
  `

}
}
document.addEventListener("DOMContentLoaded",load)*/



/* var buttons=await document.querySelectorAll(".addbtn")
buttons.forEach(element => {
    element.addEventListener("click",function(){
        var price=element.parentElement.getElementsByClassName("price")[0].textContent
        var name=element.parentElement.getElementsByTagName("h4")[0].textContent
        var img=element.parentElement.getElementsByTagName("img")[0].src
        element.innerHTML="Səbətdə";
        element.setAttribute("disabled","disabled")
        element.style.opacity=".5"
        addItem(price,name,img)
    })
});*/

/*function addItem(price,name,img){
    var basket=document.getElementById("basket-container")
    basket.innerHTML+=`
    <div class="item">
    <div class="img-box">
        <img src="${img}">
    </div>
    <div class="info">
        <h4>${name}</h4>
        <h5>${price}</h5>
    </div>
    <input type="number" value="1" min="1" class="say">
    <i class="fa-solid fa-x remove"></i>
</div>
   
    `
detail()
}*/
