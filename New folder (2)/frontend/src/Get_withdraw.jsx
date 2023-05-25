import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Get_withdraw = () => {

  // const baseURL = "/getwithdrawl";
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("/getwithdrawl").then((response) => {
      console.log(response);
      setPost(response.data.withdraw);
      console.log(response.data.withdraw)
    });
  }, []);

  return (
    <>
        <h5 className="Header_row2"> Withdraw Report</h5>
      {
        post.map((item) => {
          return (
            <>
              <div class="card" style={{ marginTop: "5%" }}>
                <div class="card-body">
                  <div class="card-header">
                    <h5 class="card-title">{item.caption}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{item.amount}</h6>
                  </div>
                  <p class="card-text" style={{ textAlign: "center" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <div class="card-link">{`Date: ${item.date}`}</div>
                  <div class="card-link">{`Mode: ${item.mode}`}</div>
                </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Get_withdraw
// {

//   post.map((item) => {
//     return (
//       <>
//         {item.caption};
//       </>
//     )
//   })
// }