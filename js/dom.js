"use strict";

/*OUTPUT TO DOM*/

$.each(scientistArray,function(index,value) {
	$("#output").append(`<div style="text-align: center"><p>${value.firstName} ${value.lastName}: works as a ${value.role} in the ${value.department.location} field office specializing in ${value.department.departmentName} and is responsible for ${value.field}.</p></div></div>`);
});


$.each(operationsArray,function(index,value) {
	$("#output").append(`<div style="text-align: center"><p>${value.firstName} ${value.lastName}: works in ${value.role} at our ${value.departmentName.location} Headquarters specializing in ${value.responsibility}.</p></div></div>`);
});

