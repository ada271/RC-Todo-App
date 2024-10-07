import React, { useState } from "react";

const TodoAdd = ({ doing, setDoing }) => {
    const [button, setButton] = useState(true);

    return (
        <div>
            <header>
                <h1>TO DO APP</h1>
                <button
                    onClick={() => setButton(!button)}
                    className="btn"
                    style={{ backgroundColor: button ? "green" : "purple" }}
                >
                    {button ? "CLOSE" : "SHOW"} ADD TASK BAR
                </button>
            </header>
            {button && (
                <form action="">
                    <div className="formControl">
                        <label htmlFor="text">Task</label>
                        <input type="text" id="text" />
                    </div>
                    <div className="formControl">
                        <label htmlFor="date">Day & Time</label>
                        <input type="datetime-local" id="date" />
                    </div>
                    <button className="btn btn-submit">SUBMIT</button>
                </form>
            )}
        </div>
    );
};

export default TodoAdd;
