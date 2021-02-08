import {useState} from 'react'
import { auth, provider } from "./firebase";
import './App.css';
import FilesView from './components/filesView/FilesView';
import Header from './components/header'
import Sidebar from './components/sidebar'
import SideIcons from './components/sideIcons'
import GDriveLogo from './media/Google_Drive_Logo.png'

function App() {

  const[user, setUser] = useState()

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
        ) : (
            <div className='app__login'>
              <img src={GDriveLogo} alt="Google Drive" />
              <button onClick={handleLogin}>Iniciar Sessão no Google Drive</button>
            </div>
          )
      }
    </div>
  );
}

export default App;
