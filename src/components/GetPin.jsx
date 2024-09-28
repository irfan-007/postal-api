import React from "react";

function GetPin({ setClicked, pin, setPin }) {
  return (
    <div className="wrap">
      <label htmlFor="pin">Enter Pincode</label>
      <input
        id="pin"
        type="text"
        placeholder="pincode"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <button
        onClick={() => {
          // setClicked(true);
          if (pin.length != 6) {
            alert("Enter 6 digit pincode!");
            return;
          } else if (isNaN(pin)) {
            alert("Enter valied numbers only!");
            return;
          }
          setClicked(true);
        }}
      >
        Lookup
      </button>
    </div>
  );
}

export default GetPin;
