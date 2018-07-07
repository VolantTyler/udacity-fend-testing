function AddressBook() {
    this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(num) {
    return this.contacts[num];
}

AddressBook.prototype.deleteContact = function(num) {
    this.contacts.splice(num, 1);
}