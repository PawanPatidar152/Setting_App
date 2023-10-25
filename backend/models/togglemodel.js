import mongoose from "mongoose";

const toggleSchema = mongoose.Schema({
  Airplane: {
    type: Boolean,
    required: true,
  },
  AutomaticMode: {
    type: Boolean,
    required: true,
  },
  BoldText: {
    type: Boolean,
    required: true,
  },
  TrueTone: {
    type: Boolean,
    required: true,
  },
  RaiseToWake: {
    type: Boolean,
    required: true,
  },
  ChangeWithButton: {
    type: Boolean,
    required: true,
  },
  LockSound: {
    type: Boolean,
    required: true,
  },
  HapticsInSilent: {
    type: Boolean,
    required: true,
  },
  HapticsInRing: {
    type: Boolean,
    required: true,
  },

  SystemHaptics: {
    type: Boolean,
    required: true,
  },
  Announcement: {
    type: Boolean,
    required: true,
  },
  Music: {
    type: Boolean,
    required: true,
  },
  Verify: {
    type: Boolean,
    required: true,
  },
  Location: {
    type: Boolean,
    required: true,
  },
  Scheduled: {
    type: Boolean,
    required: true,
  },
  Manually: {
    type: Boolean,
    required: true,
  },
  AppleRoot: {
    type: Boolean,
    required: true,
  },
  G3: {
    type: Boolean,
    required: true,
  },
  G2: {
    type: Boolean,
    required: true,
  },
  AAA: {
    type: Boolean,
    required: true,
  },
  Headphone: {
    type: Boolean,
    required: true,
  },
  ReduceLoud: {
    type: Boolean,
    required: true,
  },
  Sound: {
    type: Boolean,
    required: true,
  },
  Haptic: {
    type: Boolean,
    required: true,
  },
  WIFI: {
    type: Boolean,
    required: true,
  },
  Mobile: {
    type: Boolean,
    required: true,
  },
  Instagram: {
    type: Boolean,
    required: true,
  },
  Chrome: {
    type: Boolean,
    required: true,
  },
  Whatsapp: {
    type: Boolean,
    required: true,
  },
  AppStore: {
    type: Boolean,
    required: true,
  },
  AllowToJoin: {
    type: Boolean,
    required: true,
  },
  Compatiable: {
    type: Boolean,
    required: true,
  },
  BrightnessSlider:{
    type: Number,
    required:false,
  },
  TextSlider:{
    type: Number,
    required:false,
  },
  RingtoneSlider:{
    type: Number,
    required:false,
  },
  Mode:{
    type:Boolean,
    required:false,
  }
});

export const Toggle = mongoose.model("Toggle", toggleSchema);

