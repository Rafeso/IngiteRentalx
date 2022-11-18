import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificionService } from "../modules/cars/services/CreateSpecificationSerive";

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

