import React, { useState } from "react";
import { AppBar, Button, Fab, Toolbar, TextField } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { Boxdiv, WritePostContainer } from "./Style";

const PostCard = (props) => {
  const [postado, setPostado] = useState("");
  const initialStates = { title: "", body: "" };
  const { form, onChange, clear } = useForm(initialStates);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.dataUp(form);
    clear();
  };

  return (
    <Boxdiv>
      <form onSubmit={onSubmitHandler}>
        <WritePostContainer>
          <TextField
            name='title'
            value={form.title}
            onChange={onChange}
            placeholder='Titulo'
            fullWidth
            multiline
          />
          <TextField
            name='body'
            value={form.body}
            onChange={onChange}
            placeholder='Post'
            fullWidth
            multiline
          />
        </WritePostContainer>
        <Button type='submit' variant='contained' fullWidth>
          {props.buttonName}
        </Button>
      </form>
    </Boxdiv>
  );
};

export default PostCard;
