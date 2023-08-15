import React, { useEffect } from "react";
import "./style.css";

import { Group12Screen } from "../Group12Screen";
import { GroupScreen } from "../GroupScreen";
import { BuyScreen } from "../BuyScreen";
import Logo from "../../static/img/logo.png";
import { FindSpywareScreen } from "../FindSpywareScreen";
import store, { RootState } from "../../store";
import StickyHeader from "../../components/StickyHeader";
import { useSelector } from "react-redux";
export const Lp:React.FC = () => {
  const isHeaderEnabled = useSelector((state:RootState) => state.showHeader.isEnabled);

  
  return (
    <div className="LP">
      <div className="div-2">

        <GroupScreen/>
        
        <div className="overlap-4">
          <FindSpywareScreen/>
            {isHeaderEnabled ?
            (<div className="heaader">
              <div className="logo-wrapper">
                <img className="logo" alt="Logo" src={Logo} />
              </div>
            </div>)
            :
            <StickyHeader/>        
            }
        </div>

        <Group12Screen/>
        
        <BuyScreen/>

      </div>
    </div>
  );
};
