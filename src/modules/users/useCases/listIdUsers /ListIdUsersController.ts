import { Request, Response } from "express";

import { ListIdUsersUseCase } from "./ListIdUsersUseCase";

class ListIdUsersController {
  constructor(private listIdUsersUseCase: ListIdUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const users = this.listIdUsersUseCase.execute();
      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListIdUsersController };
