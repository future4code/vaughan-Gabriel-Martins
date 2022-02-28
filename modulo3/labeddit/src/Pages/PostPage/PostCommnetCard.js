import React, { useState } from "react";
import { AppBar, Button, TextField, Card } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { Boxdiv, WritePostContainer } from "./Style";


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
      <Card>
      <form onSubmit={onSubmitHandler}>
        <WritePostContainer>
          <TextField
            name='body'
            placeholder="Comentario"
            value={form.body}
            onChange={onChange}
            fullWidth
            variant="outlined"
            multiline
            rows='2'
          />
        </WritePostContainer>
        <Button type="submit" variant='contained' fullWidth>
          {props.buttonName}
        </Button>
      </form>
      </Card>
    </Boxdiv>
  );
};

export default PostCard;
