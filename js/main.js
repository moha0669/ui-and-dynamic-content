(function () {
    
    var btn = document.getElementById("add-item");
    
    var ul = document.querySelector(".sea-food-list");
    
    var list_item;
    
    function deleteItem(ev) {
        ev.preventDefault();
        
        list_item = ev.target;
        
        ul.removeChild(list_item);
    }
    
    function addItem(ev) {
        
        ev.preventDefault();
        
        list_item = document.createElement("li");
        
        list_item.innerHTML = prompt("Please enter your dish here:");

        if (list_item.innerHTML.trim() != "") {
            ul.appendChild(list_item);
            
            list_item.addEventListener("click", deleteItem);
        }
        
     }
    
    btn.addEventListener("click", addItem);

}());




