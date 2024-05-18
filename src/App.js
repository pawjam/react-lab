import logo from './logo.svg';
import './App.css';
import {useLayoutEffect, useState} from "react";
import "milligram";

function App() {

    const [email, setEmail] = useState('pawel@gmail.com');
    const [isAuthenticated, setisAuthenticated] = useState(false);
    function handleChange(event) {
        setEmail(event.target.value);}
    let content;
    if (isAuthenticated) {

        <h2>Twój e-mail to {email}</h2>

    } else {
        content = <div>

            <input type="text" value={email} onChange={handleChange}/>
            <button>Zaloguj sie</button>
        </div>

    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {content};

        </div>
    );
}

export default App;
