import React from 'react'
import Ford from "../assets/images/ford.jpg"
import {Link} from "react-router-dom"
function Featured(props) {
    
    return (

        < div className="row my-5" >
            <div className="col-12">
                <div className="heading">
                    <span>{props.name}</span>
                    <div className="customNavigation">

                    </div>
                </div>
            </div>

            <div class="card-deck m-1">
                
                {props.FeaturedData.map((postData) => {
                        return (
                    <div class="card">
                        <img src={Ford} class="img-fluid" alt="logo1" />
                        <div className="btn-group">
                            <a href="#"><i className="fas fa-shopping-cart fa-lg"></i></a>
                            <a href="#"><i class="fas fa-heart fa-lg"></i></a>
                            <Link to="/favorite" params={postData}><i class="fas fa-search fa-lg"></i></Link>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{postData.productName} </h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                        </div>
                       
                      </div>                        )
                    })}
               
            </div>


        </div >






    )
}
export { Featured };