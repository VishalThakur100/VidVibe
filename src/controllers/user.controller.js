import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });

  // const {userName, email, fullName,password}=req.body
  // console.log("Email :",email);
  
});

export { registerUser };
