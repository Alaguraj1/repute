import React from "react";
import CountUpContent from "@/components/common/counter";

// data
const counter_data = [
  {
    delay: ".3s",
    num: 18,
    text: "+",
    title: (
      <>
        Years in <br /> Market
      </>
    ),
  },
  {
    delay: ".5s",
    num: 50,
    text: "+",
    title: (
      <>
       Experienced  <br />
       In-House Professionals
      </>
    ),
  },
  {
    delay: ".7s",
    num: 600,
    text: "+",
    title: (
      <>
        Happy
        <br /> Clients
      </>
    ),
  },
];

const ArchitectureCounter = () => {
  return (
    <>
      <section className="counter__area counter__border-8 black-bg-12 pt-125 pb-80">
        <div className="container">
          <div className="row">
            {counter_data.map((item, i) => (
              <div key={i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div
                  className="counter__item-8 mb-40 wow fadeInUp"
                  data-wow-delay={item.delay}
                  data-wow-duration="1s"
                >
                  <div className="counter__content-8 d-flex align-items-center">
                    <h4>
                      <span className="counter">
                      <CountUpContent number={item.num} text={item.text} />
                      </span>
                    </h4>
                    <p>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ArchitectureCounter;
