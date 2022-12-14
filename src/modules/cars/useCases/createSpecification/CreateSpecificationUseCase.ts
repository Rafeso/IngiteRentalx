import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
	name: string;
	description: string;
}

class CreateSpecificionUseCase {
	constructor(private specificationsRepository: ISpecificationRepository) {}

	execute({ name, description }: IRequest): void {
		const specificationAlreadyExists =
			this.specificationsRepository.findByName(name);

		if (specificationAlreadyExists) {
			throw new Error(`Specification ${name} already exists`);
		}

		this.specificationsRepository.create({
			name,
			description,
		});
	}
}

export { CreateSpecificionUseCase };

