import React from 'react';

export interface ReviewComponentProps {
    imageSrc: string;
    rootClass: string;
    imgClass: string;
    authorClass: string;
    author: string;
    text: string;
    textClass: string;
}

const ReviewComponent: React.FC<ReviewComponentProps> = ({
    imageSrc,
    rootClass,
    imgClass,
    authorClass,
    author,
    text,
    textClass,
}) => {
    return (
        <div className={rootClass}>
            <img className={imgClass} alt="Group" src={imageSrc} />
            <p className={textClass}>
                {text}
            </p>
            <div className={authorClass}>{author}</div>
        </div>
    );
};

export default ReviewComponent;
