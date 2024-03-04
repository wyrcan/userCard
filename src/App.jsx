import user from "./user.json";
import "./user.css";
import { UserCard } from "./UserCard";

function App() {
  return (
    <UserCard
      name={user.name}
      phoneNumber={user.phoneNumber}
      age={user.age}
      address={user.address}
    />
  );
}

export default App;
