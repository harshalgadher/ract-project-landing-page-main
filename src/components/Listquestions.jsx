import React from 'react'

export const Listquestions = () => {
    return (
        <div className="container">
            <ul className="d-flex flex-column">
                <li className="d-flex justify-content-between align-items-center my-2 border-bottom py-4">
                    <span className="h4">What is included with my purchase of Avada?</span>
                    <i class="bi bi-plus-lg h4"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center my-2 border-bottom py-4">
                    <span className="h4">Are there any recurring fees?</span>
                    <i class="bi bi-plus-lg h4"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center my-2 border-bottom py-4">
                    <span className="h4">Where can I get support?</span>
                    <i class="bi bi-plus-lg h4"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center my-2 border-bottom py-4">
                    <span className="h4">Are the prebuilt websites fully customizable?</span>
                    <i class="bi bi-plus-lg h4"></i>
                </li>
                <li className="d-flex justify-content-between align-items-center my-2 border-bottom py-4">
                    <span className="h4">Why should I trust Avada?</span>
                    <i class="bi bi-plus-lg h4"></i>
                </li>
            </ul>
        </div>
    )
}
