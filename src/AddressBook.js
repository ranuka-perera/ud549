function AddressBook() {
    this.contacts = [];
};
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}
AddressBook.prototype.getContact = function (contact_number) {
    return this.contacts[contact_number];
}

