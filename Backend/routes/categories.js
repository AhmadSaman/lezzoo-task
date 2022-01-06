const express = require("express");
const router = express.Router({ mergeParams: true });
const productsRoutes = require("../routes/products");

const { getCategories, addCategory } = require("../controller/categories");

router.use("/:categoryId/products", productsRoutes);

router.get("/", getCategories);
router.post("/", addCategory);

module.exports = router;
