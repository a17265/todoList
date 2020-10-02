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
		var task_name;
		for(var i=0;i<items.length;i++){
			task_name = items[i].task_name;
			itemsBox.appendChild(createTaskElement(task_name));
		}
		console.log("rended");
	}
}

function createTaskElement(task_name){
	var elInput = document.createElement("input");
	var elSpan = document.createElement("span");
	var elLabel = document.createElement("label");
	var elLi = document.createElement("li");
	elInput.type = "checkbox";
	elSpan.innerText = task_name;
	elLabel.appendChild(elInput);
	elLabel.appendChild(elSpan);
	elLi.appendChild(elLabel);
	return elLi;
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