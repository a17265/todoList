var inputAdd = document.getElementById("add");
var itemsBox = document.getElementById("items");
var emptyHolder = document.getElementById("empty");
var items = [];
itemsBox.style = "display: none;";




function renderItems(){
	if(items.length > 0){
		itemsBox.style = "display: block;";
		emptyHolder.style = "display: none;";
		itemsBox.innerHTML = "";
		for(var i=0;i<items.length;i++){
			itemsBox.innerHTML += '<li><label><input type="checkbox"><span> '+items[i].task_name+'</span></label></li>';
		}
		console.log("rended");
	}
}

function getTaskName(){
	if(inputAdd.value.trim().length > 0){
		return inputAdd.value;
	}
	else{
		return false;
	}
}

inputAdd.addEventListener("keydown", function(e){
	if(e.key == "Enter"){
		var task_name = getTaskName();
		items.push({
			"task_name": task_name,
			"checked": false
		});
		itemsBox.dispatchEvent(new Event("new_item"));
		inputAdd.value = "";
	}
}, false);

itemsBox.addEventListener("new_item", renderItems, false);


