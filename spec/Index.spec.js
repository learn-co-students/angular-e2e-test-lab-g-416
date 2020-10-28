var path = require('path');

describe('angularjs homepage todo list', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');

		element(by.css('.button')).click();

		var todoList = element.all(by.repeater('contact in vm.contacts'));
		expect(todoList.count()).toEqual(4);

		expect(todoList.get(1).element(by.model('contact.name')).getAttribute('value')).toBe('Tim');
		expect(todoList.get(1).element(by.model('contact.phone')).getAttribute('value')).toBe('3934203242');
	});
});