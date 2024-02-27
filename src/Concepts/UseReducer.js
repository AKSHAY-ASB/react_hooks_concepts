import React, { useReducer, useState } from 'react'


const initailState = [];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
            case "delete":
                return state.filter((contact) => {
                  return  contact.id !== action.payload.id;
                });

        default:
            return state;
    }
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initailState);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // console.log(state)

    const addContact = (e) => {
        e.preventDefault();
        const contact = {
           id:Date.now(),
           name,
           email
        }
        setName("");
        setEmail("");
        dispatch({type:"add",payload:contact})
    }
    

    return (
        <div>
            <h1>Use Reducer Hook</h1>

            <form onSubmit={addContact}>
                <input
                    type="text"
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Add</button>
            </form>

            <div>
                <ul>
                    {state.map((contact) => {
                        return (
                            <li key={contact.id}>
                                <h2>{contact.name}</h2>
                                <h2>{contact.email}</h2>
                                <div>
                                    <button onClick={() => dispatch({type:"delete", payload: {id:contact.id}})}>Delete</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default UseReducer
