import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import "./Values.css";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="innerWidth paddings flexCenter v-container">
        {/* The left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/*The right side */}

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you.{" "}
            <br />
            We beleive a good blace to live can make your life better
          </span>

          {/* The accordion section  */}
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((each, id) => {
              const [className, setClassName] = useState(null);

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={id}
                  uuid={id}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) => {
                          console.log(className);
                          return expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed");
                        }}
                      </AccordionItemState>

                      <div className="flexCenter icon">{each.icon}</div>
                      <div className="primaryText">{each.heading}</div>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{each.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
