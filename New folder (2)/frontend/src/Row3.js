import React from 'react'
import option1 from "./free images/user.png";
import option2 from "./free images/taxes.png";
import option3 from "./free images/download-pdf.png";
import option4 from "./free images/transaction.png";
const Row3 = () => {
    return (
        <>
            <div className="options___">
                <div className="content__ c1">
                    <h4> Transaction options</h4>
                    <span className="text_1"> Select options to update transactions and maintain reliablity  </span>
                </div>
                <div className="recent_transactions">
                    <h6 className="rt1">
                        Recent Transaction
                    </h6>
                    <div className="rt2">

                    </div>
                </div>
                <div className="options__2">
                    <h6>
                        Report options
                    </h6>
                    <div className="uni">
                        <div className="common__2 uni1">
                            <img src={option1}>
                            </img>
                            <p>
                                Profile
                            </p>
                        </div>
                        <div className="common__2 uni2">
                            <img src={option4}>
                            </img>
                            <p>
                                Transactions
                            </p>
                        </div>
                        <div className="common__2 uni3">
                            <img src={option3}>
                            </img>
                            <p>
                                Loans
                            </p>
                        </div>
                        <div className="common__2 uni4">
                            <img src={option2}>
                            </img>
                            <p>
                                Download Pdf
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Row3