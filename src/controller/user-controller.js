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
