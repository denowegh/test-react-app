import React from 'react';
import Logo from "../../static/img/logo.png";
import ButtonTurquoiseLink from '../ButtonTurquoiseLink';
import { ButtonTurquoise } from '../ButtonTurquoise';
import "./style.css";

const StickyHeader = () => {
    return (
        <div>
            <div className="heaader">
              <div className="logo-wrapper">
                <img className="logo" alt="Logo" src={Logo} />
                <ButtonTurquoiseLink id="CartBuy">
                      <ButtonTurquoise
                        className="button-turquoise"
                        frameClassName="button-turquoise-instance"
                        signUpForUpdatesClassName="button-turquoise-supportive-primary-dymanic-instance"
                        text="Protect me now"
                        visible={false}
                        
                      />
                </ButtonTurquoiseLink >
              </div>
                
            </div>
        </div>
    );
};

export default StickyHeader;