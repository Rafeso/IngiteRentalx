import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification/Index";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
	return createSpecificationController.handle(req, res);
});

export { specificationsRoutes };

