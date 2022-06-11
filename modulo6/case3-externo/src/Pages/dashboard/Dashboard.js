import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { Header } from "../../components/header/Header";
import { todoActions } from "../../store/todo-slice";
import useForm from "../../hooks/useForm";
import SettingsModal from "../../components/settingsModal/SettingsModal";
import classes from "./dashboard.module.css";
import Cards from "../../components/card/Cards";
import { gotoLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selection, setSelection] = React.useState("incompleted");
  const { form, clear, onChange } = useForm({
    todo: "",
  });

  const showModal = useSelector((state) => state.setting.modalisVisible);
  const todosIncompleted = useSelector(
    (state) => state.todo.todoInputIncompleted
  );
  const nameUser = useSelector((state) => state.setting.userName);

  useEffect(() => {
    if (!nameUser) {
      gotoLogin(navigate);
    }
  }, [nameUser]);

  const todoReverted = [...todosIncompleted].reverse();

  const todoIncompletedToScreen = todoReverted
    .filter((todo) => todo.status === "incompleted")
    .map((todo) => {
      return (
        <Cards key={todo.id} itemClassName={classes.incompleted} todo={todo} />
      );
    });

  const todoCompletedToScreen = todosIncompleted
    .filter((todo) => todo.status === "completed")
    .map((todo) => {
      return (
        <Cards key={todo.id} itemClassName={classes.completed} todo={todo} />
      );
    });

  const todoAllListToScreen = [...todosIncompleted]
    .sort((a, b) => a.date - b.date)
    .map((todo) => {
      if (todo.status === "completed") {
        return (
          <Cards key={todo.id} itemClassName={classes.completed} todo={todo} />
        );
      }
      if (todo.status === "incompleted") {
        return (
          <Cards
            key={todo.id}
            itemClassName={classes.incompleted}
            todo={todo}
          />
        );
      }
    });

  const addTodoHandler = () => {
    if (form.todo.trim().length >= 1) {
      dispatch(todoActions.todoIncompleted(form.todo));
      clear();
    } else alert("Cannot be added is empty!");
  };

  useEffect(() => {
    if (nameUser && todosIncompleted.length > 0) {
      const statebyUserName = {
        nameUser,
        todos: todosIncompleted,
      };
      localStorage.setItem(nameUser, JSON.stringify(statebyUserName));
    }
  }, [addTodoHandler]);

  const themeFromStore = useSelector((state) => state.setting.themeName);

  const theme = themeFromStore ? "dark" : "light";

  useEffect(() => {
    localStorage.setItem("theme", themeFromStore);
  }, [themeFromStore]);

  const selectHandler = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div data-theme={theme}>
      {showModal && <SettingsModal />}

      <Header />
      <div className={classes.mainBox}>
        <div className={classes.aside}>
          <select name='select' onChange={selectHandler}>
            <option value='incompleted'>Still toDo</option>
            <option value='completed'>Completed</option>
            <option value='all'>All</option>
          </select>
          {selection === "incompleted" && todoIncompletedToScreen}
          {selection === "completed" && todoCompletedToScreen}
          {selection === "all" && todoAllListToScreen}
        </div>
        <div className={classes.main}>
          <div className={classes.addTodo}>
            <h3>Add Todo</h3>
            <div className={classes.inputadd}>
              <input
                className={classes.inputAddTodo}
                name='todo'
                value={form.todo}
                onChange={onChange}
                required
                placeholder='type todo here...'
              />
              <button 
              className={classes.btn_add}
              onClick={addTodoHandler}>
                <AddOutlinedIcon 
                sx={{fontSize:"1.5rem"}}/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
