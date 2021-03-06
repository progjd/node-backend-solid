import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const user = new User();
    Object.assign(user, {
      name,
      email,
      admin: false,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.users.push(user);
    return user;
  }
  findById(id: string): User | undefined {
    // Complete aqui
    const findIndex = this.users.find((user) => user.id === id);
    return findIndex;
  }
  delete(id: string): void | undefined {
    const findUser = this.users.findIndex((user) => user.id === id);
    if (findUser < 0) {
      throw new Error("user not found");
    }
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const findEmail = this.users.find((user) => user.email === email);
    return findEmail;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const updateUser = {
      ...receivedUser,
      admin: true,
      update_at: new Date(),
    };
    this.users = this.users.map((user) =>
      user.id === receivedUser.id ? updateUser : user
    );
    return updateUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
