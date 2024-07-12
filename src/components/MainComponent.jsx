import React from "react"
import Card from "./Card"
import electronicsImg from "../assets/electronics.png"
import medicineImg from "../assets/medicines.png"
import carsImg from "../assets/cars.png"
import plateImg from "../assets/plate.png"

export default function MainComponent() {
  return (
    <div className="cards">
      <Card
        backgroundColor="#00E0FF3D"
        buttonBackgroundColor="#00588A"
        titleColor="#00588A"
        textColor="#233E60"
        img={medicineImg}
        title="Medicines"
        text="Welcome to Heal Hub, where wellness meets convenience on your terms..."
      />
      <Card
        backgroundColor="#FFC7005E"
        buttonBackgroundColor="#665E40"
        titleColor="#00000099"
        textColor="#742D06"
        img={plateImg}
        title="Dine Ease"
        text="Dine Ease, ultimate and best destination, Ease brings you your favorite flavors..."
      />
      <Card
        backgroundColor="#FF7A0078"
        buttonBackgroundColor="#664D36"
        titleColor="#00000099"
        textColor="#742D06"
        img={carsImg}
        title="Find Cars"
        text="AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle..."
      />
      <Card
        backgroundColor="#42FF005E"
        buttonBackgroundColor="#4A6640"
        titleColor="#00000099"
        textColor="#00000099"
        img={electronicsImg}
        title="Electronics"
        text="ElectroSwift brings you the latest gadgets at your fingertips, seamless tech experience."
      />
    </div>
  );
}