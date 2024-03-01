import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Finding the right personality in clothing involves understanding your
          own style preferences, experimenting with different looks, and being
          true to your authentic self. Pay attention to how different clothing
          styles make you feel and express your personality and values through
          your fashion choices.
        </p>
        <p>
          Dressing well can significantly impact our confidence levels. When we
          dress in a way that makes us feel good, our confidence soars. Wearing
          clothes that align with our personal style, flatter our body type, and
          reflect our unique taste enhances our self-esteem. Dressing well
          boosts our self-image and empowers us to face the world with
          confidence and poise.
        </p>
      </div>
    </div>
  );
};
export default DescriptionBox;
