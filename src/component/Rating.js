import React from 'react'

function Rating(props) {
    const rating = props.rating;
    return (
        <div className="rating">
            <i className={rating >= 20 ? "text-warning fa fa-star" : rating >= 10 ? "text-warning fa fa-star-half-alt" : "text-warning fa fa-star-o"}></i>
            <i className={rating >= 40 ? "text-warning fa fa-star" : rating >= 30 ? "text-warning fa fa-star-half-alt" : "text-warning fa fa-star-o"}></i>
            <i className={rating >= 60 ? "text-warning fa fa-star" : rating >= 50 ? "text-warning fa fa-star-half-alt" : "text-warning fa fa-star-o"}></i>
            <i className={rating >= 80 ? "text-warning fa fa-star" : rating >= 70 ? "text-warning fa fa-star-half-alt" : "text-warning fa fa-star-o"}></i>
            <i className={rating >= 100 ? "text-warning fa fa-star" : rating >= 90 ? "text-warning fa fa-star-half-alt" : "text-warning fa fa-star-o"}></i>

        </div>
    )
}
export { Rating };