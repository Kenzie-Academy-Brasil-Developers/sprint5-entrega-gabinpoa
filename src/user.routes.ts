import { Router } from "express";
import { userCreateController } from "./controllers/userCreate.controller";
import { userDeleteController } from "./controllers/userDelete.controller";
import { userListController } from "./controllers/userList.controller";
import { userListOneController } from "./controllers/userListOne.controller";
import { userUpdateController } from "./controllers/userUpdate.controller";
import { emailAvalability } from "./middlewares/emailAvailability";
import { idVerification } from "./middlewares/idVerification";

export const userRouter = Router();

userRouter.post("", emailAvalability, userCreateController);

userRouter.get("", userListController);

userRouter.get("/:id", idVerification, userListOneController);

userRouter.delete("/:id", idVerification, userDeleteController);

userRouter.patch("/:id", idVerification, userUpdateController);
