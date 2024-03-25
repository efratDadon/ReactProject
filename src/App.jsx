import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { MyHome } from './components/Home';
import { About } from './components/about'
import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/user.context';


function App() {


  const user = useContext(UserContext)
  console.log(user[0])

  return (
    <>
      <header>
        <MyHome />
        <About />
        <h1>hello to -{user[0]}</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='sighin' >התחבר לאתר</Link>
          </li>
          <li>
            <Link to={'signup'}>הרשם לאתר</Link>
          </li>
          <li>
            <Link to={'formMetting'}>קבע פגישה</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>

    </>
  );
}


export default App;
