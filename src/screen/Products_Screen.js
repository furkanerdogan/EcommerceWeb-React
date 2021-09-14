import React, { useEffect, useState } from 'react'
import Breadcrumb from "../component/Breadcrumb"
import { LoadingBox, CardProduct } from "../component/CommonIndex"
import { useSelector, useDispatch } from "react-redux"
import { listproducts } from '../redux/action/productActions';

function Products_Screen(props) {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productList.products);
    const isLoading = useSelector((state) => state.productList.isLoading);

    //normal fetch ile bu şekil yapamadım o yüzden axios ile yapıyorum.
    useEffect(() => {
        dispatch(listproducts());
    }, [dispatch])


    return (

        <section class="section-content padding-y">
            <div class="container">
                <Breadcrumb />

                <div class="row">

                    <aside class="col-md-3">

                        <div class="card">
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h6 class="title">Kategoriler</h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_1">
                                    <div class="card-body">
                                        <form class="pb-3">
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
                                                </div>
                                            </div>
                                        </form>

                                        <ul class="list-menu">
                                            <li><a href="#">Erkek  </a></li>
                                            <li><a href="#">Kadın </a></li>
                                            <li><a href="#">Çocuk  </a></li>
                                            <li><a href="#">Ayakkabı  </a></li>
                                            <li><a href="#">Ev&Yaşam </a></li>
                                            <li><a href="#">Kozmetik</a></li>
                                            <li><a href="#">Saat&Takı </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h6 class="title">Markalar </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_2">
                                    <div class="card-body">
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Mavi
        <b class="badge badge-pill badge-light float-right">120</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">LCW
        <b class="badge badge-pill badge-light float-right">15</b>  </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Defacto
        <b class="badge badge-pill badge-light float-right">35</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Colins
        <b class="badge badge-pill badge-light float-right">89</b> </div>
                                        </label>
                                        <label class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" />
                                            <div class="custom-control-label">Defacto
        <b class="badge badge-pill badge-light float-right">30</b>  </div>
                                        </label>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h6 class="title">Fiyat Aralığı </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_3">
                                    <div class="card-body">
                                        <input type="range" class="custom-range" min="0" max="100" name="" />
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label>Min</label>
                                                <input class="form-control" placeholder="$0" type="number" />
                                            </div>
                                            <div class="form-group text-right col-md-6">
                                                <label>Max</label>
                                                <input class="form-control" placeholder="$1,0000" type="number" />
                                            </div>
                                        </div>
                                        <button class="btn btn-block btn-primary">Apply</button>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h6 class="title">Beden </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse show" id="collapse_4">
                                    <div class="card-body">
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> XS </span>
                                        </label>
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> SM </span>
                                        </label>
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> LG </span>
                                        </label>
                                        <label class="checkbox-btn">
                                            <input type="checkbox" />
                                            <span class="btn btn-light"> XXL </span>
                                        </label>
                                    </div>
                                </div>
                            </article>
                            <article class="filter-group">
                                <header class="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" class="">
                                        <i class="icon-control fa fa-chevron-down"></i>
                                        <h6 class="title">Daha fazla filtre </h6>
                                    </a>
                                </header>
                                <div class="filter-content collapse in" id="collapse_5">
                                    <div class="card-body">
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" checked="" class="custom-control-input" />
                                            <div class="custom-control-label">Any condition</div>
                                        </label>
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Brand new </div>
                                        </label>
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Used items</div>
                                        </label>
                                        <label class="custom-control custom-radio">
                                            <input type="radio" name="myfilter_radio" class="custom-control-input" />
                                            <div class="custom-control-label">Very old</div>
                                        </label>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </aside>

                    <main class="col-md-9">
                        {isLoading ? (<LoadingBox></LoadingBox>) : (<div className="row">
                            {data.map((postData) => {
                                return (
                                    <CardProduct id={postData.id} ad={postData.title} aciklama={postData.description} fiyat={postData.price} resim={postData.image} />

                                )
                            })};

                        </div>)}

                    </main>

                </div>
            </div>
        </section>





    );
}
export default Products_Screen;