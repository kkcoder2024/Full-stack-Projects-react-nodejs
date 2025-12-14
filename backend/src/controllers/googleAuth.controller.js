import { OAuth2Client } from "google-auth-library";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiErrorHandle } from "../utils/ApiErrorHandle.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { cookieOptions } from "../utils/dev_env.js";
const client_id = new OAuth2Client({
  clientId: process.env.GOOGLE_CLIENT_ID,
});

const googleLogin = asyncHandler(async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      throw new ApiErrorHandle(400, "Google token not provided");
    }

    if (!process.env.GOOGLE_CLIENT_ID) {
      throw new ApiErrorHandle(
        500,
        "GOOGLE_CLIENT_ID not configured on server"
      );
    }

    const ticket = await client_id.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { name: fullname, email, picture: avatar } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({
        fullname,
        username: email.split("@")[0],
        email,
        avatar,
        coverImage: "",
        password: "",
        googleAuth: true,
      });
    }
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(new ApiResponse(200, user, "Google login successful"));
  } catch (error) {
    console.error("Google login error:", error);
    throw new ApiErrorHandle(
      500,
      error?.message || "Google login failed due to Server Error"
    );
  }
});
export { googleLogin };
