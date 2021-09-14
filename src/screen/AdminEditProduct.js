import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import '@firebase/firestore'
import { useAlert } from 'react-alert'

import { app } from "../firebase/config"



const db = app.firestore();
export default function AdminEditProduct() {
    const [getProductInfo, setGetProductInfo] = useState([]);
    const [fileUrl, setFileUrl] = useState(null);
    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);


    useEffect(async () => {

        const fetchData = async () => {
            try {

                const list = [];
                await app.firestore()
                    .collection('Product')
                    .get()
                    .then(querySnapshot => {
                        querySnapshot.forEach(doc => {
                            const { fileUrl, product, description, price } = doc.data();
                            list.push({
                                id: doc.id,
                                fileUrl: fileUrl,
                                product: product,
                                description: description,
                                price: price
                            });
                        })
                    })
                setGetProductInfo(list);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="container bg-primary my-3 py-4" style={{ borderRadius: 10 }}>
            <>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Ürün adı</th>
                            <th scope="col">Ürün açıklama</th>
                            <th scope="col">Ürün fiyatı</th>
                            <th scope="col">Ürün resmi</th>

                        </tr>
                    </thead>
                    {getProductInfo.map(product => {
                        return (


                            <tbody>
                                <tr>
                                    <th scope="row">{product.id}</th>
                                    <td>                        <input type="text" placeholder={product.product} onChange={e => setProduct(e.target.value)} />
                                    </td>
                                    <td>                        <input type="text" placeholder={product.description} onChange={e => setDescription(e.target.value)} />
                                    </td>
                                    <td><input type="text" placeholder={product.price} onChange={e => setPrice(e.target.value)} />
                                    </td>
                                    <td><img src={product.fileUrl} style={{ height: 50, float: "left" }} /></td>


                                </tr>

                            </tbody>



                        );
                    })}
                </table>
            </>
        </div>



    )
}
