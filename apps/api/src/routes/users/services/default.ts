import { Request, Response } from "express";
import { ResponseService } from "@/common/services/response";
import users from "@/models/users";
import { REQUIRED_VALUE_EMPTY, UNKNOWN_ERROR_OCCURRED } from "@/common/constants";
import jwt from 'jsonwebtoken'
import { SIGN_KEY } from "@/common/constants/ev";

const response = new ResponseService()

export const getUsers = async (req: Request, res: Response) => {
  try {
    const getAllUsers = await users.find({ deletedAt: null });
    const countAllUsers = await users
      .find({ deletedAt: null })
      .countDocuments();
    if (!getAllUsers) {
      return res.json(response.success({ message: "No user found" }));
    }
    res.json(
      response.success({
        items: getAllUsers,
        allItemCount: countAllUsers,
      }),
    );
  } catch (err: any) {
    return res.json(
      response.error({
        message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
      }),
    );
  }
};

export const getUserById = async (req: Request, res: Response) => {
  if(req.params.userId) {
    try {
      const getUser = await users.findOne({ _id: req.params.userId, deletedAt: null });
      if (!getUser) {
        return res.json(response.success({ message: "No user found" }));
      }
      res.json(
        response.success({
          item: getUser,
        }),
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};


export const addUser = async (req: Request, res: Response) => {
  const {
    username,
    firstName,
    lastName,
    role,
    password,
  } = req.body;
  if(username && firstName && lastName && role && password) {
    try {
      const newUser = new users({
        username,
        firstName,
        lastName,
        role,
        password,
      });
      await newUser.save();
      res.json(
        response.success({
          message: "User successfully added",
        }),
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  if (userId) {
    try {
      const getUser = users.findOne({
        _id: userId,
        deletedAt: null,
      });
      if (!getUser) {
        return res.json(
          response.error({ message: "This user doesn't exist in our system" }),
        );
      }
      const editUser = await users.findByIdAndUpdate(
        userId,
        {
          $set: req.body,
          updatedAt: Date.now(),
        },
      );
      res.json(
        response.success({
          item: editUser,
          message: "Campaign successfully updated",
        }),
      );
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};

export const authenticate = async (req: Request, res: Response) => {
  const {
    username,
    password,
  } = req.body;
  if(username && password) {
    try {
      const getUser = await users.findOne({
        username,
        deletedAt: null,
        isBlocked: false,
      });
      if(getUser && getUser.password !== password) {
        res.json(
          response.error({
            message: "Password doesn't match",
          }),
        );
      } else if(getUser && getUser.password === password) {
        const token = jwt.sign({ username }, SIGN_KEY);
        res.json(
          response.success({
            item: {
              token
            },
          }),
        );
      } else {
        return res.json(
          response.error({
            message: UNKNOWN_ERROR_OCCURRED,
          }),
        );
      }
    } catch (err: any) {
      return res.json(
        response.error({
          message: err.message ? err.message : UNKNOWN_ERROR_OCCURRED,
        }),
      );
    }
  } else {
    res.json(
      response.error({
        message: REQUIRED_VALUE_EMPTY,
      }),
    );
  }
};

export const verify = async (req: Request, res: Response) => {
  const user = res.locals.user;
  res.json(
    response.success({
      item: {
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role
      },
    }),
  );
};


