const db = require("../../db/connection");

const ErrHandling = require("../../errHandling");

const getStore = async (req, res, next) => {
  const storeId = req.params.storeId;
  res.send(storeId);
  return;
  let store;
  try {
    store = await db.select().from("stores").where("s_id", storeId);
  } catch (err) {
    return next(
      new ErrHandling("Somting went wrong, could not find store", 404)
    );
  }

  if (store.length == 0) {
    return next(
      new ErrHandling(`Could not find place for the provided id`, 404)
    );
  }

  res.status(200).json({
    error: false,
    total: store.length,
    data: store,
    message: null,
  });
};

exports.getStore = getStore;
