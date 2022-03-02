import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import GetData from "../../Services/GetPostComments/GetData";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(4),
    },
  },
}));

const BasicPagination = ({ pageToFeed }) => {
const [isLoading, setIsLoading]= React.useState(false)
const [postArraylength, setPostArraylength] = React.useState('');
const saveData =(data)=>{
   setPostArraylength(data.data.length)
}


React.useEffect(()=>{
  GetData(saveData, `?&size=10000`, setIsLoading);
}, [])



  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const onChange = (e, value) => {
    setPage(value);
    pageToFeed(value);
  };

  return (
    <div className={classes.root}>
      <Pagination 
      onChange={onChange} 
      siblingCount={1}
      boundaryCount={2} 
      page={page} count={Math.ceil(postArraylength/30)} 
      color='primary' />
    </div>
  );
};
export default BasicPagination;
