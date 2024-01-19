import React, { Component, StrictMode } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";

// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/custom.css";

// component App
// import App from "./App";

// Import main page
import LoginPage from "./activity/mainpage/LoginPage";
import RegisterPage from "./activity/mainpage/RegisterPage";
import VerifyOtpPinNKSPage from "./activity/mainpage/VerifyOtpPinNKSPage";
import ValidateEmailPage from "./activity/mainpage/ValidateEmailPage";
import CreateNewPassPage from "./activity/mainpage/CreateNewPassPage";
import CongratulationsPage from "./activity/mainpage/CongratulationsPage";
import ProfilMemberPage from "./activity/mainpage/ProfilMemberPage";
import AllAnggotaProfilePage from "./activity/mainpage/AllAnggotaProfilePage";
import MenuProfilPage from "./activity/mainpage/MenuProfilPage";
import ProfilPage from "./activity/mainpage/ProfilPage";
import UsernamePassPage from "./activity/mainpage/UsernamePassPage";
import PinNKSPage from "./activity/mainpage/PinNKSPage";
import UnallowedPage from "./activity/mainpage/UnallowedPage";
import SuccessfulPage from "./activity/mainpage/SuccessfulPage";
import NotificationPage from "./activity/mainpage/NotificationPage";
import SplashScreenPage from "./activity/mainpage/SplashScreenPage";

// import BuatAkun from "./activity/BuatAkun";
// import HankoAuth from "./activity/HankoAuth"; // login with metode passkey

// import Dashboard from "./activity/Dashboard";
import Dashboard from "./components/App";
import SettingPage from "./activity/settings/SettingPage";
import WizardExample from "./activity/example_wizard/wizardExample";
// import RiwayatAbsensi from "./activity/RiwayatAbsensi";
// import ScanQr from "./activity/ScanQr";

// import RegisterPage from "./activity/mainpage/RegisterPage";
// import LoginPage from "./activity/mainpage/LoginPage";
// import ForgotAccountPage from "./activity/mainpage/ForgotAccountPage";
// import VerifyOtpPage from "./activity/mainpage/VerifyOtpPage";

import CheckHelper from "./components/checkHelper";

// import ProfilPage from "./activity/profilPage";

import App from "./components/App";
// import ProfilSaya from "./activity/ProfilSaya";
// import EditProfilSaya from "./activity/EditProfilSaya";
// import Testscanqr from "./activity/TesQr";

import reportWebVitals from "./reportWebVitals";

// transaction
import CashbackInfo from "./activity/transaction/cashback/CashbackInfo";

import DetailVerificationPage from "./activity/transaction/transfer/DetailVerificationPage";
import TransferPage from "./activity/transaction/transfer/TransferPage";
import AllCashbackPage from "./activity/transaction/cashback/AllCashbackPage";
import DetailCashback from "./activity/transaction/cashback/DetailCashback";
import CashbackSuccess from "./activity/transaction/cashback/CashbackSuccess";

import PurchaseInfo from "./activity/transaction/purchase/PurchaseInfo";

import AllAchievementPage from "./activity/AchievementInfo/AllAchievementPage";
import DetailAchievement from "./activity/AchievementInfo/DetailAchievement";
import AllCommisionPage from "./activity/transaction/Commisions/AllCommisionPage";
import WithdrawPage from "./activity/transaction/withdraw/WithdrawPage";

//riwayat
import RiwayatPage from "./activity/riwayat/RiwayatPage";


// learn
import LearnLoop from "./activity/learn/LearnLoop";
import LearnLoop2 from "./activity/learn/LearnLoop2";

// order
import Order from "./activity/order/Order";

<<<<<<< HEAD
// Order RO
import ListOrderRo from "./activity/order/RO/ListOrderRo";
import PembelianRo from "./activity/order/RO/PembelianRo";
import RoTo from "./activity/order/RO/RoTo";
import PengirimanSayaRO from "./activity/order/RO/PengirimanSayaRO";
import PengirimanDownlineRO from "./activity/order/RO/PengirimanDownlineRO";
import DetailTransaksiSayaRO from "./activity/order/RO/DetailTransaksiSayaRO";
import DetailTransaksiDownlineRo from "./activity/order/RO/DetailTransaksiDownlineRo";
import SelesaikanPembayaranSayaRO from "./activity/order/RO/SelesaikanPembayaranSayaRO";
import SelesaikanPembayaranDownlineRO from "./activity/order/RO/SelesaikanPembayaranDownlineRO";

// order upgrade paket
import ListOrderPaket from "./activity/order/Paket/ListOrderPaket";
import PengirimanSayaPaket from "./activity/order/Paket/PengirimanSayaPaket";
import DetailTransaksiSayaPaket from "./activity/order/Paket/DetailTransaksiSayaPaket";
import SelesaikanPembayaranSayaPaket from "./activity/order/Paket/SelesaikanPembayaranSayaPaket";

// order tiket
import ListOrderTiket from "./activity/order/Tiket/ListOrderTiket";
import PembelianTiket from "./activity/order/Tiket/PembelianTiket";
import DetailTransaksiSayaTiket from "./activity/order/Tiket/DetailTransaksiSayaTiket";
import SelesaikanPembayaranSayaTiket from "./activity/order/Tiket/SelesaikanPembayaranSayaTiket";


import baganBinaryExample from "./activity/genealogy_tree/baganBinaryExample";
import Binary from "./activity/genealogy_tree/binarytree";
=======
<<<<<<< HEAD


=======
>>>>>>> 71823e9bb44b84f05f22fd941bcbb64dccd7ad18
import RoTo from "./activity/order/RoTo";
import DetailTransaksi from "./activity/order/DetailTransaksi";
import ListOrderTiket from "./activity/order/ListOrderTiket";
import PembelianTiket from "./activity/order/PembelianTiket";
<<<<<<< HEAD
=======
import baganBinaryExample from "./activity/genealogy_tree/baganBinaryExample";
>>>>>>> 71823e9bb44b84f05f22fd941bcbb64dccd7ad18
>>>>>>> e47c772eec7d4b3a1f45a8f3790c6a49cf1e0e4a



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* learn */}
        <Route path='/LearnLoop' element={<LearnLoop />} />
        <Route path='/LearnLoop2' element={<LearnLoop2 />} />
        <Route path='/' element={<SplashScreenPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settingPage' element={<SettingPage />} />
        <Route path='/WizardExample' element={<WizardExample />} />
        {/* mainpage */}
        <Route path='/RegisterPage' element={<RegisterPage />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/ValidateEmailPage' element={<ValidateEmailPage />} />
        <Route path='/CreateNewPassPage' element={<CreateNewPassPage />} />
        <Route path='/CongratulationsPage' element={<CongratulationsPage />} />
        <Route path='/VerifyOtpPinNKSPage' element={<VerifyOtpPinNKSPage />} />
        <Route path='/ProfilMemberPage' element={<ProfilMemberPage />} />
        <Route path='/AllAnggotaProfilePage' element={<AllAnggotaProfilePage />} />
        <Route path='/MenuProfilPage' element={<MenuProfilPage />} />
        <Route path='/ProfilPage' element={<ProfilPage />} />
        <Route path='/UsernamePassPage' element={<UsernamePassPage />} />
        <Route path='/PinNKSPage' element={<PinNKSPage />} />
        <Route path='/AllAchievementPage' element={<AllAchievementPage />} />
        <Route path='/UnallowedPage' element={<UnallowedPage />} />
        <Route path='/SuccessfulPage' element={<SuccessfulPage />} />
        <Route path='/NotificationPage' element={<NotificationPage />} />
        <Route path='/SplashScreenPage' element={<SplashScreenPage />} />
        {/* transaction */}
        <Route path='/PurchaseInfo' element={<PurchaseInfo />} />
        <Route path='/CashbackInfo' element={<CashbackInfo />} />

        <Route path='/DetailVerificationPage' element={<DetailVerificationPage />} />
        <Route path='/TransferInfo' element={<TransferInfo />} />
        <Route path='/TransferPage' element={<TransferPage />} />
        <Route path='/DetailAchievement' element={<DetailAchievement />} />
        <Route path='/WithdrawPage' element={<WithdrawPage />} />
        {/* riwayat */}
        <Route path='/RiwayatPage' element={<RiwayatPage />} />
        {/* AllAchievementPage */}
        <Route path='/AllAchievementPage' element={<AllAchievementPage />} />
        {/* cashback */}
        <Route path='/AllCashbackPage' element={<AllCashbackPage />} />
        <Route path='/DetailCashback' element={<DetailCashback />} />
        <Route path='/CashbackSuccess' element={<CashbackSuccess />} />
        {/* AllCashbackPage */}
        <Route path='/AllCommisionPage' element={<AllCommisionPage />} />
        {/* Order */}
        <Route path='/Order' element={<Order />} />

        {/* Order RO */}
        <Route path='/ListOrderRo' element={<ListOrderRo />} />
        <Route path='/PembelianRo' element={<PembelianRo />} />
<<<<<<< HEAD
=======
        <Route path='/Pengiriman' element={<Pengiriman />} />
<<<<<<< HEAD
=======
        <Route path='/RoTo' element={<RoTo />} />
        <Route path='/DetailTransaksi' element={<DetailTransaksi />} />
        <Route path='/SelesaikanPembayaran' element={<SelesaikanPembayaran />} />
>>>>>>> 71823e9bb44b84f05f22fd941bcbb64dccd7ad18
        <Route path='/SelesaikanPembayaran' element={<SelesaikanPembayaran />} />
>>>>>>> e47c772eec7d4b3a1f45a8f3790c6a49cf1e0e4a
        <Route path='/RoTo' element={<RoTo />} />
        <Route path='/PengirimanSayaRO' element={<PengirimanSayaRO />} />
        <Route path='/PengirimanDownlineRO' element={<PengirimanDownlineRO />} />
        <Route path='/DetailTransaksiSayaRO' element={<DetailTransaksiSayaRO />} />
        <Route path='/DetailTransaksiDownlineRo' element={<DetailTransaksiDownlineRo />} />
        <Route path='/SelesaikanPembayaranSayaRO' element={<SelesaikanPembayaranSayaRO />} />
        <Route path='/SelesaikanPembayaranDownlineRO' element={<SelesaikanPembayaranDownlineRO />} />

        {/* Order Paket */}
        <Route path='/ListOrderPaket' element={<ListOrderPaket />} />
        <Route path='/PengirimanSayaPaket' element={<PengirimanSayaPaket />} />
        <Route path='/DetailTransaksiSayaPaket' element={<DetailTransaksiSayaPaket />} />
        <Route path='/SelesaikanPembayaranSayaPaket' element={<SelesaikanPembayaranSayaPaket />} />

        {/* Order Paket */}
        <Route path='/ListOrderTiket' element={<ListOrderTiket />} />
        <Route path='/PembelianTiket' element={<PembelianTiket />} />
<<<<<<< HEAD
        <Route path='/DetailTransaksiSayaTiket' element={<DetailTransaksiSayaTiket />} />
        <Route path='/SelesaikanPembayaranSayaTiket' element={<SelesaikanPembayaranSayaTiket />} />

        <Route path='/baganBinaryExample' element={<baganBinaryExample />} />
        {/* <Route path='/binary' element={<Binary />} /> */}
=======
<<<<<<< HEAD
=======
        <Route path='/baganBinaryExample' element={<baganBinaryExample />} />
>>>>>>> 71823e9bb44b84f05f22fd941bcbb64dccd7ad18
>>>>>>> e47c772eec7d4b3a1f45a8f3790c6a49cf1e0e4a
        {/* end */}
      </Routes >
    </BrowserRouter >
  </React.StrictMode >
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
