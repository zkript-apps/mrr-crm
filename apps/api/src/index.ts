import express, { Application } from "express";
import path from "path";
import cors from "cors";
import routes from "@/routes";
import { ALLOWED_CLIENTS, PORT } from "@/common/constants/ev";
import "@/common/utils/mongodb";
import fileUpload from "express-fileupload";

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: ALLOWED_CLIENTS,
    credentials: true,
  }),
);
app.use("/files", express.static(path.join(__dirname, "uploads")));
app.use(fileUpload());

routes(app);

app.listen(PORT, () => {
  console.log(`API Server is running at ${PORT}`);
});
