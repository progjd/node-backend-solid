import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListIdUsersController } from "./ListIdUsersController";
import { ListIdUsersUseCase } from "./ListIdUsersUseCase";

const usersRepository = UsersRepository.getInstance();
const listIdUsersUseCase = new ListIdUsersUseCase(usersRepository);
const listIdUsersController = new ListIdUsersController(listIdUsersUseCase);

export { listIdUsersController };
