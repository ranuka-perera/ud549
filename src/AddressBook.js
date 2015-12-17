function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
};
AddressBook.prototype.getInitialContacts = function(cb) {
    var self = this;
    
    setTimeout(function() {
        self.initialComplete = true;
        if (cb) {
            return cb();
        }
    }, 3);
}
AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}
AddressBook.prototype.getContact = function (contact_number) {
    return this.contacts[contact_number];
}
AddressBook.prototype.deleteContact = function (contact_number) {
    this.contacts.splice(contact_number, 1);
}
