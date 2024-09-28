import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Test = () => {
  const [data, setData] = useState("");
  const FetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (err) {
      console.log("Opps getting error in fetching data", err);
    }
  };
  console.log(data);

  useEffect(() => {
    FetchData();
  }, []);

  console.log(typeof data);

  return (
    <div className="container">
      <h4>UserData</h4>
      {data &&
        data.map((cur) => (
          // <div className="">
          //   <div className="row" key={cur.id}>
          //     <div className=" col-3">
          //       <label className="fs-5 fw-bold">User Title :</label>
          //       <h6 className="m-2">{cur.title}</h6>
          //     </div>
          //     <div className=" col">
          //       <label className="fs-5  fw-bold">User details :</label>

          //       <h6 className="m-2">User Body:{cur.body}</h6>
          //     </div>
          //   </div>
          // </div>

          <div className=" w-100">
            <div className="d-grid  row-cols-2" key={cur.id}>
              <div className=" ">
                <label className="fs-5 fw-bold">User Title :</label>
                <h6 className="m-2">{cur.title}</h6>
              </div>
              <div className=" ">
                <label className="fs-5  fw-bold">User details :</label>

                <h6 className="m-2">User Body:{cur.body}</h6>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Test;
