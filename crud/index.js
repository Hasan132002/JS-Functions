// Base class for CRUD operations
class CrudService {
    constructor() {
      this.items = [];
    }
  
    create(item) {
      this.items.push(item);
    }
  
    read() {
      return this.items;
    }
  
    update(itemId, newItem) {
      const index = this.items.findIndex(item => item.id === itemId);
      if (index !== -1) {
        this.items[index] = newItem;
      }
    }
  
    delete(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    }
  }
  
  // Derived class for managing items
  class ItemService extends CrudService {
    constructor() {
      super();
      this.itemIdCounter = 1;
    }
  
    createItem(name, description) {
      const newItem = {
        id: this.itemIdCounter++,
        name,
        description,
      };
      this.create(newItem);
    }
  }
  
  const itemService = new ItemService();
  
  function renderItems() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';
  
    const items = itemService.read();
    if (items.length === 0) {
      outputDiv.innerHTML = '<p>No items available.</p>';
    } else {
      const ul = document.createElement('ul');
      items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ID:</strong> ${item.id}, <strong>Name:</strong> ${item.name}, <strong>Description:</strong> ${item.description} <button onclick="showUpdateForm(${item.id})">Update</button> <button onclick="deleteItem(${item.id})">Delete</button>`;
        ul.appendChild(li);
      });
      outputDiv.appendChild(ul);
    }
  }
  
  function showCreateForm() {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '<h2>Add New Item</h2>';
    formContainer.innerHTML += '<label for="name">Name:</label> <input type="text" id="name" required>';
    formContainer.innerHTML += '<label for="description">Description:</label> <input type="text" id="description" required>';
    formContainer.innerHTML += '<button onclick="createItem()">Add Item</button> <button onclick="hideForm()">Cancel</button>';
    formContainer.style.display = 'block';
  }
  
  function createItem() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    itemService.createItem(name, description);
    renderItems();
    hideForm();
  }
  
  function showUpdateForm(itemId) {
    const formContainer = document.getElementById('formContainer');
    const itemToUpdate = itemService.read().find(item => item.id === itemId);
    if (itemToUpdate) {
      formContainer.innerHTML = `<h2>Edit Item ${itemId}</h2>`;
      formContainer.innerHTML += `<label for="name">Name:</label> <input type="text" id="updateName" value="${itemToUpdate.name}" required>`;
      formContainer.innerHTML += `<label for="description">Description:</label> <input type="text" id="updateDescription" value="${itemToUpdate.description}" required>`;
      formContainer.innerHTML += `<button onclick="updateItem(${itemId})">Update Item</button> <button onclick="hideForm()">Cancel</button>`;
      formContainer.style.display = 'block';
    }
  }
  
  function updateItem(itemId) {
    const updatedName = document.getElementById('updateName').value;
    const updatedDescription = document.getElementById('updateDescription').value;
    const updatedItem = {
      id: itemId,
      name: updatedName,
      description: updatedDescription,
    };
    itemService.update(itemId, updatedItem);
    renderItems();
    hideForm();
  }
  
  function deleteItem(itemId) {
    itemService.delete(itemId);
    renderItems();
  }
  
  function hideForm() {
    const formContainer = document.getElementById('formContainer');
    formContainer.style.display = 'none';
  }
  
  // Initial rendering
  renderItems();
  