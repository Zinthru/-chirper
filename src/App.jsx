import React, { Component, useState } from 'react';
import ChirpPanels from './ChirpPanels/ChirpPanels';
import Navbar from './nav/Navbar';
import Chirp from './ChirpPanels/Chirp';



function App() {
    const [inputText,setInputText]=useState("");
    const [todos,setTodos]=useState([]);


        return (
            <div className="container">
                <Navbar /> 
                <ChirpPanels inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
                <Chirp todos={todos}/>
            </div>
        )
    }


export default App;


