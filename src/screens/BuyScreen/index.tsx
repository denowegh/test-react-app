import React, { useEffect, useState } from 'react';
import { IconsFeatureTurn } from '../../components/IconsFeatureTurn';
import { ButtonTurquoise } from '../../components/ButtonTurquoise';


import MoneyBackImage from '../../static/img/money-back.png';
import Union1Icon from '../../static/img/union-1.svg';
import Group1327226687Image from '../../static/img/group-1327226687.png';
import Group1327224227Image from '../../static/img/group-1327224227.png';
import Vector164Stroke from '../../static/img/vector-164-stroke.svg';
import Ellipse3306 from '../../static/img/ellipse-3306.svg';
import Vector445 from '../../static/img/vector-445.svg';
import Vector446 from '../../static/img/vector-446.svg';
import Rectangle1785 from '../../static/img/rectangle-1785.svg';
import Ellipse3305 from '../../static/img/ellipse-3305.svg';
import Group1327226548Image from '../../static/img/group-1327226548.png';
import Group1327226680Image from '../../static/img/group-1327226680.png';
import Union3Icon from '../../static/img/union-3.svg';
import Vector557 from '../../static/img/vector-557.svg';
import Union2Icon from '../../static/img/union-2.svg';
import Vector555 from '../../static/img/vector-555.svg';
import Vector556 from '../../static/img/vector-556.svg';
import "./style.css";


export const BuyScreen = () => {
  
    const initialTime = 30 * 60; // 30 минут в секундах
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
      const interval = setInterval(() => {
        if (time > 0) {
          setTime(prevTime => prevTime - 1);
        } else {
          clearInterval(interval);
        }
      }, 1000); // Каждую секунду

      return () => {
        clearInterval(interval);
      };
    }, [time]);

    const formatTime = () => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="buy">
        <div className="overlap-5">
          <div className="frame-25">
            <p className="text-wrapper-20">Start your spy-free week for as low as</p>
          </div>
          <div className="frame-26">
            <div className="group-19">
              <div className="overlap-wrapper">
                <div className="overlap-6">
                  <div className="group-20">
                    <div className="overlap-group-9">
                      
                      <div className="ellipse-7" />
                      <img className="group-21" alt="Group" src={Group1327224227Image} />
                      <div className="rectangle-9" />
                    </div>
                  </div>
                  <img className="vector-stroke" alt="Vector stroke" src={Vector164Stroke} />
                  <img className="ellipse-8" alt="Ellipse" src={Ellipse3306} />
                  <div className="group-22">
                    <div className="overlap-7">
                      <div className="group-23">
                        <div className="overlap-group-10">
                          <img className="vector-12" alt="Vector" src={Vector445} />
                          <img className="vector-13" alt="Vector" src={Vector446} />
                          <div className="ellipse-9" />
                        </div>
                      </div>
                      <div className="icons-feature-turn-wrapper">
                        <IconsFeatureTurn
                          className="icons-feature-turn-on"
                          rectangleClassName="icons-feature-turn-instance"
                          rectangleClassNameOverride="icons-feature-turn-on-instance"
                        />
                      </div>
                    </div>
                  </div>
                  <img className="rectangle-10" alt="Rectangle" src={Rectangle1785} />
                  <img className="ellipse-10" alt="Ellipse" src={Ellipse3305} />
                  <div className="ellipse-11" />
                  <div className="ellipse-12" />
                  <div className="ellipse-13" />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="frame-27" id='CartBuy'>
          <div className="group-24">
            <div className="frame-28">
              <div className="text-wrapper-21">What you get:</div>
              <div className="frame-29">
                <div className="frame-30">
                  <img className="group-25" alt="Group" src={Group1327226548Image} />
                  <div className="next-4">Protection for 3 devices</div>
                </div>
                <div className="frame-30">
                  <div className="frame-31">
                    <div className="group-26">
                      <div className="overlap-group-11">
                        <div className="group-27">
                          <div className="rectangle-11" />
                          <div className="rectangle-12" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="next-5">Anti-spy checkup</div>
                </div>
                <div className="frame-30">
                  <img className="group-25" alt="Group" src={Group1327226680Image} />
                  <p className="next-5">Unlimited access to anti-spying tools</p>
                </div>
                <div className="frame-30">
                  <div className="group-28">
                    <div className="group-29">
                      <div className="overlap-group-12">
                        <img className="union-7" alt="Union" src={Union3Icon} />
                        <img className="vector-14" alt="Vector" src={Vector557} />
                        <img className="union-8" alt="Union" src={Union2Icon} />
                        <img className="vector-15" alt="Vector" src={Vector555} />
                        <img className="vector-16" alt="Vector" src={Vector556} />
                      </div>
                    </div>
                  </div>
                  <p className="next-5">24/7 help from security experts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-32">
            <ButtonTurquoise
              className="design-component-instance-node"
              frameClassName="button-turquoise-instance"
              signUpForUpdatesClassName="button-turquoise-supportive-primary-dymanic-instance"
              text="Try for $2.99"
              visible={false}
              
            />
            <p className="text-wrapper-22">
              By clicking above, you agree to try 7 days of Clario for $2.99 as a special offer. Your subscription
              will renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your Clario
              account.
            </p>
            <div className="frame-33">
              <div className="frame-34">
                <img className="money-back" alt="Money back" src={MoneyBackImage} />
                <div className="text-wrapper-23">30-day money-back guarantee</div>
              </div>
              <div className="frame-35">
                <div className="group-30">
                  <div className="overlap-group-13">
                    <img className="union-9" alt="Union" src={Union1Icon} />
                    <div className="rectangle-13" />
                    <img className="group-31" alt="Group" src={Group1327226687Image} />
                  </div>
                </div>
                <div className="text-wrapper-24">100.000 + downloads</div>
              </div>
            </div>
          </div>
          <div className="frame-36">
            <div className="text-wrapper-25">Special offer valid for</div>
            <div className="group-32">
              <div className="text-wrapper-26">min</div>
              <div className="text-wrapper-27">{formatTime()}</div>
            </div>
          </div>
          <div className="frame-37">
            <div className="group-33">
              <div className="overlap-group-14">
                <div className="text-wrapper-28">2</div>
                <div className="text-wrapper-29">$</div>
              </div>
              <div className="text-wrapper-30">99</div>
              <div className="text-wrapper-31">/7 days</div>
            </div>
          </div>
        </div>
      </div>



    );
};
