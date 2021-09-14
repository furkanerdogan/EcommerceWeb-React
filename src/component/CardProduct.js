import React from 'react'
import { Link } from "react-router-dom"
import { Rating } from "../component/CommonIndex";


function CardProduct(props) {
    /* Bu componenti .map işlemi ile yeniden düzenlemem gerekiyor çünkü er bir ürünün gideceği diğer bir sayfa olacak 
    yani kendi id'sine göre oluşacak başka bir sayfa olucak (/Kadın/Elbise/Urun1,2,3,4,5,6") */
    const id = props.id;
    const resim = props.resim;
    const ad = props.ad;
    const aciklama = props.aciklama;
    const fiyat = props.fiyat;
    const rating = props.fiyat;


    return (
        <div className="col-sm-6 col-lg-3 mb-4 mb-lg-0 mt-2 p-1 ">
            <div className="card product-card mb-4" >
                <a href="#">
                    <img className="product-image" src={resim} /></a>
                <div className="card-body">
                    <Rating rating={rating} />
                    <h5 class="card-title product">{ad}</h5>
                    <p class="card-text">{aciklama}</p>
                </div>
                <div class="card-footer">
                    <div className="row align-items-center">
                        <div className="row">
                            <Link to={'/Kadın/Elbise/' + id} className="btn btn-dark rounded-0 btn-sm mr-4 ml-4 ">Ürüne Git</Link>

                            <div className="card-price">{fiyat}₺</div>
                        </div>

                    </div>
                </div>
            </div>
        </div >



    )
}
export { CardProduct };