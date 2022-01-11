// 1. Add Users List Component that outputs below the form
//    (Add a UsersList component and go into that file.)

import React from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// 4. Import and display the UsersList below the AddUser component and pass
//    in the 'users' value, which we'll initialize with an empty array.
function App() {
  return (
    <div>
      <AddUser />
      <UsersList
          users={[]}
      />
    </div>
  );
}

export default App;
