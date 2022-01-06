const db = require("../../db/connection");
const ErrHandling = require("../../errHandling");

const addProduct = async (req, res, next) => {
  const { categoryId, storeId } = req.params;
  const { name, price, price_type, image } = req.body;
  const file = image[0].thumbUrl ? image[0].thumbUrl : "";

  const checkStore = await db
    .select()
    .from("stores")
    .where("s_id", storeId)
    .catch((err) => {
      return next(err);
    });

  const checkCategory = await db
    .select()
    .from("categories")
    .where("c_id", categoryId)
    .catch((err) => {
      return next(err);
    });

  if (checkStore.length != 0) {
    if (checkCategory.length != 0) {
      const product = await db("products")
        .insert({
          store_id: storeId,
          category_id: categoryId,
          name: name,
          image: file,
          price: price,
          price_type: price_type,
        })
        .catch((err) => {
          return next(err);
        });

      return res.status(201).json({
        error: false,
        message: "catagory created succesffuly",
      });
    } else {
      return next(
        new ErrHandling(`No category found with id of ${categoryId}`, 404)
      );
    }
  } else {
    return next(new ErrHandling(`No store found with id of ${storeId}`, 404));
  }
};

exports.addProducts = addProduct;
