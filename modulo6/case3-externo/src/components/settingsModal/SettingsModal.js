import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import classes from "./settingsModal.module.css";
import { settingsActions } from "../../store/settings-slice";
import useForm from "../../hooks/useForm";
import ButtonMade from "../button/button";

const SettingsModal = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(settingsActions.toggle());
    clear();
  };

  const clickNameHandler = () => {
    dispatch(settingsActions.nameChanger(form.name));
    window.alert("Name changed!");
  };

  const clickThemehandler = () => {
    dispatch(settingsActions.theme());
  };

  const nameUser = useSelector((state) => state.setting.userName);

  const { onChange, clear, form } = useForm({
    name: nameUser,
  });

  return (
    <div className={classes.mainBox} onClick={closeModal}>
      <div className={classes.whiteBox} onClick={(e) => e.stopPropagation()}>
        <div>
          <ButtonMade onClick={clickThemehandler}>theme</ButtonMade>
        </div>
        <div>
          <input
            className={classes.inputName}
            name='name'
            placeholder='name'
            value={form.name}
            onChange={onChange}
          />
        <div>
          <button className={classes.btn_add} onClick={clickNameHandler}>
            <AddOutlinedIcon sx={{ fontSize: "0.8rem" }} />
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
