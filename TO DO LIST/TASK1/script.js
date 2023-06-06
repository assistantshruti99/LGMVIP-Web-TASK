let insert=document.getElementById("input");
let text=document.querySelector(".text");
function Add()
{
   if( insert.value=="")
   {
    alert("Please enter task")
   }
   else
   {
    let newElement=document.createElement("ul");
    newElement.innerHTML=`${insert.value}  <i class="fa fa-trash w3-xxlarge"></i> `;
    text.appendChild(newElement);
    insert.value="";
    newElement.querySelector("i").addEventListener("click",remove);
   
    function remove()
        {
            newElement.remove()
        }
      
    
   }
}