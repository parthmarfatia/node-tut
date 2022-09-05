const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "note5",
      brand: "corby",
      price: "10",
      category: "mobile",
    },
    {
      name: "note6",
      brand: "corby",
      price: "10",
      category: "mobile",
    },
    {
      name: "note7",
      brand: "corby",
      price: "10",
      category: "mobile",
    },
  ]);
  console.log(result);
};

insert();
