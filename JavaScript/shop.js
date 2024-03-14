let products=[{
  "name":"Green Tea","quantity":0,"unit":50.00
},

{
  "name":"Herbal Tea","quantity":0,"unit":35.00
},

{
  "name":"Black Tea","quantity":0,"unit":49.00
},

{
  "name":"Golden Tea","quantity":0,"unit":37.00
},

{
  "name":"Ginger", "quantity":0,"unit":21.00
},

{
  "name":"Turmeric","quantity":0,"unit":29.00
},

{
  "name":"Cinnamon","quantity":0,"unit":25.00
},

{
  "name":"Cloves","quantity":0,"unit":41.00
},

{
  "name":"Men's Batik Shirt", "quantity":0,"unit":105.00
},

{
  "name":"Men's Batik Sarong","quantity":0,"unit":99.00
},

{
  "name":"Women's Batik Saree","quantity":0,"unit":151.00
},

{
  "name":"Women's Batik Dress","quantity":0,"unit":89.00
},

{
  "name":"Traditional Mask (Gini Raksha)", "quantity":0,"unit":75.00
},

{
  "name":"Traditional Mask (Naga Raksha)","quantity":0,"unit":72.00
},

{
  "name":"Traditional Mask (Dala Gara)","quantity":0,"unit":74.00
},

{
  "name":"Traditional Mask (Sanni Face)","quantity":0,"unit":59.00
},
            
];

function calculateTotal(){ 
  let total=0;
  for(let i =0; i<products.length; i++){
      total+=products[i]["quantity"]*products[i]["unit"];
  }

  document.getElementById("total").innerHTML="Total: $ "+total;
  return total;
} 

let cards=document.getElementsByClassName("plus");
for(let i=0; i<cards.length;i++){
  cards[i].addEventListener("click",function(){
      products[i]["quantity"]++;
  document.getElementsByClassName("quantity")[i].innerHTML=products[i]["quantity"];
  calculateTotal();});

  document.getElementsByClassName("minus")[i].addEventListener("click",function(){
  if(products[i]["quantity"]>0){
      products[i]["quantity"]--;
  }    
  document.getElementsByClassName("quantity")[i].innerHTML=products[i]["quantity"];
  calculateTotal();});
  
}

function getfinal(){
  let first=document.products.fname.value.trim();
  let email=document.products.email.value.trim();

  document.getElementById('shop').style.display = 'none';
  document.getElementById('final').style.display = 'block';

  for(let i =0; i<products.length; i++){
      if(products[i]['quantity']>0){
          let price=products[i]["quantity"]*products[i]["unit"];
          document.getElementsByClassName("finalitem")[i].style.display="inline-block";
          document.getElementsByClassName("finalquantity")[i].innerHTML="Quantity: "+products[i]["quantity"];
          document.getElementsByClassName("finalcost")[i].innerHTML="Price: $ "+price;
          document.final.name.value = first;
          document.final.email.value = email;
      }
  }
  document.getElementById("final-total").innerHTML= "$ "+calculateTotal();
}

//Validating the form
document.getElementById('purchase').addEventListener('click', function (e) {
  e.preventDefault();
  validateform();
});

function validateform(){
  
  let first=document.products.fname.value.trim();
  let address=document.products.address.value.trim();
  let email=document.products.email.value.trim();
  let comments=document.products.comments.value.trim();
  
  if(first===""){
      alert("Name is required.");
  }else if(address===""){
    alert("Address is required.");
  }else if(email===""){
      alert("Email is required.");
  }else if(comments===""){
    alert("Please comment about our goods.");
  }else{
      getfinal();
  }
}


