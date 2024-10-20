import React from "react";
import "./Contact.css";
import { MdCall, MdChat, MdMessage, MdVideoCall } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          {/* The four modes */}
          <div className="flexColCenter modes">
            <div className="flexCenter row">

              {/* Row one */}
              <div className="flexColStart mode">
                <div className="flexStart mode-info">
                  <div className="icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart action-info">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="secondaryText flexCenter mode-button">
                  Call now
                </div>
              </div>

              <div className="flexColStart mode">
                <div className="flexStart mode-info">
                  <div className="icon">
                    <MdChat size={25} />
                  </div>
                  <div className="flexColStart action-info">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="secondaryText flexCenter mode-button">
                  Chat now
                </div>
              </div>
            </div>
            <div className="flexCenter row">

              {/* Row two */}
              <div className="flexColStart mode">
                <div className="flexStart mode-info">
                  <div className="icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart action-info">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="secondaryText flexCenter mode-button">
                  Video Call now
                </div>
              </div>

              <div className="flexColStart mode">
                <div className="flexStart mode-info">
                  <div className="icon">
                    <MdMessage size={25} />
                  </div>
                  <div className="flexColStart action-info">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="secondaryText flexCenter mode-button">
                  Message now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side  */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
