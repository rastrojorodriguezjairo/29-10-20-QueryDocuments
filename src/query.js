/*
Aquí se van a mostrar las consultas que se han realizado a la base de datos inventory, empleando query documents, de diferentes tipos para
mostrar como se utilizan.
Para realizar la consulta empezaremos haciendo uso del método find
*/ 

db.inventory.find() 
/*Listará todos los documentos de la colección inventory*/

db.inventory.find().pretty()
/* Tambien lista los documentos de la colección inventory pero de una forma mas agradable de ver*/

db.inventory.find({"item":"book"}).pretty() 
/*La primera consulta que he realizado es para que muestre los documentos que son en el campo "item", iguales a "book" tengamos en cuenta que existen varios tipos de item, y el item book es un tipo de dato que yo mismo he creado para que exista mas vairedad*/

db.inventory.find({"status":{$eq:"A"}}).pretty() 
/*Ahora eh decidido usar el operado $eq para poder filtrar un un datos especifico. En este caso el status o estado el cual filtramos como A, debo añadir que en la colecciónoriginal de documentos solo existian status A y D, sin embargo yo he añadido el status B, para mayor variedad*/

db.inventory.find({"item":"notebook", "status":"A"}).pretty()
/*
Acabamos de emplear un and implicito, para filtrar por dos opciones nuestra base de datos.
Para empezar, al usar la "," entre las dos condiciones de filtrardo se está empleando un and implicito, es decir, la palabra "and" no esta presente pero actua de la misma forma.
sin embargo el "and" implicito presenta algunos problemas al filtrar por dos campos iguales, es decir que si quisiera por ejemplo filtrar entre los que tengo una cantidad menor de 50
y mayor de 15 pues se ordenarian de forma irregular, haciendo solo caso a la ultima instrucción que se le ha dado es decir nos darian todos los resultado en los que la cantidad
es mayor 15 incluidos los que superan los 50
*/ 

db.inventory.find({$and:[{qty:{$gte:20}}, {qty:{$lt:60}}]}).pretty()
/*
Ahora he utilizado el "and" explicito, es decir he utilizado el operador $and para unir dos condiciones
y se cumplan ambas en el filtrado.
*/


db.inventory.find({$or:[{status:{$eq:"A"}}, {qty:{$eq:"B"}}]}).pretty()
/*
He empleado el operador $or para filtrar por el estado (status) ya sea "A" o "B", me apareceran los que
cumplan alguna de las condiciones.
*/
