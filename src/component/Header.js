import React from 'react'
import {
    Link
} from "react-router-dom";


import man from "../assets/images/man.jpg"
import women from "../assets/images/women.jpg"
import ford from "../assets/images/ford.jpg"

import '../Component.css';

function Header() {
    return (
        <header>
            {/* 1.part*/}
            <div className="header-top">

                <div className="container">
                    <div className="row " style={{ fontSize: 13 }} >
                        <div className="col-6 m-0">
                            Alışverişin <span className="text-danger">güvenilir</span> adresi
                        </div>
                        <div className="col-6 text-right" >
                            <ul className="list-inline" >
                                <li className="list-inline-item" ><a href="#"><i style={{ right: -550 }} className="fas fa-comments "></i> Yardım & Destek</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2.part*/}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a href="#" className="navbar-brand m-0  "><strong><Link to="/" style={{ color: "red" }}>LOGO</Link></strong></a>
                    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#mynavbar-second"
                        aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text"><i
                            className="fas fa-bars fa-1x"></i></span></button>
                    <div id="mynavbar" className="navbar-collapse">
                        <div className="container-fluid  ">
                            <div className="row">
                                <div className="col-lg-8 ">
                                    <div className="searchbox">
                                        <form>
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Arama..." />
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-danger">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 text-center text-lg-right m-0 ">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item top-user dropdown">
                                            <a href="#" className="btn btn-outline " data-toggle="dropdown"> <i className="fas fa-user"></i>Hesap </a>
                                            <div className='dropdown-menu dropdown-menu-right '>
                                                <a className="dropdown-item " href="#"><i className="fas fa-box-open"></i>Hesabım</a>
                                                <a className="dropdown-item " href="#"><i className="fas fa-box-open"></i>Siparişler</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt"></i>Çıkış Yap</a>

                                            </div>
                                            <Link to="/favorite"> <a href="#" className="btn btn-outline"> <i className="fas fa-heart"></i>Favoriler</a></Link>
                                            <Link to="/basket"><a href="#" className="btn btn-outline"> <i className="fas fa-shopping-basket"></i>Sepet</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* 3.part*/}
            <nav className="navbar navbar-expand-lg navbar-dark border-bottom p-0 ">
                <div className="container">
                    <div className="navbar-collapse collapse  justify-content-center " id="mynavbar-second">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown mega-dropdown-main ">
                                <Link className="nav-link " data-bs-toggle="dropdown">Kadın</Link>
                                <div className="dropdown-menu mega-dropdown ">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={women} /></a>

                                        </div>
                                        <div className="col-12 col-sm-8 col-md-2">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Giyim<span className="badge badge-danger">HoT</span> </a>
                                                <a href="/Kadın/Elbise" d="sd" >Elbise</a>
                                                <a href="/Kadın/T-shirt">T-shirt</a>
                                                <a href="/Kadın/Gömlek">Gömlek</a>
                                                <a href="#">Kot Pantolon</a>
                                                <a href="#">Kot Ceket</a>
                                                <a href="#">Şort</a>
                                                <a href="#">Bluz</a>
                                                <a href="#">Etek</a>
                                                <a href="#">Tesettür</a>

                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-2">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Ayakkabı<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">Topuklu Ayakkabı</a>
                                                <a href="#">Sneaker</a>
                                                <a href="#">Günlük Ayakkabı</a>
                                                <a href="#">Babet</a>
                                                <a href="#">Sandalet</a>
                                                <a href="#" className="mega-title">Aksesuar & Çanta<span className="badge badge-dark">New</span> </a>
                                                <a href="#">Çanta</a>
                                                <a href="#">Takı</a>
                                                <a href="#">Saat</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-2">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">İç Giyim<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">Pijama Takımı</a>
                                                <a href="#">Gecelik</a>
                                                <a href="#">Sütyen</a>
                                                <a href="#">Çorap</a>
                                                <a href="#" className="mega-title">Kozmetik<span className="badge badge-dark">New</span> </a>
                                                <a href="#">Parfüm</a>
                                                <a href="#">Göz Makyajı</a>
                                                <a href="#">Sak Bakımı</a>
                                                <a href="#">Ruj</a>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>


                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Erkek</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={man} /></a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-2">

                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">Erkek1</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">Erkek1</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-2">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-2">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </li>

                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Çocuk</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Ev & Yaşam</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Kozmetik</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Ayakabı & Çanta</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown">Saat & Aksesuar</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown mega-dropdown-main">
                                <Link className="nav-link " data-toggle="dropdown" >Elektronik</Link>
                                <div className="dropdown-menu mega-dropdown">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-danger">HoT</span> </a>
                                                <a href="#">Erkek1</a>
                                                <a href="#">s</a>
                                                <a href="#">sad</a>
                                                <a href="#">sad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                                <a href="#">sad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-secondary">50%</span> </a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#">happy</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                                <a href="#">happy2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3">
                                            <div className="mega-list">
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-primary">25%</span> </a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#">notbad</a>
                                                <a href="#" className="mega-title">Clothing<span className="badge badge-dark">New</span> </a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                                <a href="#">notbad2</a>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-3 d-none d-sm-block">

                                            <a href=""><img className="img-fluid" src={ford} /></a>
                                        </div>
                                    </div>
                                </div>
                            </li>





                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export { Header };