const dbConnect = require("./mongodb");

const updateDate = async () => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: "m100" },
    { $set: { name: "m1", price: 800 } }
  );
};

updateDate();
