import { Router } from "express";

import { PostgressCategoriesRepository } from "../modules/cars/repositories/PostgressCategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new PostgressCategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
	const { name, description } = req.body;

	const createCategoryService = new CreateCategoryService(categoriesRepository);

	createCategoryService.execute({ name, description });

	return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
	const listAll = categoriesRepository.list();

	return res.json(listAll);
});

export { categoriesRoutes };

