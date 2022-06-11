import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DoneIcon from "@mui/icons-material/Done";
import classes from "../../Pages/dashboard/dashboard.module.css";

const Cards = ({ todo, itemClassName }) => {
  const dispatch = useDispatch();

  const clickHandlertoCompleted = (item) => {
    const transformCompleted = { ...item, status: "completed" };
    dispatch(todoActions.todoCompleted(transformCompleted));
  };

  const clickHandlerDelete = (item) => {
    const transformtoDeleted = { ...item, status: "deleted" };
    dispatch(todoActions.todoDeleted(transformtoDeleted));
  };

  return (
    <div key={todo.id} className={`${itemClassName} ${classes.card} `}>
      {todo.status === "incompleted" ? (
        <div className={classes.todoname}>
          <div className={classes.todoname_box}>{todo.todo}</div>
          <div className={classes.todoname_boxbtn}>
            <button
              style={{ padding: " 0 " }}
              onClick={() => clickHandlertoCompleted(todo)}
            >
              <DoneIcon />
            </button>
          </div>
        </div>
      ) : (
        <div className={classes.todoname}>
          <div className={classes.todoname_box}>{todo.todo}</div>
          <div className={classes.todoname_boxbtn}>
            <button
              style={{ padding: "0" }}
              onClick={() => clickHandlerDelete(todo)}
            >
              <DeleteForeverIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
