import UserService from "../services/user-service.js";
const userService = new UserService();
export const signup = async (req, res) => {
  try {
    const user = await userService.signup({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    return res.status(201).json({
      success: true,
      message: "succesfuly created a new tweet",
      data: user,
      err: {},
    });
  } catch (error) {
    console.log("error at controller js");
    return res.status(500).json({
      success: false,
      message: "not able to  create a new tweet",
      data: user,
      err: error,
    });
  }
};
export const login = async (req, res) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (!user) {
      return res.status(401).json({
        message: "no user found",
        success: false,
      });
    }
    if (!user.comparePassword(req.body.password)) {
      return res.status(401).json({
        message: "password does not match",
        success: false,
      });
    }
    const token = user.genJWT();
    return res.status(200).json({
      message: "succefully login",
      success: true,
      data: token,
      err: {},
    });
  } catch (error) {
    console.log("error at user controller");
    return res.status(401).json({
      message: "something went wrong",
      success: false,
    });
  }
};
