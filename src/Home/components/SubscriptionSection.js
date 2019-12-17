import React from "react";

import CheckIcon from "../../assets/images/icons/check-icon.png";

const SubscriptionSection = () => {
  return (
    <section className="subscription-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="sub-text">
              <h2>Subscription from $15/month</h2>
              <h3>Start a free trial now</h3>
              <p>
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas accumsan lacus vel
                facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <a href="#" className="site-btn">
                Try it now
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="sub-list">
              <li>
                <img src={CheckIcon} alt="" />
                Play any track
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                Listen offline
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                No ad interruptions
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                Unlimited skips
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                High quality audio
              </li>
              <li>
                <img src={CheckIcon} alt="" />
                Shuffle play
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
