function commentApp(){
	var item = document.getElementById("nameInput").value
	var item2 = document.getElementById("comment").value
	var text = document.createTextNode(item)
	var text2 = document.createTextNode(item2)
	var newItem = document.createElement("h1")
	var newItem2 = document.createElement("p")
	newItem.appendChild(text)
	newItem2.appendChild(text2)
	document.getElementById("todo").appendChild(newItem)
	document.getElementById("todo").appendChild(newItem2)
}
