import React from 'react'
import kampanya from "../assets/images/kampanya.jpg"

function SliderCampaign() {
    return (
        <div className="container" style={{ marginTop: 15 }}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner text-center">
                    <div class="carousel-item active ">
                        <img src={kampanya} class="img-fluid" alt="logo1" />
                        <div class="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <h5>Kampanya2...</h5>
                            <p>..Kampanya Detayı. Kampanya DetayıKampanya DetayıKampanya Detayı</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={kampanya} class="img-fluid" alt="logo1" />
                        <div class="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <h5>Kampanya3...</h5>
                            <p>..Kampanya Detayı. Kampanya DetayıKampanya DetayıKampanya Detayı</p>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <img src={kampanya} class="img-fluid" alt="logo1" />
                        <div class="carousel-caption d-none d-md-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <h5>Kampanya1...</h5>
                            <p>..Kampanya Detayı. Kampanya DetayıKampanya DetayıKampanya Detayı</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>

            </div>


        </div>

    )
}
export { SliderCampaign }