import React from 'react'
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { QRCodeCanvas } from "qrcode.react";
import Signin from '../Components/Signin/Signin';
export default function SignIn() {
  return (
    <>
    <Header />
      <main>
        <section>
            <Signin></Signin>
        </section>
      </main>
      <Footer />
    </>
  )
}
