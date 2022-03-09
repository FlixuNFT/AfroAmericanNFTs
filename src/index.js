import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Terms from "./terms";
import Privacy from "./privacy";
import DMCA from "./dmca";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
// import "./styles/reset.css";
import "./styles/theme.css";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/privacy' element={<Privacy />}></Route>
                <Route path='/DMCA' element={<DMCA />}></Route>
                <Route path='/terms' element={<Terms />}></Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
