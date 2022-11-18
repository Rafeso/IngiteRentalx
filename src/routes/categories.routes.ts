import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";
import { listCategoriesController } from "../modules/cars/useCases/listCategories/Index";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
	return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
	return listCategoriesController.handle(req, res);
});

export { categoriesRoutes };

