import React, { useState, useEffect } from "react";
import useDataApi from "../hooks/data-api.js";

export default function Profiles() {
  const [state] = useDataApi("/profiles");
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    console.log(state.data);
    if (state.data.profiles) {
      setProfiles([...state.data.profiles]);
    }
  }, [state, setProfiles]);

  return <div>hello</div>;
}
