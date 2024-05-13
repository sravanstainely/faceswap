"use client"
import { useState } from "react";
import HeaderNavbar from "../../components/navbar/headerNavBar";
import Footer from "../../components/footer/footer";
import Banner from "@/components/banner/banner";
import Gallery from "@/components/gallery";
import categoryData from "@/constants/categoryData";

export default function Home() {
  const keys = Object.keys(categoryData);
  const [selectedCategory, setSelectedCategory] = useState(keys[0]); // Initialize with the first category

  return (
    <>
      <HeaderNavbar />
      <div className="tabs">
        {keys.map((key) => (
          <div
            key={key}
            className={selectedCategory === key ? "active-tab" : "inactive-tab"}
            onClick={() => setSelectedCategory(key)}
          >
            {key}
          </div>
        ))}
      </div>
      <Gallery categoryName={selectedCategory} />
      <Banner />
      <Footer />
    </>
  );
}
