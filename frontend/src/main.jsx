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
import { useState, useEffect } from "react";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage props="props" />} />
        <Route path="Setting" element={<SettingMainPage />} />
        <Route path="/Setting/AppleID" element={<AppleIDDes />} />
        <Route path="/Setting/Sound" element={<SubSound />} />
        <Route path="/Setting/Display" element={<SubDisplay />} />
        <Route path="/Setting/Connection" element={<SubConnection />} />
        <Route path="/Setting/About" element={<SubAbout />} />
        <Route path="/Setting/Sound/Headphone" element={<HeadphoneSafety />} />
        <Route path="/Setting/Sound/Personalise" element={<Personalise />} />
        <Route path="/Setting/Sound/Ringtone" element={<Ringtone />} />
        <Route path="/Setting/Sound/TextTone" element={<TextTone />} />
        <Route path="/Setting/Sound/VoiceMail" element={<VoiceMail />} />
        <Route path="/Setting/Sound/NewMail" element={<NewMail />} />
        <Route path="/Setting/Sound/SentMail" element={<SentMail />} />
        <Route
          path="/Setting/Sound/CalenderNotes"
          element={<CalenderNotes />}
        />
        <Route path="/Setting/Sound/Reminder" element={<Reminder />} />
        <Route
          path="/Setting/Sound/KeyboardFeedback"
          element={<KeyboardFeedback />}
        />
        <Route path="/Setting/About/Coverage" element={<Coverage />} />
        <Route path="/Setting/About/SEID" element={<SEID />} />
        <Route
          path="/Setting/About/CertificateTrust"
          element={<CertificateTrust />}
        />
        <Route path="/Setting/About/IosVersion" element={<IosVersion />} />
        <Route path="/Setting/Display/Text" element={<Text />} />
        <Route path="/Setting/Display/Night" element={<Night />} />
        <Route path="/Setting/Display/AutoLock" element={<AutoLock />} />
        <Route path="/Setting/Display/DisplayZoom" element={<DisplayZoom />} />
        <Route path="/Setting/AppleID/Family" element={<Family />} />
        <Route path="/Setting/AppleID/Find" element={<Find />} />
        <Route path="/Setting/AppleID/Name" element={<Name />} />
        <Route path="/Setting/AppleID/Password" element={<Password />} />
        <Route path="/Setting/AppleID/Device" element={<Pawan />} />
        <Route path="/Setting/AppleID/Payment" element={<Payment />} />
        <Route
          path="/Setting/AppleID/Subscription"
          element={<Subscription />}
        />
        <Route
          path="/Setting/Connection/Bluetooth"
          element={<BluetoothFunction />}
        />
        <Route path="/Setting/Connection/Wifi" element={<WifiFunction />} />
        <Route
          path="/Setting/Connection/Mobiledata"
          element={<MobiledataFunction />}
        />
        <Route
          path="/Setting/Connection/Hotspot"
          element={<HotspotFunction />}
        />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
