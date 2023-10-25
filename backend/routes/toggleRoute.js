import express from "express";
import { Toggle } from "../models/togglemodel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newToggle = {
      Airplane: req.body.Airplane,
      AutomaticMode: req.body.AutomaticMode,
      BoldText: req.body.BoldText,
      TrueTone: req.body.TrueTone,
      RaiseToWake: req.body.RaiseToWake,
      ChangeWithButton: req.body.ChangeWithButton,
      LockSound: req.body.LockSound,
      HapticsInSilent: req.body.HapticsInSilent,
      HapticsInRing: req.body.HapticsInRing,
      SystemHaptics: req.body.SystemHaptics,
      Announcement: req.body.Announcement,
      Music: req.body.Music,
      Verify: req.body.Verify,
      Location: req.body.Location,
      Scheduled: req.body.Scheduled,
      Manually: req.body.Manually,
      AppleRoot: req.body.AppleRoot,
      G3: req.body.G3,
      G2: req.body.G2,
      AAA: req.body.AAA,
      Headphone: req.body.Headphone,
      ReduceLoud: req.body.ReduceLoud,
      Sound: req.body.Sound,
      Haptic: req.body.Haptic,
      WIFI: req.body.WIFI,
      Mobile: req.body.Mobile,
      Instagram: req.body.Instagram,
      Chrome: req.body.Chrome,
      Whatsapp: req.body.Whatsapp,
      AppStore: req.body.AppStore,
      AllowToJoin: req.body.AllowToJoin,
      Compatiable: req.body.Compatiable,
      BrightnessSlider: req.body.BrightnessSlider,
      TextSlider: req.body.TextSlider,
      RingtoneSlider: req.body.RingtoneSlider,
      Mode: req.body.Mode,
    };

    const toggle = await Toggle.create(newToggle);
    return res.status(201).send(toggle);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const toggles = await Toggle.find({});
    return res.status(200).json({ data: toggles });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toggleId = await Toggle.findById(id);
    return res.status(200).json(toggleId);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message: "send fields",
      });
    }
    const { id } = req.params;
    const result = await Toggle.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Toggle not found" });
    }
    return res.status(200).send({ message: "Toggle changed successfully" });
  } catch {}
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Toggle.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Toggle not found" });
    }

    return res.status(200).send({ message: "Toggle deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
