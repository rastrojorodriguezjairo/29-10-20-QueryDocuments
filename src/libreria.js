/*
He empleado el método insertmany, el cual emplea corchetes [] para conformar un arraid de elementos del mismo tipo, en este caso documentos.
El insertmany esta apollado en la colección inventory la cual se guarda en la base de datos db, la cual especificare en el terminal de mongo
como "use inventory"
*/
db.inventory.insertMany ([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
   { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
   { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
   { item: "book", qty: 40, size: {h: 30, w: 56, uom: "cm" }, status: "B"},
   { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
   { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
    { item: "journal", qty: 30, size: {h: 15, w: 25, uom: "cm" }, status: "B"},
    { item: "postcard", qty: 56, size: {h: 20, w: 16, uom: "in" }, status: "B"},
    { item: "paper", qty: 80, size: {h: 10, w: 15, uom: "in" }, status: "D"},
    { item: "book", qty: 56, size: {h: 20, w: 30, uom: "cm" }, status: "D"},
    { item: "book", qty: 70, size: {h: 25, w: 30, uom: "cm" }, status: "A"},
    { item: "planner", qty: 80, size: {h: 20, w: 45, uom: "cm" }, status: "B"},
    { item: "journal", qty: 78, size: {h: 10.15, w: 36, uom: "in" }, status: "A"},
])
/*
Ahora para seguir trabajando, realizare algunas consultas para comprobar el correcto funcionamiento y manejo de los query documents, es decir
de las consultas de documentos, tengamos en cuenta que dichas consultas, se guardarán en el documento query.js que podra encontrar en esta misma
carpeta, src.
*/