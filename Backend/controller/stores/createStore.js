const db = require("../../db/connection");

const createStore = async (req, res, next) => {
  console.log(req.body);
  // image problem
  const { name, image } = req.body;
  const file = image[0].thumbUrl ? image[0].thumbUrl : "";
  try {
    const store = await db("stores").insert({
      name: name,
      logo: file,
    });
  } catch (error) {
    console.log(error);
  }

  res.status(200).json({
    error: false,
    message: "store created succesfully",
  });

  return;
};

exports.createStore = createStore;
