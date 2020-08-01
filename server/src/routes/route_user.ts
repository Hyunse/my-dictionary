import { Router, Request, Response } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import userController from '../controllers/controller_user';

const router: Router = Router();

router.get(
  '/users',
  asyncHandler(async (_: Request, res: Response) => {
    const result = await userController.findAllUsers();

    res.send({
      ok: true,
      data: result,
    });
  })
);

router.post(
  '/user/signIn',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    const email = req.body.email;
    const password = req.body.password;

    const result = await userController.signIn(email, password);

    res.send({
      ok: true,
      message: null,
      token: result,
    });
  })
);

router.post(
  '/user/signUp',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    let user = req.body;

    const result = await userController.signUp(user);

    res.send({
      ok: true,
      message: null,
      token: result,
    });
  })
);

router.post(
  '/user/update',
  asyncHandler(async (req: Request, res: Response) => {
    // Param
    const name = req.body.name;
    const email = req.body.email;
    const country = req.body.country;
    const password = req.body.password;
    // Jwt
    const { id } = req.body.user;

    const result = userController.update(name, email, country, password, id);

    res.send(result);
  })
);

export default router;
