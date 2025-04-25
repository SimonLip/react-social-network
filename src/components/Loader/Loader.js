import react from "react";
import loader from "../../img/loader.svg";
import classes from './Loader.module.css';

let Loader = () => {
    return <img src={loader} alt="Loading..." />;
};

export default Loader;