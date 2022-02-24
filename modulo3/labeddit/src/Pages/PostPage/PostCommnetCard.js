import React, { useState } from "react";
import { AppBar, Button, Fab, Toolbar, TextField } from "@material-ui/core";
import { Boxdiv, WritePostContainer } from "./style";

const PostCard = (props) => {
  const [postado, setPostado] = useState("");

  const onChange = (e) => {
    setPostado(e.target.value);
    // console.log(postado);
  };

  const onClickHandler = () => {
    // console.log("teste")
    props.dataUp(postado);
    setPostado("");
  };

  return (
    <Boxdiv>
      <WritePostContainer>
        <TextField
          value={postado}
          onChange={onChange}
          fullWidth
          multiline
          rows='6'
        />
      </WritePostContainer>
      <Button onClick={onClickHandler} variant='contained' fullWidth>
        {props.buttonName}
      </Button>
    </Boxdiv>
  );
};

export default PostCard;
