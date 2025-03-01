import React from "react";
import "../../styles/dashboard.css"; // Importing the CSS file
import greenshirt from "../images/greenshirt.jpg";
import redsweater from "../images/redsweater.jpg";
import brownjumper from "../images/brownjumper.jpg";
import Image from "next/image";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="logo">P</div>
        <nav>
          <ul>
            <li><a href="#" className="active">My Products</a></li>
            <li>Create</li>
            <li>SEO Keywords</li>
            <li>Clean Up</li>
            <li>Upscaler</li>
            <li>Remove Background</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <h1>Add New Product</h1>
          <button className="upgrade-btn">Upgrade to Pro</button>
        </header>

        <div className="upload-section">
          <button className="upload-btn">+ Start Uploading</button>
          <p>Drag & drop anywhere to add product</p>
        </div>

        <section className="product-section">
          <h2>My Products <span className="product-limit">Monthly Product Limit 0/1</span></h2>
          <div className="product-grid">
            <div className="product-card">
              <Image src={greenshirt} alt="Green Shirt" width={500} height={300} />
              <p className="product-title">Green Shirt Example</p>
              <div className="tags">
                <span>Men's Clothing</span>
                <span>Polo Shirt</span>
              </div>
            </div>
            <div className="product-card">
              <Image src={redsweater} alt="Red Sweater" width={500} height={300}/>
              <p className="product-title">Red Sweater Example</p>
              <div className="tags">
                <span>Women's Clothing</span>
                <span>Sweater (Pullover)</span>
              </div>
            </div>
            <div className="product-card">
              <Image src={brownjumper} alt="Brown Jumper" width={500} height={300}/>
              <p className="product-title">Brown Jumper Example</p>
              <div className="tags">
                <span>Women's Clothing</span>
                <span>Sweater (Pullover)</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;
