class product {
    constructor(id, name, price,imgUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
    }

}


class ShoppingCartItem {

constructor(product ,quantity){
this.product=product;
this.quantity = quantity;

}

calculateTotalPrice(){
return this.product.price * this.quantity;
}


}


class ShoppingCard{

constructor(){
    this.ShoppingCardArray =  [];

}

TotalItems(){
return this.ShoppingCardArray.length;

}

AddItem(item){
    this.ShoppingCardArray.push(item);

}


RemoveItem(id){
    this.ShoppingCardArray = this.ShoppingCardArray.filter(item=>item.product.id!=id);

}

DisplayItem(item){
    const shoppingCardList= document.getElementsByClassName("cardsList");

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML=` <div class="card mb-3" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src=${item.product.imgUrl} alt="}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${item.product.name}</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in .
                    </p>
                    <i class="fas fa-plus-circle"></i>
                    <span class="qute">0</span>
                    <i class="fas fa-minus-circle"></i>
                    <i class="fas fa-trash-alt"></i>
                    <i class="fas fa-heart"></i>
                    <span class="unitt-price">${item.product.price}</span>
                    <span>$</span>
                  </div>
                </div>
              </div>
            </div> `
            shoppingCardList.appendChild(card);

    
}

refreshShoppingCard() {
    const todoListElement = document.getElementById("CardList");
    todoListElement.innerHTML = "";
    this.ShoppingCardArray.forEach((element) => this.DisplayItem(element));
  }




}

// Create ShoppingCard instance
const ShoppingCard = new ShoppingCard();

// Example function to add a ToDo when the "Add" button is clicked
function addTodo() {
  const inputElement = document.getElementById("newTodo");
  const todoText = inputElement.value;

  if (todoText.trim() !== "") {
    const newTodo = todoList.addTodo(todoText);
    todoList.displayTodo(newTodo);
    inputElement.value = "";
  }
}

// Example function to delete a ToDo when the "Delete" button is clicked
function deleteTodo(id) {
  todoList.deleteTodo(id);
  todoList.refreshTodoList();
}


