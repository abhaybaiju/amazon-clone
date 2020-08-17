import React from 'react';
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <img
            className="home_image"
            src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/March/Fuji_TallHero_ShipATW_Modified_en_US_1x._CB419795291_.jpg"
            alt="Ship Global"></img>
            <div className="home_row">
                <Product id="1" title="Minecraft: Switch Edition (Switch)" price={700} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SL1500_.jpg"/>
                <Product id="2" title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
                 price={3000} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"/>
            </div>
            <div className="home_row">
                <Product id="3" title="Apple iPhone 7 (32GB) - Black" price={29799} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._SL1024_.jpg"/>
                <Product id="4" title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)" 
                price={3499} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"/>
                <Product id="5" title="PS4 Death Stranding (PS4)" 
                price={1524} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/81B7-Rbae3L._SL1500_.jpg"/>
            </div>
            <div className="home_row">
                <Product id="6" title="Samsung 27 inch (68.6 cm) Curved Bezel Less LED Backlit Computer Monitor" price={20698} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/71Dwx3x6m9L._SL1500_.jpg"/>
            </div>
        </div>
    )
}

export default Home;
