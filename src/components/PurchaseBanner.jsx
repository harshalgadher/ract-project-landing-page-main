import React from 'react'

export const PurchaseBanner = () => {
  return (
    <div className="container">
        <div className="row bg-color minu-m">
            <div className=" col-12 col-md-6">
                <div>
                    <div className="pr-banner">
                        <h2 className="display-5 fw-bolder">Build Successful Websites With Avada</h2>
                        <p className="h5 my-4">Whether you are a beginner, marketer, or professional, Avada has the tools & resources you can rely on to succeed.</p>
                        <div>
                            <button className="btn fs-5 btn-dark py-3 px-5">
                                Buy Avada for $69  →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="">
                    <img src="https://avada.com/wp-content/uploads/2021/07/footer-cta-600x369.png" alt="banner-img" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
  )
}
