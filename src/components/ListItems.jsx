import { useState } from "react";

const ListItems = () => {
  const [text, setText] = useState("");
  const [currTasks, setTask] = useState([]);
  const [check, setCheck] = useState(false);

  const showInput = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    currTasks.push(text);
    setTask([...currTasks]);
  };

  const delTask = (index) => {
    currTasks.splice(index, 1)
    setTask([...currTasks]);
  }

  const compTask = (index) => {
    setCheck(old => !old)
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
          <button onClick={addTask} className="btn">
            Add Task
          </button>
        </div>

        <div className="task-items">
          <ul>
            {currTasks.map((taskItem, index) => {
              
              return (
                <li>
                  <div className="task">
                    <span onClick={()=>compTask(index)} className="mr-3 cursor-pointer">
                    { check ? <i className="fa-solid fa-check"></i> : <i className="fa-regular fa-circle"></i>}
                    </span>
                    {taskItem}
                  </div>
                  <span onClick={()=> delTask(index)}>
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </li>
              );

            })}


          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
