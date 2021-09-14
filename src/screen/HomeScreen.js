import React, { useEffect, useState } from 'react';
import axios from "axios";
import { SliderCampaign, Featured } from "../component/CommonIndex"
import ford from "../assets/images/ford.jpg"

const FeaturedData=[{
productName:"Haylou gt1",
productDescription:"Haylou gt1 açıklaması",
productPrice:160,

},
{
productName:"Elektrik Süpürgesi",
productDescription:"5G bluetooth",
productPrice:160,

},
{
productName:"Gömlek",
productDescription:"5G bluetooth",
productPrice:160,

},
];




function HomeScreen() {


    return (
        <div>
            <div className="container">

                <SliderCampaign />
              
                            <Featured  name="Featured" FeaturedData={FeaturedData} />
                           
               
               
                {/* <div className="row">
                    {DATA.map((postData) => {
                        return (
                            <CardProduct ad={postData.ad} acıklama={postData.acıklama} fiyat={postData.fiyat} />
                        )
                    })}
                </div>*/}
            </div>
        </div>
    )
}

export default HomeScreen;

