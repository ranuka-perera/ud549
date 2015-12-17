describe('Address Book', function() {
    var addressBook, thisContact;
    
    beforeEach(function() {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });
    it('should be able to add a new contact', function() {

        addressBook.addContact(thisContact);
        
        expect(addressBook.getContact(0)).toBe(thisContact);
    });
    it('should be able to delete a contact', function() {
        var otherContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.addContact(otherContact);
        
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).toBe(otherContact);
        
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
