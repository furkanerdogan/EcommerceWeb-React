import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import { useAlert } from 'react-alert'

import Breadcrumb from "../component/Breadcrumb"

import { addToCart } from '../redux/action/basketAction'
import { addToFavorite } from '../redux/action/favoriteAction'

import { detailsProduct } from '../redux/action/productActions'

export default function ProductDetailScreen() {
    const alert = useAlert()


    const getData = useParams();// pathden gelen degiskenelr
    const productId = getData.productId;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productDetails.productsDetails);
    const basket = useSelector((state) => state.productBasket.productInBasket);
    const favorite = useSelector((state) => state.productFavorite.productInFavorite)

    let history = useHistory();

    const addToFavFunc = () => {
        dispatch(addToFavorite(productId, 1));
        alert.show('Ürün Favorilere Eklendi');


    }
    const addToCartFunc = () => {
        dispatch(addToCart(productId, 1));
        alert.show('Ürün Sepete Eklendi');


    }

    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch])

    return (

        <section class=" container mb-5 py-2">
            <Breadcrumb />

            <div class="row">
                <div class="col-md-6 mb-4 mb-md-0">
                    <div class="mdb-lightbox">
                        <div class="row product-gallery mx-1">
                            <div class="col-12 mb-0">
                                <figure class="view overlay rounded z-depth-1 main-img">
                                    <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                                        data-size="710x823">
                                        <img src={data.image}
                                            class="img-fluid z-depth-1 " />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <h5>{data.title}</h5>
                    <p class="mb-2 text-muted text-uppercase small">Shirts</p>
                    <p><span class="mr-1"><strong>${data.price}</strong></span></p>
                    <p class="pt-1">{data.description}</p>
                    <div class="table-responsive">
                        <table class="table table-sm table-borderless mb-0">
                            <tbody>
                                <tr>
                                    <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
                                    <td>Shirt 5407X</td>
                                </tr>
                                <tr>
                                    <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
                                    <td>Black</td>
                                </tr>
                                <tr>
                                    <th class="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                    <td>USA, Europe</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="table-responsive mb-2">
                        <table class="table table-sm table-borderless">
                            <tbody>
                                <tr>
                                    <td class="pl-0 pb-0 w-25">Quantity</td>
                                    <td class="pb-0">Select size</td>
                                </tr>
                                <tr>
                                    <td class="pl-0">
                                        <div class="form-group mb-2">
                                            <input class="form-control form-control-sm" type="number" id="quantity1" value="1" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="mt-1">
                                            <div class="form-check form-check-inline pl-0">
                                                <input type="radio" class="form-check-input" id="small" name="materialExampleRadios"
                                                />
                                                <label class="form-check-label small text-uppercase card-link-secondary"
                                                    for="small">Small</label>
                                            </div>
                                            <div class="form-check form-check-inline pl-0">
                                                <input type="radio" class="form-check-input" id="medium" name="materialExampleRadios" />
                                                <label class="form-check-label small text-uppercase card-link-secondary"
                                                    for="medium">Medium</label>
                                            </div>
                                            <div class="form-check form-check-inline pl-0">
                                                <input type="radio" class="form-check-input" id="large" name="materialExampleRadios" />
                                                <label class="form-check-label small text-uppercase card-link-secondary"
                                                    for="large">Large</label>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <button type="button" class="btn btn-secondary btn-md mr-1 mb-2" onClick={() => { addToFavFunc() }}>Favorilere Ekle</button>

                    <button type="button" class="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
                    <button type="button" class="btn btn-light btn-md mr-1 mb-2" onClick={() => { addToCartFunc() }} >
                        <i class="fas fa-shopping-cart pr-2"></i>Add to cart</button>
                </div>
            </div>

            <div class="classic-tabs border rounded px-4 pt-1">

                <ul class="nav tabs-primary nav-justified" id="advancedTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active show" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Açıklama</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Özellikler</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Yorum</a>
                    </li>
                </ul>
                <div class="tab-content" id="advancedTabContent">
                    <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                        <h5>Product Description</h5>
                        <p class="small text-muted text-uppercase mb-2">Shirts</p>

                        <h6>12.99 $</h6>
                        <p class="pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit
                            error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio,
                            officia quis dolore quos sapiente tempore alias.</p>
                    </div>
                    <div class="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                        <h5>Additional Information</h5>
                        <table class="table table-striped table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th scope="row" class="w-150 dark-grey-text h6">Weight</th>
                                    <td><em>0.3 kg</em></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" class="w-150 dark-grey-text h6">Dimensions</th>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <h5><span>1</span> review for <span>Fantasy T-shirt</span></h5>
                        <div class="media mt-3 mb-4">
                            <img class="d-flex mr-3 z-depth-1" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" width="62" alt="Generic placeholder image" />
                            <div class="media-body">
                                <div class="d-sm-flex justify-content-between">
                                    <p class="mt-1 mb-2">
                                        <strong>Marthasteward </strong>
                                        <span></span><span>January 28, 2020</span>
                                    </p>

                                </div>
                                <p class="mb-0">Nice one, love it!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </section >

    )
}
