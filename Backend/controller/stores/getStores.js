const db = require("../../db/connection");

const ErrHandling = require("../../errHandling");

const getStores = async (req, res, next) => {
  let stores;

  try {
    stores = await db.select().from("stores");
  } catch (err) {
    return next(new ErrHandling("Somting went wrong", 500));
  }

  res.status(200).json({
    error: false,
    total: stores.length,
    data: stores,
    message: null,
  });
};

exports.getStores = getStores;
