import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function ShowPost({ pin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        let res = await fetch(`https://api.postalpincode.in/pincode/${pin}`);
        let json = await res.json();
        console.log("data==", json[0].PostOffice);
        setData(json[0]);
        setFilters(json[0].PostOffice);
        setIsLoading(false);
      } catch (error) {
        console.error(" !Error while fetching API :", error.message);
        setErr(error.message);
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ textAlign: "left" }}>
      <p>Pincode : {pin}</p>
      <p>
        Message : {err ? `!Error while fetching API :${err}` : data.Message}
      </p>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) =>
          setFilters(
            data.PostOffice.filter((k) => {
              let name1 = k.Name.toLowerCase();
              let name2 = e.target.value.toLowerCase();
              return name1.includes(name2);
            })
          )
        }
      />
      <div className="cards">
        {filters.length > 0
          ? filters.map((item, i) => {
              return (
                <div key={i} className="card">
                  <div>
                    <span className="spn">Name</span> : {item.Name}
                  </div>
                  <div>
                    <span className="spn">Branch Type</span> : {item.BranchType}
                  </div>
                  <div>
                    <span className="spn">Delivery Status</span> :{" "}
                    {item.DeliveryStatus}
                  </div>
                  <div>
                    <span className="spn">District</span> : {item.District}
                  </div>
                  <div>
                    <span className="spn">Division</span> : {item.Division}
                  </div>
                  <div>
                    <span className="spn">State</span> : {item.State}
                  </div>
                </div>
              );
            })
          : "Couldn’t find the postal data you’re looking for…"}
      </div>
    </div>
  );
}

export default ShowPost;
