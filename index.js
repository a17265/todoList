var inputAdd = document.getElementById("add");
var itemsBox = document.getElementById("items");
var emptyHolder = document.getElementById("empty");
var items = [];
var itemBoxStatus = "empty"; // empty | filled

function renderItems(){
	if(items.length > 0){
		itemsBox.innerHTML = "";
		var task_name;
		itemBoxStatus = "filled";
		manageItemBoxStatus();
		for(var i=0;i<items.length;i++){
			task_name = items[i].task_name;
			itemsBox.appendChild(createTaskElement(task_name));
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


function manageItemBoxStatus(){
	if(itemBoxStatus == "empty"){
		itemsBox.style = "display: none;";
		emptyHolder.style = "display: block;";
	}
	else{
		itemsBox.style = "display: block;";
		emptyHolder.style = "display: none;";
	}
}

inputAdd.addEventListener("keydown", function(e){
	if(e.key == "Enter"){
		var task_name = getTaskName();
		items.push({
			"task_name": task_name,
			"checked": false
		});
		itemsBox.dispatchEvent(new Event("itemsHasChanged"));
		inputAdd.value = "";
	}
}, false);

itemsBox.addEventListener("itemsHasChanged", renderItems, false);
manageItemBoxStatus();