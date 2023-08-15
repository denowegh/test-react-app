import React from 'react';
import { ButtonTurquoise } from '../../components/ButtonTurquoise';
import Logo from "../../static/img/logo.png";
import AppleLogo from '../../static/img/apple-logo-svgrepo-com-1.svg';
import FrameImage from '../../static/img/frame-1327226523.svg';
import MaskGroupImage from '../../static/img/mask-group.png';
import PathImage from '../../static/img/path.svg';
import ButtonTurquoiseLink from '../../components/ButtonTurquoiseLink';
import { useInView } from 'react-intersection-observer';
import { toggleShow } from '../../store/showSlice';
import store from '../../store';
import "./style.css";
export const FindSpywareScreen:React.FC = () => {
  
  const { ref, inView } = useInView({
    threshold: 0,onChange(inView) {
      store.dispatch(toggleShow());
    },
  });
    
    return (
        
          <div className="b">
            <div className="frame-14">
              <h1 className="header-2">
                <span className="text-wrapper-8">Stop your </span>
                <span className="text-wrapper-9">phone from being spied on</span>
              </h1>
              <p className="header-3">Try Clario, a smart anti-spy app that effectively protects your privacy.</p>
            </div>
            <div className="frame-15">
              <div className="group-8">
                <div className="group-9">
                  <div className="frame-16">
                    <div className="group-8" ref={ref}>
                    <ButtonTurquoiseLink id="CartBuy" >
                      <ButtonTurquoise
                        className="button-turquoise-supportive-primary-dymanic"
                        frameClassName="button-turquoise-instance"
                        signUpForUpdatesClassName="button-turquoise-supportive-primary-dymanic-instance"
                        text="Protect me now"
                        visible={false}
                        
                      />
                      </ButtonTurquoiseLink >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-17">
              <div className="frame-11">
                <div className="frame-18">
                  <img className="img-2" alt="Apple logo svgrepo" src={AppleLogo} />
                  <div className="text-wrapper-10">iOS</div>
                </div>
                <div className="frame-18">
                  <img className="img-2" alt="Frame" src={FrameImage} />
                  <div className="text-wrapper-10">macOS, Windows</div>
                </div>
              </div>
            </div>
            <div className="scan-wrapper">
              <div className="scan">
                <div className="group-10">
                  <div className="overlap-group-7">
                    <img className="mask-group-2" alt="Mask group" src={MaskGroupImage} />
                    <p className="for-your-safety-we-r">
                      <span className="text-wrapper-11">Find spyware</span>
                      <span className="text-wrapper-12">
                        {" "}
                        <br />
                      </span>
                      <span className="text-wrapper-13">installed on your phone.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-11">
              <div className="frame-19">
                <div className="frame-11">
                  <div className="frame-20">
                    <div className="path-wrapper">
                      <img className="path" alt="Path" src={PathImage} />
                    </div>
                  </div>
                  <div className="next-3">reveal hidden spying apps</div>
                </div>
                <div className="frame-11">
                  <div className="frame-20">
                    <div className="path-wrapper">
                      <img className="path" alt="Path" src={PathImage} />
                    </div>
                  </div>
                  <div className="next-3">stop silent location tracking</div>
                </div>
                <div className="frame-11">
                  <div className="frame-20">
                    <div className="path-wrapper">
                      <img className="path" alt="Path" src={PathImage} />
                    </div>
                  </div>
                  <div className="next-3">avoid social media hacks</div>
                </div>
                <div className="frame-11">
                  <div className="frame-20">
                    <div className="path-wrapper">
                      <img className="path" alt="Path" src={PathImage} />
                    </div>
                  </div>
                  <p className="next-3">provide 24/7 expert security help</p>
                </div>
              </div>
              <p className="text-wrapper-14">The anti-spy Clario app can:</p>
            </div>
          </div>
          
    );
};
