import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../App.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const CreateEvent = () => {
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");
  const [desc, setDesc] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "Matches"), {
      home: home,
      away: away,
      desc: desc,
    });

    // db.collection("Matches")
    //   .add({
    //     home: home,
    //     away: away,
    //     desc: desc,
    //   })
    //   .then(() => {
    //     setLoader(false);
    //     alert("Screening Event Request has been sent👍");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setLoader(false);
    //   });

    setHome("");
    setAway("");
    setDesc("");
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Create Screening Event</h1>

      <label>Home Team</label>
      <div className="inputs">
        <input
          type="text"
          name="Home"
          value={home}
          onChange={(e) => setHome(e.target.value)}
        />
      </div>
      <label>Away Team</label>
      <div className="inputs">
        <input
          type="text"
          name="Away"
          value={away}
          onChange={(e) => setAway(e.target.value)}
        />
      </div>
      {/* <label>Date</label>
      <div className="inputs">
        <input type="date" name="date" />
      </div>
      <label>Time</label>
      <input type="time" name="time" /> */}
      <label>Match description</label>
      <textarea
        type="text"
        name="description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      {/* <label>Choose Image</label>
      <input type="image" name="image" placeholder="Choose poster" /> */}
      <button>Upload</button>
    </form>
  );
};
