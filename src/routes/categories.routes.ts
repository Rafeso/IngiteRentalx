import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory/Index";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
	return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
	const listAll = categoriesRepository.list();

	return res.json(listAll);
});

export { categoriesRoutes };

