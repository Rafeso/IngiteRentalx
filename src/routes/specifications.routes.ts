import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificionService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
	const { name, description } = req.body;
	const createSpecificationService = new CreateSpecificionService(
		specificationsRepository
	);

	createSpecificationService.execute({ name, description });

	return res.status(201).send();
});

export { specificationsRoutes };

