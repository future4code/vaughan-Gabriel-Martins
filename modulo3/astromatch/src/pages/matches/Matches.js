import React ,{ useState , useEffect} from "react";
import {
  Card,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red, green, blue } from "@material-ui/core/colors";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import Axios from 'axios';
import clsx from "clsx";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import {UrlBase} from '../../constants/constants';

const DivBtn = styled.div`
  display: flex;
  background: red;
`;

const DivPerfil = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid black;
padding:8px;
span{ 
  margin-left: 1rem;
  font-size: 1.2rem;
}
`;

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: "400px",
    height: 500,
    margin: "20% auto",
    boxShadow: "0 0 1px 1px  black ",
  },
  cardHeaderClass: {
    borderBottom: "1px solid black",
    display: "flex",
    // justifyContent: 'center',
    alignItems: "center",
    padding: 0,
    background: green[50],
  },
  return: {
    // border: "1px solid black",
    margin: "1rem 5rem 1rem 1rem",
    height: 50,
    width: 50,
    background: blue[50],
    color: blue[700],
    "&:hover":{ 
      background: blue[900],
    }
  },
  icon:{ 
    width: 40,
    height:40,
    padding: 0,
    margin:0,
  }
});

const Main = () => {
  const classes = useStyles();
  const [match, setMatch] = useState([]);
  useEffect(()=> { 
    getMatches();
  }, [])

  const onClickReturn =( )=> { 
    console.log('onClickReturn')
  }

  const getMatches = () =>{ 

    const url = `${UrlBase}matches`

    Axios
      .get(url)
      .then(res => { 
        console.log(res)
        setMatch(res.data.matches)
      })
      .catch(err => console.log(err))
  }

  return (
    <Card className={classes.mainContainer} align='center'>
      <CardContent className={classes.cardHeaderClass}>
        <>
          <IconButton aria-label='Go back' className={classes.return}
           onClick={onClickReturn}
          >
            <ArrowBackOutlinedIcon 
              className={classes.icon}
             
              />
          </IconButton>
        </>
        <Typography align='center'>astromatch </Typography>
      </CardContent>
      <CardContent>

      {match.map((item) =>  {return <DivPerfil key={item.name}>
        <Avatar  sizes="large" alt={item.name} src={item.photo} />
        <span>{item.name}</span><span>{item.age} anos</span>
        <hr/>
        </DivPerfil>
      } )
      }
      </CardContent>
    </Card>
  );

};
export default Main;
