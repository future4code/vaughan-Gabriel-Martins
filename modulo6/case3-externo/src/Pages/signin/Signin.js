import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import classes from "./signin.module.css";
import useForm from "../../hooks/useForm";
import { gotoDasboard } from "../../routes/coordinator";
import { settingsActions } from "../../store/settings-slice";
import ButtonMade from "../../components/button/button";


const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    name: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name.length > 4) {
      dispatch(settingsActions.nameChanger(form.name))
      gotoDasboard(navigate);
    }else alert("At least 5 characters")
  };

  return (
    <div className='main'>
      <form onSubmit={onSubmit}>
        <div className={classes.input_wrapper}>
          <input
            className={classes.input_signin}
            required
            name='name'
            minLength="5"
            onChange={onChange}
            placeholder='Name... 4+ characters'
            type='text'
          />
        </div>
        <button 
        className={classes.btn_login}
        type='submit'>login</button>
      </form>
    </div>
  );
};

export default Signin;
