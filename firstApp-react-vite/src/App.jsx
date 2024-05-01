import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import { ImCool2 } from 'react-icons/im';
import Card from "./components/card/Card";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [countFollowers, setCountFollowers] = useState(0);
  const users = [

    {
      id: 1,
      name: "Edmilton",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 2,
      name: "Vinicius",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
    {
      id: 3,
      name: "Pansanato",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png",
    },
  ];
  function handleChangeFollowers(value)
  {
      setCountFollowers(value ? countFollowers + 1 : countFollowers - 1);
  }

  return (
    <>
    <div>
      <h1 className="count-followers">Seguidores: {countFollowers} <span><ImCool2/></span> </h1>
      <div className="list-users">
        {
          users.map((user) => {
            return <Card key={user.id} userData={user} changeCount={handleChangeFollowers}/>;
          })
          // <Card name={user.name} imageUrl={user.imageUrl}/>
        }
        </div>
    </div>
    </>
  )
}