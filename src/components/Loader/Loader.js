import react from "react";
import loader from "../../img/loader.svg";
import classes from './Loader.module.css';

let Loader = () => {
    return (
        <div className={classes.loaderWrapper}>
            <img src={loader} alt="Loading..." />;
        </div>
    );
};

export default Loader;