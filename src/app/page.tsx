"use client";

import Image from "next/image";
import "../styles/global.css";
import { useRouter } from "next/navigation";
import girlbook from "./images/image.png";
import login from "./login/page";

export default function Home() {
  const router = useRouter();



  return (
    <div className="container">
      <header>
        <div className="logo">P</div>
        <nav className="nav">
          <a href="#">Tools</a>
          <a href="#">Explore</a>
          <a href="#">Stock</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <div className="auth">
          <button className="login-btn" onClick={() => router.push("./login")}>Login</button> 
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>
      <main className="main-content">
        <div className="text-content">
          <h1>Supercharge your productivity with AI image tools</h1>
          <p className="subheading">
            Say goodbye to tedious and time-consuming photo editing tasks and
            embrace a high-productivity workflow with an AI-assisted toolset.
          </p>
          <br></br>
          <button className="cta" onClick={() => router.push("./landing")}>TRY IT NOW</button>
        </div>
         
        <div className="image-container">
          <Image
            src={girlbook}
            alt="AI image tools"
            width={500}
            height={300}
            className="image"
          />
        </div>
      </main>
    </div>
  );
}
