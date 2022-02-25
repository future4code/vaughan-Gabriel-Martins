import React, { useState } from "react";
import { AppBar, Button, Fab, Toolbar, TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { Boxdiv, WritePostContainer } from "./style";

const PostCard = (props) => {
  // const [postado, setPostado] = useState("");
  const intialStates = { body: "" };
  const { form, onChange, clear } = useForm(intialStates);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log("teste")
    console.log(form)
    props.dataUp(form)
    clear()
  };

  return (
    <Boxdiv>
      <form onSubmit={onSubmitHandler}>
        <WritePostContainer>
          <TextField
            name='body'
            value={form.body}
            onChange={onChange}
            fullWidth
            multiline
            rows='6'
          />
        </WritePostContainer>
        <Button type="submit" variant='contained' fullWidth>
          {props.buttonName}
        </Button>
      </form>
    </Boxdiv>
  );
};

export default PostCard;
