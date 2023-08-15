import React, { useState } from 'react';
import { SeparatePxArrow } from '../../components/SeparatePxArrow';
import { ButtonTurquoise } from '../../components/ButtonTurquoise';

import Union4Icon from '../../static/img/union-4.svg';
import Union5Icon from '../../static/img/union-5.svg';
import Group1327226642Image from '../../static/img/group-1327226642.png';
import Group1327226642Image2 from '../../static/img/group-1327226642-2.png';
import ClarioLogo from '../../static/img/clario-logo-v02.svg';
import ButtonTurquoiseLink from '../../components/ButtonTurquoiseLink';
import ReviewComponent from '../../components/ReviewComponent';

import {ReviewComponentProps} from "../../components/ReviewComponent";

import "./style.css";

const reviews: ReviewComponentProps[] = [
  {
      imageSrc: Group1327226642Image2,
      text: "Great service! They were an amazing help with making sure my device is secure.",
      author: "Megan_N",
      imgClass: "group-14",
      textClass: "text-wrapper-15",
      authorClass: "text-wrapper-16",
      rootClass: 'element'
  },
  {
      imageSrc: Group1327226642Image,
      text: `The best app you could find! \n I had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.`,
      author: "Shahu Sardar",
      imgClass: "group-14",
      textClass: "the-best-app-you",
      authorClass: "text-wrapper-17",
      rootClass: 'element'
  },
  {
      imageSrc: Group1327226642Image,
      text: `Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change`,
      author: "Zagkri",
      imgClass: "group-16",
      textClass: "text-wrapper-18",
      authorClass: "text-wrapper-19",
      rootClass: 'element'
  },
  {
      imageSrc: Group1327226642Image,
      text: "It is a great application to protect yourself from hackers.",
      author: "Manweet",
      imgClass: "group-13",
      textClass: "text-wrapper-15",
      authorClass: "text-wrapper-16",
      rootClass: 'element'
  }
];


export const Group12Screen:React.FC = () => {
  const [ viewElement , setviewElement ] = useState(0);

  function OnClickDecrement() {
    setviewElement(viewElement - 1 < -2 ? -2 : viewElement - 1);
  }
  function OnClickIncrement() {
    setviewElement(viewElement + 1 > 1 ? 1 : viewElement + 1);
  }

    return (
        <div className="group-12">
          <div className="frame-21">
            <div className="overlap-group-8">
              <div className="rectangle-8" />
              <div className="reviews" style={{
                left:`${viewElement * 284}px`
              }}>
              {reviews.map((review, index) => (
                <ReviewComponent
                    key={index}
                    imageSrc={review.imageSrc}
                    text={review.text}
                    author={review.author}
                    imgClass={review.imgClass}
                    textClass={review.textClass}
                    authorClass={review.authorClass}
                    rootClass={review.rootClass}
                />))}
              </div>
              <div className="group-17">
                <div className="separate-arrow-wrapper" onClick={OnClickDecrement}>
                  <SeparatePxArrow
                    className="separate-24px-arrow-right"
                    separateArrowElementArrowLeftUnion={Union4Icon} 
                    separateArrowElementArrowLeftUnionClassName={undefined} />
                </div>
                <div className="separate-px-arrow-wrapper" onClick={OnClickIncrement}>
                  <SeparatePxArrow
                    className="separate-24px-arrow-right"
                    separateArrowElementArrowLeftUnion={Union5Icon}
                    separateArrowElementArrowLeftUnionClassName="separate-arrow-instance"
                  />
                </div>
              </div>
              <p className="header-4">Let’s hear what real Clario users say.</p>
            </div>
          </div>
          <div className="group-18">
            <footer className="footer">
              <div className="frame-24">
                <img className="clario-logo" alt="Clario logo" src={ClarioLogo} />
                <p className="element-clario-all-r">
                  © 2023 Clario Tech DMCC
                  <br />
                  All rights reserved.
                </p>
              </div>
            </footer>
            <div className="b-2">
              <div className="frame-14">
                <p className="header-2">
                  <span className="text-wrapper-8">Stop your </span>
                  <span className="text-wrapper-9">phone from being spied on</span>
                  <span className="text-wrapper-8">.</span>
                </p>
              </div>
              <div className="frame-15">
                <div className="group-8">
                  <div className="group-9">
                    <div className="frame-16">
                      <div className="group-8">
                        <ButtonTurquoiseLink id="CartBuy">
                          <ButtonTurquoise
                          className="button-turquoise-supportive-primary-dymanic"
                          frameClassName="button-turquoise-instance"
                          signUpForUpdatesClassName="button-turquoise-supportive-primary-dymanic-instance"
                          text="Protect me now"
                          visible={false}
                          
                          />
                        </ButtonTurquoiseLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};
