import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SettingMainPage from "./Pages/SettingMain";
import Homepage from "./Pages/Homepage";
import AppleIDDes from "./SubPages/SubAppleID";
import SubSound from "./SubPages/SubSound";
import SubDisplay from "./SubPages/SubDisplay";
import SubConnection from "./SubPages/SubConnection";
import SubAbout from "./SubPages/SubAbout";
import HeadphoneSafety from "./SuperSubpage/Sound/Headphone Safety";
import Personalise from "./SuperSubpage/Sound/Personalise";
import Reminder from "./SuperSubpage/Sound/Reminder";
import VoiceMail from "./SuperSubpage/Sound/Voicemail";
import Ringtone from "./SuperSubpage/Sound/Ringtone";
import TextTone from "./SuperSubpage/Sound/TextTone";
import CalenderNotes from "./SuperSubpage/Sound/CalenderNotes";
import NewMail from "./SuperSubpage/Sound/NewMail";
import SentMail from "./SuperSubpage/Sound/SentMail";
import KeyboardFeedback from "./SuperSubpage/Sound/KeyboardFeedback";
import Coverage from "./SuperSubpage/About/Coverage";
import SEID from "./SuperSubpage/About/SEID";
import CertificateTrust from "./SuperSubpage/About/CertificateTrust";
import IosVersion from "./SuperSubpage/About/IosVersion";
import Text from "./SuperSubpage/Display/TextSize";
import Night from "./SuperSubpage/Display/NightShift.jsx";
import AutoLock from "./SuperSubpage/Display/AutoLock";
import DisplayZoom from "./SuperSubpage/Display/DisplayZoom";
import Family from "./SuperSubpage/AppleID/Family";
import Find from "./SuperSubpage/AppleID/Find";
import Name from "./SuperSubpage/AppleID/Name";
import Password from "./SuperSubpage/AppleID/Password";
import Pawan from "./SuperSubpage/AppleID/Pawan";
import Payment from "./SuperSubpage/AppleID/Payment";
import Subscription from "./SuperSubpage/AppleID/Subscription";
import BluetoothFunction from "./SuperSubpage/Connection/BlutooothFunction";
import WifiFunction from "./SuperSubpage/Connection/WifiFunction";
import MobiledataFunction from "./SuperSubpage/Connection/MobiledataFunction";
import HotspotFunction from "./SuperSubpage/Connection/Hotspotfunction";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="about" element={<SettingMainPage />} />
      <Route path="AppleID" element={<AppleIDDes />} />
      <Route path="SubSound" element={<SubSound />} />
      <Route path="SubDisplay" element={<SubDisplay />} />
      <Route path="SubConnection" element={<SubConnection />} />
      <Route path="SubAbout" element={<SubAbout />} />
      <Route path="Headphone" element={<HeadphoneSafety />} />
      <Route path="Personalise" element={<Personalise />} />
      <Route path="Ringtone" element={<Ringtone />} />
      <Route path="TextTone" element={<TextTone />} />
      <Route path="VoiceMail" element={<VoiceMail />} />
      <Route path="NewMail" element={<NewMail />} />
      <Route path="SentMail" element={<SentMail />} />
      <Route path="CalenderNotes" element={<CalenderNotes />} />
      <Route path="Reminder" element={<Reminder />} />
      <Route path="KeyboardFeedback" element={<KeyboardFeedback />} />
      <Route path="Coverage" element={<Coverage />} />
      <Route path="SEID" element={<SEID />} />
      <Route path="CertificateTrust" element={<CertificateTrust />} />
      <Route path="IosVersion" element={<IosVersion />} />
      <Route path="Text" element={<Text />} />
      <Route path="Night" element={<Night />} />
      <Route path="AutoLock" element={<AutoLock />} />
      <Route path="DisplayZoom" element={<DisplayZoom />} />
      <Route path="Family" element={<Family />} />
      <Route path="Find" element={<Find />} />
      <Route path="Name" element={<Name />} />
      <Route path="Password" element={<Password />} />
      <Route path="Pawan" element={<Pawan />} />
      <Route path="Payment" element={<Payment />} />
      <Route path="Subscription" element={<Subscription />} />
      <Route path="BluetoothFunction" element={<BluetoothFunction />} />
      <Route path="WifiFunction" element={<WifiFunction />} />
      <Route path="MobiledataFunction" element={<MobiledataFunction />} />
      <Route path="HotspotFunction" element={<HotspotFunction />} />
    </Routes>
  </BrowserRouter>
);
