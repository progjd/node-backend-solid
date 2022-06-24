import swaggerUI from "swagger-ui-express";

import { app } from ".";
import swaggerDocument from "./swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3333, () => console.log("Server is running!"));
