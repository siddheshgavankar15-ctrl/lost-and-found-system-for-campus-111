// Get item id from URL
const params = new URLSearchParams(window.location.search);
const itemId = params.get("id");

// Dummy data
const items = {
  1: { name: "Item 1", description: "This is the first item." },
  2: { name: "Item 2", description: "This is the second item." },
  3: { name: "Item 3", description: "This is the third item." },
};

// If we are on itemDetail.html
if (document.getElementById("itemDetail")) {
  if (itemId && items[itemId]) {
    const item = items[itemId];
    document.getElementById("itemDetail").innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
    `;
  } else {
    document.getElementById("itemDetail").innerHTML = "<p>Item not found.</p>";
  }
}