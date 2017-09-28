var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		// Total count of contacts should be 4.
		element(by.css('button')).click()
		var contacts = element.all(by.repeater('contact in vm.contacts'))
		expect(contacts.count()).toEqual(4)

		// The name of the second contact should be 'Tim'.
		expect(contacts.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim')

		// The phone number of the second contact should be '3934203242'.
		expect(contacts.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242')

	});
});
