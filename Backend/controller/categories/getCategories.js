const db = require("../../db/connection");
const ErrHandling = require("../../errHandling");

const getCategories = async (req, res, next) => {
  const storeId = req.params.storeId;

  let categories;
  try {
    categories = await db
      .select()
      .from("categories")
      .where("store_id", storeId);
  } catch (err) {
    return next(new ErrHandling("Something went wrong", 404));
  }

  if (categories.length == 0) {
    return next(new ErrHandling(`Categories Could not found `, 404));
  }

  res.status(200).json({
    error: false,
    total: categories.length,
    data: categories,
  });
};

exports.getCategories = getCategories;
