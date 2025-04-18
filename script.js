// Change the text content of the paragraph
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const  description = document.getElementById('description');
  description.textContent = 'You clicked the button and changed this text!';
});

// Modify the CSS style of the box
document.getElementById('styleBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.style.backgroundColor = 'coral';
  box.style.borderRadius = '10px';
});


// Add a new item to the list
document.getElementById("addItemBtn").addEventListener("click", () => {
const itemList = document.getElementById("itemList");
const newItem = document.createElement("li");
newItem.textContent = `Item ${itemList.children.length + 1}`;
itemList.appendChild(newItem);
});

