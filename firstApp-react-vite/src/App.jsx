
import Card from "./components/card/Card";
import "./App.css";

export default function App() {
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

  return (
    <>
      <div className="list-users">
      {
        users.map((user) => {
          return <Card key={user.id} userData={user}/>;
        })
        // <Card name={user.name} imageUrl={user.imageUrl}/>
      }
      </div>
    </>
  )
}