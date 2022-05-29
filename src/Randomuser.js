import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'
export default function Randomuser() {
    const [user, setUser] = useState(null)
    const [a,setA]=useState('My name is')
    const [count,setCount]=useState(0)
    const [b,setB]=useState('random person')
    const [pedding,setPedding]=useState(true)
    const getData=async()=>{
        const val=await  fetch('https://randomuser.me/api/')
        const data=await val.json(); 
        setUser(data)
        setB(`${data.results[0].name.first} ${data.results[0].name.last}`)
        setPedding(false)
    }
    useEffect(() => {
      getData() 
    }, []);
    const User=()=>{
        setA('My name is')
        setB(user.results[0].name.first+" "+user.results[0].name.last)
        setCount(1)
    }
    const Envelope=()=>{
        setA('My email is')
        setB(user.results[0].email)
        setCount(2)
    }
    const Calendar=()=>{
        setA('My age is')
        setB(user.results[0].dob.age)
        setCount(3)
    }
    const Maps=()=>{
        setA('My street is')
        setB(user.results[0].location.street.number+" "+user.results[0].location.street.name)
        setCount(4)
    }
    const Phone=()=>{
        setA('My phone is')
        setB(user.results[0].phone)
        setCount(5)
    }
    const Userlock=()=>{
        setA('My password is')
        setB(user.results[0].login.password)
        setCount(6)
    }
    const Randomuser=()=>{
                getData();
    }
    return (
        <div className='randomuser'>
            {user && (
                //console.log(user.results[0])
                <div className='sa'>
                    <header className='header'></header>
                    <div>
             <img src={user.results[0].picture.large} alt="" />
          
              <p>{a}</p>
              <h1>{b}</h1> 
                    <ul>
                        <li>
                            <button onMouseOver={User} class="icon" data-label="name">
                                <span class={`far fa-user ${count===1?'active':null}`}></span>
                            </button></li>
                        <li>
                            <button onMouseOver={Envelope} class="icon" data-label="email">
                                <span class={`far fa-envelope-open ${count===2?'active':null}`}></span>
                            </button></li>
                        <li>
                            <button onMouseOver={Calendar} class="icon active" data-label="age">
                                <span class={`far fa-calendar-times ${count===3?'active':null}`}></span>
                            </button></li>
                        <li><button onMouseOver={Maps} class="icon" data-label="street">
                            <span class={`far fa-map ${count===4?'active':null}`}></span>
                        </button></li>
                        <li><button onMouseOver={Phone} class="icon" data-label="phone">
                            <span class={`fas fa-phone ${count===5?'active':null}`}></span>
                        </button></li>
                        <li><button onMouseOver={Userlock} class="icon" data-label="password">
                            <span class={`fas fa-user-lock ${count===6?'active':null}`}></span>
                        </button></li>
                    </ul>
                     {pedding? <button className='loading'>Loading...</button>:<button onClick={Randomuser} className='loading'>Random User</button>}
                </div> </div>
            )}
        </div>
    );
}
