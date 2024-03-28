// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuContainer = document.getElementById('menu');

    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryElement = document.createElement('div');
            categoryElement.innerHTML = `<h3>${category}</h3>`;
            menuContainer.appendChild(categoryElement);

            const itemList = document.createElement('ul');
            menuContainer.appendChild(itemList);

            menu[category].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.addEventListener('click', () => addToOrder(item));
                itemList.appendChild(listItem);
            });
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById('order-items');
    const orderTotalElement = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    orderItemsList.appendChild(listItem);

    // Update total price
    const itemPrice = 10; // Assuming each item costs R10 for simplicity
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrice;
    orderTotalElement.textContent = newTotal.toFixed(2); // Display total with two decimal places
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);