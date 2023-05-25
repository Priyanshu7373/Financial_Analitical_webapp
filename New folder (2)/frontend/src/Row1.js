import React from 'react'
import option1 from "./free images/cash-withdrawal.png";
import option2 from "./free images/deposit.png";
import option3 from "./free images/withdrawl_report.png";
import option4 from "./free images/deposit_report.png";
import option5 from "./free images/give_loan.png";
import option6 from "./free images/take_loan.png";
const Row1 = () => {
  return (
    <>
    <div className="content__">
          <h4> Transaction options</h4>
          <span className="text_1"> Select options to update transactions and maintain reliablity  </span>
        </div>
          <div className="options__"> 
          <ul>
            <li className="rightWale"> <img src={option1}></img> <div className="test__1"> Withdraw</div></li>
            <li className="leftWale"> <img src={option2}></img><div className="test__1"> Deposit</div></li>
            <li className="rightWale rightWale1 "> <img src={option3}></img><div className="test__1"> Get withdrawl Report</div></li>
            <li className="leftWale leftWale1"> <img src={option4}></img><div className="test__1">Get Deposit Report </div></li>
            <li className="rightWale rightWale2"> <img src={option5}></img><div className="test__1"> Grant Loan  </div></li>
            <li className="leftWale leftWale2"> <img src={option6}></img><div className="test__1">Take Loan </div></li>
           
          </ul>
          </div>
          <button className="button1__"> New Session </button>
    </>
  )
}

export default Row1