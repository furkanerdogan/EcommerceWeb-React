import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-center text-white myfooter">
                <div className="container p-4">
                    <section className="mb-4">

                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></Link>
                    </section>

                    <section className="">

                        <div className="row">

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Mağza</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>

                                        <Link to="/login" className="text-white">Mağza Girişi</Link>
                                    </li>
                                    <li>

                                        <Link href="#!" className="text-white">Mağza grafikleri</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">İletişim</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Sitede Satış Yap</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Kampanyalar</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link href="#!" className="text-white">Aktif Kampanyalar</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Premium  Üyelik</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Fırsatlar</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Yardım</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link href="#!" className="text-white">Sıkça Sorulan Sorular</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Canlı Yardım</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">İade işlemleri</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Rehber</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase">Hakkımızda</h5>

                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <Link href="#!" className="text-white">Kariyer</Link>
                                    </li>
                                    <li>
                                        <Link href="#!" className="text-white">Link 2</Link>
                                    </li>

                                </ul>
                            </div>

                        </div>

                    </section>

                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} >
                    2021 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.

                <Link className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
                </div>

            </footer>

        )
    }
}
export { Footer };