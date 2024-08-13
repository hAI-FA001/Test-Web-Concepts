import { useState } from "react";

const App = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [apiResponse, setApiResponse] = useState('');

    function onSendLoginRequest(event) {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + "/user/login",
            {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({ username: username, password: password }),
                headers: { "Content-Type": "application/json; charset=UTF-8" },
            }
        )
        .then((res) => res.json())
        .then((data) => {
            setApiResponse(data);
        });
    }
    
    function onSendLogoutRequest(event) {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + "/user/logout",
            {
                credentials: "include",
                method: "POST",
                headers: { "Content-Type": "application/json; charset=UTF-8" }
            }
            )
            .then((res) => res.json())
            .then((data) => {
                setApiResponse(data);
            });
    }

    return (
        <div className="main-container">
            <h1>Send a Request to Server</h1>
            <div className="middle-section">
                <input onInput={e => setUserName(e.target.value)} value={username} name="username" placeholder="User Name" type="text" />
                <input onInput={e => setPassword(e.target.value)} value={password} name="password" placeholder="Password" type="password" />
                <div className="btns-container">
                    <button onClick={onSendLoginRequest}>Login Request</button>
                    <button onClick={onSendLogoutRequest}>Logout Request</button>
                </div>
                <div><p>{apiResponse? apiResponse : "Response will appear here"}</p></div>
            </div>
        </div>
    );
}

export default App;