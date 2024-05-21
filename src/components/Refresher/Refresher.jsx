import { Bars } from "react-loader-spinner";
import s from "./Refresher.module.css";

const Refresher = () => {
  return (
    <div className={s.refresher}>
      <Bars
        height="80"
        width="80"
        color="gray"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Refresher;
