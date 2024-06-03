import express, { Application } from "express";
import path from "path";
import cors from "cors";
import routes from "@/routes";
import { ALLOWED_CLIENTS, PORT } from "@/common/constants/ev";
import fileUpload from "express-fileupload";
import "@/common/utils/mongodb";
import "./seed";

const app: Application = express();
app.use(express.json());

app.use(
  cors({
    origin: ALLOWED_CLIENTS,
    credentials: true,
  }),
);
app.use("/files", express.static(path.join(__dirname, "uploads")));

app.use(fileUpload({
  limits: {
    fileSize: 250 * 1024 * 1024, // 250mb
  }
}));

routes(app);

app.listen(PORT, () => {
  console.log(`API Server is running at ${PORT}`);
});
