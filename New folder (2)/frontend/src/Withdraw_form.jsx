import axios from 'axios';
import React, { useState } from 'react'

const Withdraw_form = (props) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [mode, setMode] = useState("");
    const [Description, setDescription] = useState("");
    // console.log(title)
    function formHandle(e) {
        e.preventDefault();
        axios.post('/withdrawl', { caption:title, amount, date, mode,descripton:Description }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            console.log(res);
        });
    }
    return (
        <>

            <div className="content__2">
                <h1> {props.name} form</h1>
                <span className="text_1"> Fill all the inputs specifically to update balance and maintain record</span>
            </div>
            <div className="withdraw_form">
                <form className="Wform" onSubmit={formHandle}>
                    <div className="in_container1">
                        <div>
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" className="commonform" placeholder={`Enter ${props.name} Reason`} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div>
                            <label for="exampleInputEmail1">Amount</label>
                            <input type="number" className="commonform" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <div>
                            <label for="exampleInputEmail1"> {props.name} date</label>
                            <input type="text" className="commonform" placeholder="Enter Date" onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div>
                            <label for="exampleInputEmail1"> Mode of payment</label>
                            <input type="text" className="commonform" placeholder="Enter Mode" onChange={(e) => setMode(e.target.value)} />

                        </div>
                    </div>
                    <label for="exampleInputEmail1"> Description</label>
                    <input type="text" className="common__" placeholder="Enter Descricption" onChange={(e) => setDescription(e.target.value)}/>
                    <button type="submit" className="button1__">Submit</button>

                </form>
            </div>
        </>
    )
}

export default Withdraw_form