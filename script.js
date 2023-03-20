const addForm = document.getElementById("addForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressList = document.getElementById("addressList");

let contacts = [];

addForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const contact = {
		name: nameInput.value,
		email: emailInput.value,
		phone: phoneInput.value
	};
	contacts.push(contact);
	render();
	addForm.reset();
});

function render() {
	addressList.innerHTML = "";
	for (let i = 0; i < contacts.length; i++) {
		const contact = contacts[i];
		const li = document.createElement("li");
		li.innerHTML = `
			<h2>${contact.name}</h2>
			<p>${contact.email}</p>
			<p>${contact.phone}</p>
			<button onclick="deleteContact(${i})">Delete</button>
		`;
		addressList.appendChild(li);
	}
}

function deleteContact(index) {
	contacts.splice(index, 1);
	render();
}