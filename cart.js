
let items=[];
let cost=0;

function add(a,b){
    items.push({a,b});
    
    const cart=document.getElementById("list-item");
    const totalcost=document.getElementById("total");

    cart.innerHTML="";
    items.forEach(value =>{
        let list=document.createElement('li');
        
        list.innerHTML=(`${value.a}-${value.b} <ion-icon name="exit" id=exit onclick="exit()"></ion-icon>`);
        cart.appendChild(list);
        cost=cost+value.b;
    });
    totalcost.textContent=("Total Cost: $"+cost);
  
}

document.getElementById("reload")=addEventListener("click",() => {
    location.reload();
});


