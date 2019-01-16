let person = {name: "default", age: "0", occupation: "default"};

function makePerson(){
	person.name =  document.getElementById("name").value;
	person.age = document.getElementById("age").value;
	person.occupation = document.getElementById("occupation").value;



	document.write(name +" "+ age +" "+ occupation);
}
//function makeOlder(){
	//person.age = person.age * 2;
	//document.write(person.age);

//}



