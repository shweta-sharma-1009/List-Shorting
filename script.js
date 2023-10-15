// Function to generate a random list of 10 elements
function generateRandomList() {
    const list = document.getElementById('list');
    list.innerHTML = ''; // Clear the existing list

    const randomList = [];
    for (let i = 1; i <= 10; i++) {
        const randomValue = Math.floor(Math.random() * 100); // Change the range as needed
        randomList.push(randomValue);
    }

    randomList.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        list.appendChild(li);
    });
}

// Function to sort the list
function sortList() {
    const list = document.getElementById('list');
    const items = Array.from(list.getElementsByTagName('li'));

    items.sort((a, b) => {
        const valueA = parseInt(a.textContent);
        const valueB = parseInt(b.textContent);
        return valueA - valueB;
    });

    // Reorder the list items in the DOM
    items.forEach(item => list.appendChild(item));
}

// Event listener for the sort button
const sortButton = document.getElementById('sortButton');
sortButton.addEventListener('click', sortList);

// Generate a random list when the page loads
generateRandomList();
