import { ReactNode} from "react";
import Ticker from "react-ticker";
import s from "./Marquee.module.css";

type Props = {
  children? : ReactNode[];
}

const Marquee = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Ticker offset={100}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
