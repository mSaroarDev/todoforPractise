import { useState } from "react";

const ListItems = () => {
  const [text, setText] = useState("");
  const [currTasks, setTask] = useState([]);

  const showInput = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    setTask(currTasks.push(text))
  }

  return (
    <div className=" p-6 h-screen w-full flex justify-center">
      <div>
        <div className="input-area flex gap-2 text-center mb-5">
          <input
            onChange={showInput}
            type="text"
            placeholder="Input Your Task"
            className=" p-2 border border-purple-400 rounded outline-none"
          />
          <button onClick={addTask} className="btn">Add Task</button>
        </div>

        <div className="task-items">
          <ul>
            <li>
              <div className="task">
                <span className="mr-3 cursor-pointer">
                  <i className="fa-regular fa-circle"></i>
                </span>
                {currTasks.length}
              </div>

              <span>
                <i className="fa-solid fa-xmark"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
