import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import '@firebase/firestore'
import { useAlert } from 'react-alert'


import { app } from "../firebase/config"



const db = app.firestore();

export default function AdminAddProduct() {
    const alert = useAlert()

    const [getProductInfo, setGetProductInfo] = useState([]);

    const [fileUrl, setFileUrl] = useState(null);
    const [product, setProduct] = useState(null);
    const [description, setDescription] = useState(null);
    const [price, setPrice] = useState(null);




    const onChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL());
        console.log("fileUrl", fileUrl);

    }

    const onSubmit = async () => {
        console.log("fileUrl", fileUrl);

        if (!fileUrl || !product || !description || !price) {

            alert.show('Boş olan değer var');
        }
        db.collection("Product").add({

            fileUrl: fileUrl,
            product, product,
            description: description,
            price: price,
        });
        alert.show('Başarıyla eklendi');
    }



    return (
        <Fragment>
            <div className="container bg-primary my-3 py-4" style={{ borderRadius: 10 }}>
                <h3>Ürün eklemeyi burdan yapabilirsiniz...</h3>
                <div className="row my-5 ">
                    <div className="col-md-3 my-2">
                        Urun adı:
                    </div>
                    <div className="col-md-9">
                        <input type="text" placeholder="Kot Jeket" onChange={e => setProduct(e.target.value)} />
                    </div>
                    <div className="col-md-3 my-2">
                        Urun Acıklama:
                    </div>
                    <div className="col-md-9">
                        <input type="text" placeholder="Acıklama" onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div className="col-md-3 my-2">
                        Urun fiyat:
                    </div>
                    <div className="col-md-9">
                        <input type="text" placeholder="39" onChange={e => setPrice(e.target.value)} />
                    </div>

                    <div className="col-md-3 my-2">
                        Resim:
                    </div>
                    <div className="col-md-9">
                        <input type="file" onChange={onChange} />
                    </div>


                    <div className="col-md-12 text-center"><button type="button" class="btn btn-dark" onClick={onSubmit}>Kaydet</button>

                    </div>
                </div>


            </div>
        </Fragment>
    );

}
