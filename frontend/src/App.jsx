import React from "react";
import Leaderboard from "./components/ClaimPoints";
import ClaimPoints from "./components/Leaderboard";
import History from "./components/History";
import Userlist from "./components/Userlist";
import { initialUsers } from "./assets/Data";
import { useState } from "react";
function App() {

  const [users,setUsers]=useState(initialUsers);
  const [selecteduser,setSelcteduser]=useState(null);
  const [history,setHistory]=useState([]);



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 className="text-2xl font-bold mb-4">Claim Points App</h1>

      <div>
        <Userlist users={users} onselect={selecteduser}/>
        <ClaimPoints selecteduser={selecteduser} 
          users={users}
          setUsers={setUsers}
          setSelcteduser={setSelcteduser}
          history={history}
          setHistory={setHistory}
        />
      </div>
      <Leaderboard users={users} />
      <History history={history} />
    </div>
  );
}

export default App;
