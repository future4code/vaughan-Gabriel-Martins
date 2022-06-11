import classes from "./button.module.css";


const ButtonMade = ({children, onClick}) => { 
    return ( 
        <>
        <button 
        onClick={onClick}
        className={classes.button_Made}>{children}</button>
        </>

    )
}
export default ButtonMade; 

