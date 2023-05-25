import React from 'react'

const Loan_grant = (props) => {
  return (
    <><div className="content__2">
    <h1> {props.name} Loan</h1>
    <span className="text_1"> Fill all the inputs specifically to update balance and maintain record</span>
  </div>
  <div className="withdraw_form">
    <form className="Wform">
      <div className="in_container1">
        <div>
          <label for="exampleInputEmail1">Person's Name</label>
          <input type="text" className="commonform" placeholder={`Enter Name`} />
        </div>
        <div>
          <label for="exampleInputEmail1">Amount</label>
          <input type="text" className="commonform" placeholder="Enter Amount" />
        </div>
        <div>
          <label for="exampleInputEmail1"> Loan-{props.name} date</label>
          <input type="text" className="commonform" placeholder="Enter Date" />
        </div>
        <div>
          <label for="exampleInputEmail1"> Mode of payment</label>
          <input type="text" className="commonform" placeholder="Enter Mode" />
        </div>
        <div>
          <label for="exampleInputEmail1"> Loan-repayment Date</label>
          <input type="text" className="commonform" placeholder="Enter Date" />
        </div>
        <div style={{
          display: "flex",
          height: "10%",
          marginTop: "4%"
        }}>
          <label >Repayment Done</label>
          <input type="checkbox" />
        </div>
      </div>
      <label for="exampleInputEmail1"> Loan-Description</label>
      <input type="text" className="common__" placeholder="Enter Descricption" />

      <button type="submit" className="button1__">Submit</button>

    </form>
  </div></>
  )
}

export default Loan_grant