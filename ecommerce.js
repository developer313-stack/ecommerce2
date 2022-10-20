var box=document.getElementById("all-products");
fetch("most.json")
.then(function(response){
    return response.json
}
)
.then(function(data){
    for(i=0;i<=data.length;i++){
        box.innerHTML+=`
        <div class="product-box">
        <div class="product-img">
            <img src="${data[i].picture}">
        </div>
        <div class="product-info">
            <h4>${data[i].name}</h4>
            <p class="price">${data[i].prices}</p>
        </div>
        <span class="addbtn">Sebete At</span>
     </div>
     </div>
        `
        
    }
})
