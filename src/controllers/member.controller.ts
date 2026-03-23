import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import {
  ExtendedRequest,
  LoginInput,
  Member,
  MemberInput,
  MemberUpdateInput,
} from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import AuthService from "../models/Auth.service";
import { AUTH_TIMER } from "../libs/config";

const memberService = new MemberService();
const authService = new AuthService();

const memberController: T = {};

// REACT

memberController.getRestaurant = async (req: Request, res: Response) => {
  try {
    console.log("getRestaurant 🔥");
    const result = await memberService.getRestaurant();
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getRestaurant:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup 🔥");
    const input: MemberInput = {
      memberNick: req.body.memberNick,
      memberEmail: req.body.memberEmail,
      memberPhone: req.body.memberPhone,
      memberPassword: req.body.memberPassword,
      memberAddress: req.body.memberAddress,
      memberCity: req.body.memberCity,
      memberState: req.body.memberState,
      memberZipCode: req.body.memberZipCode,
      memberCountry: req.body.memberCountry,
      memberFirstName: req.body.memberFirstName,
      memberLastName: req.body.memberLastName,
      memberDateOfBirth: req.body.memberDateOfBirth,
      memberGender: req.body.memberGender,
      memberDesc: req.body.memberDesc,
    };

    // Handle preferences if provided
    if (req.body.memberPreferences) {
      input.memberPreferences =
        typeof req.body.memberPreferences === "string"
          ? JSON.parse(req.body.memberPreferences)
          : req.body.memberPreferences;
    }

    // Handle social links if provided
    if (req.body.memberSocialLinks) {
      input.memberSocialLinks =
        typeof req.body.memberSocialLinks === "string"
          ? JSON.parse(req.body.memberSocialLinks)
          : req.body.memberSocialLinks;
    }

    const result: Member = await memberService.signup(input),
      token = await authService.createToken(result);
    // console.log("signup token =>", token);

    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error signup:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({})
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login 🔥");
    const input: LoginInput = req.body,
      result: Member = await memberService.login(input),
      token = await authService.createToken(result);
    // console.log("login token =>", token);

    res.cookie("accessToken", token, {
      maxAge: AUTH_TIMER * 3600 * 1000,
      httpOnly: false,
    });

    res.status(HttpCode.OK).json({ member: result, accessToken: token });
  } catch (err) {
    console.log("Error login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.logout = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("logout 🔥");
    res.cookie("accessToken", null, { maxAge: 0, httpOnly: false });
    res.status(HttpCode.OK).json({ logout: true });
  } catch (err) {
    console.log("Error login:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getMemberDetail = async (
  req: ExtendedRequest,
  res: Response,
) => {
  try {
    console.log("getMemberDetail 🔥");

    const result: Member = await memberService.getMemberDetail(req.member);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getMemberDetail:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.updateMember = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("updateMember 🔥");
    const input: MemberUpdateInput = {
      _id: req.member._id,
      memberNick: req.body.memberNick,
      memberEmail: req.body.memberEmail,
      memberPhone: req.body.memberPhone,
      memberAddress: req.body.memberAddress,
      memberCity: req.body.memberCity,
      memberState: req.body.memberState,
      memberZipCode: req.body.memberZipCode,
      memberCountry: req.body.memberCountry,
      memberDesc: req.body.memberDesc,
      memberFirstName: req.body.memberFirstName,
      memberLastName: req.body.memberLastName,
      memberDateOfBirth: req.body.memberDateOfBirth,
      memberGender: req.body.memberGender,
    };

    // Handle preferences if provided
    if (req.body.memberPreferences) {
      input.memberPreferences =
        typeof req.body.memberPreferences === "string"
          ? JSON.parse(req.body.memberPreferences)
          : req.body.memberPreferences;
    }

    // Handle social links if provided
    if (req.body.memberSocialLinks) {
      input.memberSocialLinks =
        typeof req.body.memberSocialLinks === "string"
          ? JSON.parse(req.body.memberSocialLinks)
          : req.body.memberSocialLinks;
    }

    if (req.file) input.memberImage = req.file.path.replace(/\\/g, "/");
    const result: Member = await memberService.updateMember(req.member, input);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error updateMember:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.getTopUsers = async (req: Request, res: Response) => {
  try {
    console.log("getTopUsers 🔥");
    const result = await memberService.getTopUsers();
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error getTopUsers:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.verifyAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies["accessToken"];
    if (token) req.member = await authService.checkAuth(token);

    if (!req.member)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

    next();
  } catch (err) {
    console.log("Error verifyAuth:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.retrieveAuth = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies["accessToken"];
    if (token) req.member = await authService.checkAuth(token);

    next();
  } catch (err) {
    console.log("Error retrieveAuth:", err);

    next();
  }
};

export default memberController;
