async function load() {
    const productBox = document.getElementById("all-products");
      var result=await fetch("most.json")
      var response=await result.json()
      var data=response;
           for (i = 0; i < data.length; i++) {
           productBox.innerHTML += `
           <div class="product-box" id=${data[i].id}>
           <div class="product-img" id="${data[i].id}">
               <i class="fa-regular fa-heart" id=${data[i].id}></i>
               <img class="item-img" src="${data[i].picture}">
           </div>
           <div class="product-info">
               <h4 class="item-name">${data[i].name}</h4>
               <p class="price">${data[i].prices}</p>
           </div>
           <span class="addbtn">Səbətə At</span>
        </div>
        </div>
     `
       }
       var mostSales=document.getElementById("product-container")
       var product=await fetch("product.json")
       var res=await product.json()
       var info=res
       for (i = 0; i < info.length; i++) {
        mostSales.innerHTML += `
        <div class="product-box" id=${info[i].id}>
        <div class="product-img" id="${info[i].id}">
            <i class="fa-regular fa-heart" id=${data[i].id}></i>
            <img class="item-img" src="${info[i].picture}">
        </div>
        <div class="product-info">
            <h4 class="item-name">${info[i].name}</h4>
            <p class="price">${info[i].prices}</p>
        </div>
        <span class="addbtn">Səbətə At</span>
     </div>
     </div>
  `
    }



var heart=document.querySelectorAll(".product-box")
var cart=[]
var cartItem=[]
heart.forEach(fav=>{
    fav.addEventListener("click",function(e){
        var id=fav.id;
      addfavorite(id,data,cart,info)
        if(e.target.className==="addbtn"){
        
        }else if(e.target.className==="fa-regular fa-heart"){
            
        }
        
        else{
            window.location.href="detail.html"
        }
    })
})



     var basketItems=document.querySelectorAll(".addbtn")
     var basket=[]
      basketItems.forEach(item=>{
          item.addEventListener("click",function(){
              var itemId=item.parentNode.id
             var itemName=item.parentNode.getElementsByClassName("item-name")[0].textContent;
              var itemPrice=item.parentNode.getElementsByClassName("price")[0].textContent;
              var itemImg=item.parentNode.getElementsByClassName("item-img")[0].src;
          item.style.opacity=".5";
          item.innerHTML="Səbətdə";
          item.style.background="black"
            addtocart(itemName,itemPrice,itemImg,itemId,item)
          })
      })
   }
   
   document.addEventListener("DOMContentLoaded",load);

   
function addtocart(itemName,itemPrice,itemImg,itemId,item){
var basket=document.getElementById("basket-container")
var box=basket.getElementsByClassName("item")[0]
    basket.innerHTML+=`
<div class="item" id="${itemId}">
<div class="img-box">
<img src="${itemImg}">
</div>
<div class="info">
<h5>${itemName}</h5>
<h4>${itemPrice}</h4>
</div/>
<input class="say" type="number" min="1" value="1">
<i class="fa-solid fa-xmark"></i>
</div>
`
}

document.addEventListener("click",function(e){
  if(e.target.className==="fa-solid fa-xmark"){
    e.target.parentElement.remove()
  }
})
document.addEventListener("click",function(e){
    if(e.target.className==="fa-regular fa-heart"){
      e.target.style.color="red";
      e.target.style.fontWeight="bolder"
    }
  })

  function find(){
    var search=document.getElementById("search")
    var itemname=document.querySelectorAll(".item-name")
for(i=0;i<itemname.length;i++){
var usertext=search.value;
  if(itemname[i].textContent.toLowerCase().startsWith(usertext)){
        itemname[i].parentElement.parentElement.style.display=""
    }else{
        itemname[i].parentElement.parentElement.style.display="none"
    }
}
    }
function addfavorite(id,data,cart,info){
    var item=data.filter(item=>item.id==id)
    var prod= info.filter(item=>item.id==id)
  cart=[item,prod]
    localStorage.setItem("favor",JSON.stringify(cart))
}
/*function singleInfo(id,cart,info){
    var item=info.filter(prod=>prod.id==id)
    cart=item
    localStorage.setItem("favor",JSON.stringify(cart))
}*/