function getContacts() {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
}

function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function updateContactList() {
  const searchField = document.getElementById("search");
  if (searchField.value.trim() === "") {
    filterContacts("");
  }
}

function filterContacts(query) {
  const contactList = document.getElementById("contactList");
  const contacts = getContacts();
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase()) ||
      contact.phone.includes(query)
  );

  contactList.textContent = "";
  filteredContacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name}: ${contact.phone}`;

    const btnConteiner = document.createElement("div");
    btnConteiner.classList.add = "btn-conteiner";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Редагувати";
    editBtn.onclick = () => editContact(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.onclick = () => removeContact(index);

    btnConteiner.appendChild(editBtn);
    btnConteiner.appendChild(deleteBtn);
    li.appendChild(btnConteiner);
    contactList.appendChild(li);
  });
}

function addContact(name, phone) {
  const contacts = getContacts();
  contacts.push({ name, phone });
  saveContacts(contacts);
  updateContactList();
}

function removeContact(index) {
  const contacts = getContacts();
  contacts.splice(index, 1);
  saveContacts(contacts);
  updateContactList();
}

function editContact(index) {
  const contacts = getContacts();
  const contact = contacts[index];

  document.getElementById("name").value = contact.name;
  document.getElementById("phone").value = contact.phone;

  const form = document.getElementById("contactForm");
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.textContent = "Зберегти зміни";

  form.onsubmit = (event) => {
    event.preventDefault();
    contacts[index] = {
      name: document.getElementById("name").value.trim(),
      phone: document.getElementById("phone").value.trim(),
    };
    saveContacts(contacts);
    updateContactList();

    form.reset();
    submitBtn.textContent = "Додати контакт";
    form.onsubmit = addContactEvent;
  };
}

const addContactEvent = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const phoneRegex = /^\+?\d{5,}$/;
  if (!phoneRegex.test(phone)) {
    alert("Будь ласка, введіть коректний номер телефону!");
    return;
  }

  if (name && phone) {
    addContact(name, phone);
    document.getElementById("contactForm").reset();
  }
};

document.getElementById("contactForm").onsubmit = addContactEvent;
document.getElementById("search").addEventListener("input", (event) => {
  const query = event.target.value;
  filterContacts(query);
});

updateContactList();
