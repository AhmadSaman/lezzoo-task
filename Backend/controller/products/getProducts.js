const db = require("../../db/connection");
const ErrHandling = require("../../errHandling");

const getProducts = async (req, res, next) => {
  const { categoryId, storeId } = req.params;

  let products;
  try {
    products = await db
      .select()
      .from("products")
      .where({ category_id: categoryId, store_id: storeId });
  } catch (err) {
    return next(
      new ErrHandling("Something went wrong, could not find products", 500)
    );
  }

  if (products.length == 0) {
    return next(
      new ErrHandling(
        "Could not find products for the provided store_id or catgeory_id.",
        404
      )
    );
  }

  res.status(200).json({
    error: false,
    total: products.length,
    data: products,
  });
};

exports.getProducts = getProducts;
