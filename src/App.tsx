import React from "react";
import Api from "./API/Api";

function App() {
  const [response, setResponse] = React.useState<any>([])

  React.useEffect(function () {
    const Res = async () => {
      const getRes = await new Api().getApi();
      setResponse(getRes);
      console.log(getRes);
    };
    Res();
  }, []);

  return (
    <div>
      {response.map(function(weather: any){
        return (
          <>
          <p>{weather.id}</p>
          <p>{weather.title}</p>
          </>
        )
      })}
    </div>
  )
}

export default App;
