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
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "./../../utils/accordion";
import "./Value.css";

const Value = () => {
  return (
    <section>
      <div className="v-wrapper">
        <div className="flexCenter paddings innerWidth v-container">
          <div className="v-left">
            <div className="img-container">
              <img src="value4.jpg" alt="" />
            </div>
          </div>
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give To You</span>
            <span className="secondaryText">
              We always ready to help by providing the best services for you.
              <br />
              We believe a good place to live can make your life better
            </span>
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, index) => {
                const [className, setClassName] = useState(null);
                return (
                  <AccordionItem
                    className={`accordionItem${className}`}
                    key={index}
                    uuid={index}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="flexCenter accordionButton">
                        <AccordionItemState>
                          {({ expanded }) =>
                            expanded
                              ? setClassName("expanded")
                              : setClassName("collapsed")
                          }
                        </AccordionItemState>
                        <div className="felxCenter icon">{item.icon}</div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="felxCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
