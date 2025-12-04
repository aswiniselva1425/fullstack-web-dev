const express = require ('express');
const app = express();

app.use(express.json())

let items = [
   { id: 1, name: "ruler" },
   { id: 2, name: "file" },
 ];

 app.post("/items", (req, res) => {
   const newItem = {
     id: Date.now(),
     name: req.body.name,
   };
   items.push(newItem);
   res.status(201).json(newItem);
 });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
