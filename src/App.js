import "./App.css";
import List from "./List";
import AddUser from "./AddUser";
import UserName from "./UserName";
import { lazy,Suspense } from "react";
// import { BrowserRouter as Router,Route ,Routes} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Link } from "react-router-dom";
import AddTodo from "./AddTodo";
import NewUser from "./NewUser";





const addUser = lazy(()=>import("./AddUser"))
const TodoList = lazy(()=> import("./List"))

function App() {
  return (<>
    {/* <Router>
    <header>
          <menu >
            <Link to="/list">TodoList</Link>{" "}
            <Link to="/user">User</Link>{" "}
            <Link to="/addUser">AddUser</Link>{" "}
          </menu>
          </header>
          <Routes>
         <Route path="/">
          {""} 
          
         

          <Route path="/list">
            <Suspense fallback={<h2>Loading this page......</h2>}>
              <List/>
            </Suspense>
          </Route>

          <Route path="/user">
            <UserName/>
          </Route>

          <Route path="/addUser">
            <Suspense fallback={<h2>Loading this page......</h2>}>
              <AddUser />
            </Suspense>
          </Route>
        
        </Routes>
    </Router>
    */}

   <Router>
      <header>
        <menu>
          <Link to="/AddTodo">TodoList</Link>{" "}
          <Link to="/UserName">UserName</Link>{" "}
          <Link to="/addUser">AddUser</Link>{" "}
        </menu>
      </header>

      <Routes>
        <Route path="/AddTodo" element={<Suspense fallback={<h2>Loading this page......</h2>}>
          <AddTodo/>
          
        <TodoList />
        </Suspense>} />
        
        {/* <Route path="/UserName" element={<UserName />} />
        <UserName/> */}
         <Route path="/UserName" element={<Suspense fallback={<h2>Loading this page......</h2>}>
          <UserName />
        </Suspense>} />

        <Route path="/addUser" element={<Suspense fallback={<h2>Loading this page......</h2>}>
          {/* <AddUser /> */}
          <AddUser/>
        </Suspense>} />
      </Routes>
    </Router>

    </>);
}
export default App;

//(
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
