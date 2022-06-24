import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListIdUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute(): User[] {
    // Complete aqui
    return this.usersRepository.list();
  }
}

export { ListIdUsersUseCase };
