import React from 'react';
import {useState} from 'react';

export const AddPosts = ({set}) => {
    const [getID, setID] = useState('');
    const [getText, setText] = useState('');
    const [getTime, setTime] = useState('');
    return (
        <>
        <h3> AddPosts </h3>
        <div>
        <input type="text" placeholder="ID" value={getID} 
        onChange={e => setID(e.target.value)} /><br/>
        <input type="text" placeholder="Text" value={getText} 
        onChange={e => setText(e.target.value)} /><br/>
        <input type="text" placeholder="Time" value={getTime} 
        onChange={e => setTime(e.target.value)} />
        </div>
        <button onClick={(e) => {
            fetch('http://localhost:8080/add', {method: 'POST', body: `id=${getID}&text=${getText}&time=${getTime}`,
            headers: {'Content-type': 'application/x-www-form-urlencoded'}})
            .then(fetch('http://localhost:8080/data')
            .then(response => response.json())
            .then(response => set(response))
            .then(alert(`ID: ${getID}, Text: ${getText}, Time: ${getTime} `))
            );
        }
    }> Submit</button>
    </>
    );
}
