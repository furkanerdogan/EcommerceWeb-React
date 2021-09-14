import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useAlert } from 'react-alert'

import { Link } from 'react-router-dom'
import Ford from "../assets/images/ford.jpg"
import { addToFavorite, removeToFavorite } from '../redux/action/favoriteAction'

export default function Favorite() {
    const alert = useAlert()

    const favorite = useSelector((state) => state.productFavorite.productInFavorite)
    const dispatch = useDispatch();

    return (
        <div className="container">
            <header class="card-header">
                <h4>favoriler{favorite[0] == null ? ("(boş)") : ("")}</h4>
            </header>
            <main className="col-md-9 ">

                {favorite.map((postData, i) => {
                    return (
                        <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" >
                            <div class="media d-block d-sm-flex text-center text-sm-left">
                                <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img height={240} src={postData.image} alt="Product" /></a>
                                <div class="media-body pt-3">
                                    <h3 class="product-card-title font-weight-semibold border-0 pb-0">{postData.title}</h3>
                                    <div class="font-size-sm"><span class="text-muted mr-2">{postData.description}</span>acıklama</div>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Size:</span>8.5</div>
                                    <div class="font-size-sm"><span class="text-muted mr-2">Color:</span>Black</div>
                                    <div class="font-size-lg text-primary pt-2">${postData.price}</div>
                                </div>
                            </div>
                            <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-sm-left  text-center form-inline" >


                                <Link onClick={() => {
                                    dispatch(removeToFavorite(favorite, postData)); alert.show('Fovirilerden Kaldırıldı');
                                }} class="btn btn-outline-danger btn-sm btn-block mb-2" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-trash-2 mr-1">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </main>
        </div>
    )
}
