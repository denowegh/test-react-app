import PropTypes from "prop-types";
import { ElementDownload } from "../ElementDownload";
import "./style.css";

interface Props {
  className: any;
  frameClassName: any;
  signUpForUpdatesClassName: any;
  text: string;
  visible: boolean;
  id?: string;
}

export const ButtonTurquoise = ({
  className,
  frameClassName,
  signUpForUpdatesClassName,
  text = "Dynamic Button",
  visible = true,
  id
}: Props): JSX.Element => {

  
  return (
    
      <div className={`button-turquoise ${className}`} id={id}>
        <div className={`frame ${frameClassName}`}>
          <div className="div">
            <div className={`sign-up-for-updates ${signUpForUpdatesClassName}`}>{text}</div>
            {visible && <ElementDownload union="/img/union.svg" />}
          </div>
          <div className="minimun-width" />
        </div>
      </div>
  );
};

ButtonTurquoise.propTypes = {
  text: PropTypes.string,
  visible: PropTypes.bool,
};
