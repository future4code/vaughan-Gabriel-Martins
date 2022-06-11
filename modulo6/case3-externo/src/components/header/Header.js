import React from "react";
import { useDispatch } from "react-redux";

import styles from "./header.module.css";
import { settingsActions } from "../../store/settings-slice";
import { gotoLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router";
import ButtonMade from "../button/button";

export const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const settingsHandler = ()=> { 
    dispatch(settingsActions.toggle())
  }

  return (
    <div className={styles.mainBoxHeaders}>
      <div>
        <ButtonMade
        onClick={settingsHandler}
        >Settings</ButtonMade>
      </div>
      <div className={styles.largerText}><h1>Not Another TODO List</h1></div>
      <div className={styles.smallText}><h1>TODO</h1></div>
      <div>
        <ButtonMade
        title="Logout"
        onClick={()=>gotoLogin(navigate)}
        >Logout</ButtonMade>
      </div>
    </div>
  );
};
