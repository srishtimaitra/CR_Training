var a=[];
function contactAdd()
{
    
    event.preventDefault();
    var name=document.getElementById("name");
    var phone= document.getElementById("phone");
    var place= document.getElementById("place");
    var contact={
        cname :name.value,
        cplace : place.value,
        cphone : phone.value
    };
    a.push(contact);
    console.log(a);
}