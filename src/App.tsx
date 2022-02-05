import React, { useState, useEffect } from "react";
import { api } from "./API/Api";

const App = () => {
  const [response, setResponse] = useState([""]);

  const Res = async () => {
    const getRes = await api.getApi();
    setResponse(getRes);
    console.log(getRes);
  };
  useEffect(() => {
    Res();
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      <div>{JSON.stringify(response)}</div>
    </div>
  );
};

export default App;
