import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";

function Museums() {
  const hiddenTexts = [
    {
      label: "DALI THEATRE ",
      value:
        "Most fans of Salvador Dalí are familiar with the fact that the surrealist artist was born in the Costa Brava region of Catalonia Spain, but not everyone knows that this region is the best place to experience the inspirational world of Dalí.",
      illustration: require(".././Assets/imgs/11.jpg"),
    },
    {
      label: "DALI JEWELS",
      value:
        "Not only can visitors find a persistence of Dalí’s memory in these places, but such an itinerary can help visitors discover more off-beat places to round out their Costa Brava holiday. ",
      illustration: require(".././Assets/imgs/12.jpg"),
    },
    {
      label: "GALA DALI CASTLE",
      value:
        " We start by sharing information on a number of Salvador Dalí sites and attractions within Costa Brava. Then we also share information on day tours for those wanting to take a day trip from Barcelona or Girona to visit the most popular Dalí attractions. ",
      illustration: require(".././Assets/imgs/13.jpg"),
    },
    {
      label: "DALI THEATRE ",
      value:
        "Most fans of Salvador Dalí are familiar with the fact that the surrealist artist was born in the Costa Brava region of Catalonia Spain, but not everyone knows that this region is the best place to experience the inspirational world of Dalí.",
      illustration: require(".././Assets/imgs/11.jpg"),
    },
    {
      label: "DALI JEWELS",
      value:
        "Not only can visitors find a persistence of Dalí’s memory in these places, but such an itinerary can help visitors discover more off-beat places to round out their Costa Brava holiday. ",
      illustration: require(".././Assets/imgs/12.jpg"),
    },
    {
      label: "GALA DALI CASTLE",
      value:
        " We start by sharing information on a number of Salvador Dalí sites and attractions within Costa Brava. Then we also share information on day tours for those wanting to take a day trip from Barcelona or Girona to visit the most popular Dalí attractions. ",
      illustration: require(".././Assets/imgs/13.jpg"),
    },
    {
      label: "DALI BY NIGHT",
      value:
        "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
      illustration: require(".././Assets/imgs/11.jpg"),
    },
    {
      label: "DALI BY Daylight",
      value:
        "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
      illustration: require(".././Assets/imgs/12.jpg"),
    },
    // {
    //   label: "DALI BY Himself",
    //   value:
    //     "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
    //   illustration: require(".././Assets/imgs/13.jpg"),
    // },
  ];

  return (
    <div className="mt-5 container  p-o m-0">
      {/* <h2 className="">Museums</h2>
      <div
        className="accordion ms-0 ps-0 col-md-12 col-8 mb-5 mt-4"
        id="accordionExample"
      >
        {hiddenTexts.map((item, i) => {
          return (
            <div className="accordion-item mb-5 py-0" key={hiddenTexts.item}>
              <p className=" accordion__button m-0" id="headingOne">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + i}
                  // data-bs-parent="#accordionExample"
                  // aria-expanded="false"
                >
                  {item.label}
                </button>
              </p>
              <div
                id={"collapse" + i}
                className="accordion-collapse collapse  "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
                aria-expanded="false"
                // data-bs-parent="#accordionExample"
              >
                <div className="row m-0 ">
                  <div className="col-md-4 col-12">
                    <img
                      src={item.illustration}
                      alt=""
                      width={"100%"}
                      height={200}
                    />
                  </div>
                  <div className="col-md-6 col-12 ">
                    <strong>{item.label}</strong>
                    <div>
                      <p key={hiddenTexts}>{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
export default Museums;
