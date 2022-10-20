var removeButtons=document.getElementsByClassName("fa-x");
for(i=0;i<removeButtons.length;i++){
    var button=removeButtons[i];
    button.addEventListener("click",function(event){
        var buttonClicked=event.target
       buttonClicked.parentElement.parentElement.remove()
    })
}