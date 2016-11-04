"use strict";

/*EMPLOYEES CONSTRUCTOR*/

var scientistArray = [];
var operationsArray = [];

function Employee() {
	this.firstName = null;
	this.lastName = null;
	this.department = null;
}

function Scientist() {
	this.role = null;
	this.field = null;
}
Scientist.prototype = new Employee();

function Operations() {
	this.role = null;
	this.responsibility = null;
}

Operations.prototype = new Employee();

/*DEPARTMENTS CONSTRUCTOR*/

function Department() {
	this.departmentName = null;
}

function Headquarters() {
	this.location = null;
}

Headquarters.prototype = new Department();

function FieldOffice() {
	this.location = null;
}

FieldOffice.prototype = new Department();

/*LOCATION PROPERTIES*/

var headquarters = new Headquarters();
headquarters.location = "Nashville";

var mars = new FieldOffice();
mars.location = " Syrtis Major Planum";
mars.departmentName = "Science Goings";

var moon = new FieldOffice();
moon.location = "Alphonsus crater";
moon.departmentName = "Sceince Comings";

/*EMPLOYEE CREATION*/

var emp1 = new Scientist();
emp1.firstName = "Bill";
emp1.lastName = "Nye";
emp1.role = "Scientist";
emp1.field = "Research";
emp1.department = mars;


var emp2 = new Scientist();
emp2.firstName = "Stephen";
emp2.lastName = "Hawking";
emp2.role = "Scientist";
emp2.field = "Research";
emp2.department = moon;

var emp3 = new Operations();
emp3.firstName = "Mack";
emp3.lastName = "Theknife";
emp3.role = "Operations";
emp3.responsibility = "Development";
emp3.departmentName = headquarters;

var emp4 = new Operations();
emp4.firstName = "Sam";
emp4.lastName = "Stone";
emp4.role = "Operations";
emp4.responsibility = "Development";
emp4.departmentName = headquarters;


scientistArray.push(emp1,emp2);
operationsArray.push(emp3,emp4);




















