const db = require("../../db/connection");
const ErrHandling = require("../../errHandling");

const addCategory = async (req, res, next) => {
  const storeId = req.params.storeId;

  const { name, image } = req.body;
  const file = image[0].thumbUrl ? image[0].thumbUrl : "";

  const checkStore = await db
    .select()
    .from("stores")
    .where("s_id", storeId)
    .catch((err) => {
      return next(err);
    });

  if (checkStore.length != 0) {
    const id = await db("categories").insert({
      store_id: storeId,
      name: name,
      image: file,
    });

    return res.status(201).json({
      error: false,
      message: "catagory created succesffuly",
    });
  } else {
    return next(new ErrHandling(`id ${storeId} Not found`, 404));
  }
};

exports.addCategory = addCategory;
