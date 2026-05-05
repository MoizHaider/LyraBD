import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import bodyParser from "body-parser";
import { RegisterRoutes } from "./routes/routes";
import swaggerDocument from "../public/swagger.json";

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "*",
  Credential: true,
};
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(corsOptions));
app.use(express.static("public"));

app.use(
  "/api-docs",
  swaggerUi.serve as any,
  swaggerUi.setup(swaggerDocument as any) as any,
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

RegisterRoutes(app);

export default app;
