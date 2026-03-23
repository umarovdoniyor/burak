import mongoose, { Schema } from "mongoose";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },
    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
    },
    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPassword: {
      type: String,
      select: false,
      required: true,
    },
    memberAddress: {
      type: String,
    },
    memberDesc: {
      type: String,
    },
    memberImage: {
      type: String,
    },
    memberPoints: {
      type: Number,
      default: 0,
    },

    // Contact & Location Details
    memberEmail: {
      type: String,
      required: true,
      index: { unique: true, sparse: true },
    },
    memberCity: {
      type: String,
      required: false,
    },
    memberZipCode: {
      type: String,
      required: false,
    },
    memberCountry: {
      type: String,
      required: false,
    },
    memberState: {
      type: String,
      required: false,
    },

    // Personal Details
    memberFirstName: {
      type: String,
      required: false,
    },
    memberLastName: {
      type: String,
      required: false,
    },
    memberDateOfBirth: {
      type: Date,
      required: false,
    },
    memberGender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
      required: false,
    },

    // Preferences
    memberPreferences: {
      notifications: {
        type: Boolean,
        default: true,
      },
      newsletter: {
        type: Boolean,
        default: false,
      },
      language: {
        type: String,
        default: "en",
      },
    },

    // Social Links
    memberSocialLinks: {
      facebook: {
        type: String,
        required: false,
      },
      instagram: {
        type: String,
        required: false,
      },
      twitter: {
        type: String,
        required: false,
      },
    },
  },
  { timestamps: true },
);

export default mongoose.model("Member", memberSchema);
