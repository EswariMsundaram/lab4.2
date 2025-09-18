/*Task 1: Array Manipulation Basics*/

let shoppingList = [];

const addItem1=(item)=>shoppingList.push(item);

addItem1("onion");
addItem1("tomato");
addItem1("potato");
addItem1("tomato");
addItem1("pasta");
addItem1("bread");

const removeLastItem = () => shoppingList.pop();
removeLastItem();

function displayList() {
  console.log(shoppingList);
}
displayList();

/*Task 2: Filter and Search an Array*/

function addItem(item) {
  let hasItem;
  for (let product of shoppingList) {
    if (product == item) {
      hasItem = true;
    }
  }
  if (!hasItem) {
    shoppingList.push(item);
  }
}

function filterItems(searchTerm){
    const result = shoppingList.filter((item) => item.includes(searchTerm))
    console.log(result);
}
filterItems("tomato")



/*Task 3: Render the List in the Browser*/

//select or query elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeButton = document.getElementById("remove-btn");


function addAndDisplayItems() {
  // add the item to the array
  shoppingList.push(input.value);

  // create a new element with the text
  let li = document.createElement("li");

  //update the element with the text
  li.textContent = input.value;

  // append the new element to the ul
  itemsUl.appendChild(li);

  //clears the append value
  input.value = " ";
}
addButton.addEventListener("click", addAndDisplayItems);
removeButton.addEventListener("click", removeLastItem1);

function removeLastItem1() {
  //remove the last item in the array
  shoppingList.pop();

  //remove the last item from the ul
  itemsUl.lastElementChild.remove();
  console.log(shoppingList);
}
