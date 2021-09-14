import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

import { addToCart, removeToCart } from '../redux/action/basketAction'

export default function BasketScreen() {
    const alert = useAlert()

    const data = useSelector((state) => state.productBasket.productInBasket)
    console.log("sadasdasdas");

    let totalPrice = data.reduce((total, item) => (total += JSON.parse(item.price)), 0);
    const dispatch = useDispatch();

    return (

        <div class="container py-2">
            <header class="card-header">
                <h4>Sepetim{data[0] == null ? ("(boş)") : ("")}</h4>
            </header>
            <div class="d-flex flex-row-reverse">
                <aside class="col-md-3 ">
                    <div class="card">
                        <div class="card-body">
                            <h3 style={{ marginBlock: 20 }}>Sipariş Özeti</h3>
                            <table>
                                <tbody>

                                    {data.map((postData, i) => {
                                        return (
                                            <tr>
                                                <td>{i + 1}.Ürün Toplamı</td>
                                                <td>{postData.price}</td>
                                            </tr>
                                        )
                                    })}

                                    <tr>
                                        <td>Kargo Toplam</td>
                                        <td>--</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <table>
                                <tfoot>
                                    <tr>
                                        <td>Toplam Fiyat</td>
                                        <td>{totalPrice}₺</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <a href="#" class="btn btn-warning">Sepeti Onayla</a>
                    </div>
                </aside>
                <main className="col-md-9 ">
                    {data.map((postData, i) => {
                        return (
                            <div class="d-sm-flex justify-content-between my-4 pb-4 border-bottom" key={i}>
                                <div class="media d-block d-sm-flex text-center text-sm-left">
                                    <a class="cart-item-thumb mx-auto mr-sm-4" href="#"><img height={240} src={postData.image} alt="Product" /></a>
                                    <div class="media-body pt-3">
                                        <h3 class="product-card-title font-weight-semibold border-0 pb-0"><a href="#">{postData.title}</a></h3>
                                        <div class="font-size-sm"><span class="text-muted mr-2">Açıklama:</span>{postData.description}</div>
                                        <div class="font-size-sm"><span class="text-muted mr-2">Size:</span>8.5</div>
                                        <div class="font-size-sm"><span class="text-muted mr-2">Color:</span>Black</div>
                                        <div class="font-size-lg text-primary pt-2">${postData.price}</div>
                                    </div>
                                </div>
                                <div class="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-sm-left  text-center form-inline" >

                                    {/* <div class="form-group mb-2">
                                        <button className="adet " > <i class="fas fa-minus"></i></button>
                                        <input className="form-control form-control-sm " type="text" pattern="[0-9]*" value="5" size="4" />
                                        <button className="adet " > <i class="fas fa-plus"></i></button>

                                    </div> */}
                                    <Link onClick={() => {
                                        dispatch(removeToCart(data, postData)); alert.show('Ürün Silme Başarılı');
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
        </div>
    )
}
