import { SpecificationsRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificionUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificionUseCase(
	specificationsRepository
);

const createSpecificationController = new CreateSpecificationController(
	createSpecificationUseCase
);

export { createSpecificationController };

