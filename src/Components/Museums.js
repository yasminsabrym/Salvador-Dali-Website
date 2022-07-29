import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import logo from ".././Assets/icons/logow.png";
import a12 from ".././Assets/imgs/12.jpg";

function Museums() {
  const hiddenTexts = [
    {
      label: "DALI THEATRE ",
      value:
        "Most fans of Salvador Dalí are familiar with the fact that the surrealist artist was born in the Costa Brava region of Catalonia Spain, but not everyone knows that this region is the best place to experience the inspirational world of Dalí.",
    },
    {
      label: "DALI JEWELS",
      value:
        "Not only can visitors find a persistence of Dalí’s memory in these places, but such an itinerary can help visitors discover more off-beat places to round out their Costa Brava holiday. ",
    },
    {
      label: "GALA DALI CASTLE",
      value:
        " We start by sharing information on a number of Salvador Dalí sites and attractions within Costa Brava. Then we also share information on day tours for those wanting to take a day trip from Barcelona or Girona to visit the most popular Dalí attractions. ",
    },
    {
      label: "DALI THEATRE ",
      value:
        "Most fans of Salvador Dalí are familiar with the fact that the surrealist artist was born in the Costa Brava region of Catalonia Spain, but not everyone knows that this region is the best place to experience the inspirational world of Dalí.",
    },
    {
      label: "DALI JEWELS",
      value:
        "Not only can visitors find a persistence of Dalí’s memory in these places, but such an itinerary can help visitors discover more off-beat places to round out their Costa Brava holiday. ",
    },
    {
      label: "GALA DALI CASTLE",
      value:
        " We start by sharing information on a number of Salvador Dalí sites and attractions within Costa Brava. Then we also share information on day tours for those wanting to take a day trip from Barcelona or Girona to visit the most popular Dalí attractions. ",
    },
    {
      label: "DALI BY NIGHT",
      value:
        "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
    },
    {
      label: "DALI BY Daylight",
      value:
        "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
    },
    {
      label: "DALI BY Himself",
      value:
        "Finally, we share a suggested 5 day road trip itinerary from Barcelona that includes all the mentioned Dalí attractions plus the highlights of the Costa Brava region.",
    },
  ];
  // var arr1 = [...items, ...pics];
  // console.log(items);
  return (
    <div className="py-2">
      <div className="accordion" id="accordionExample">
        {hiddenTexts.map((item, i) => {
          return (
            <div className="accordion-item  py-0" key={hiddenTexts.item}>
              <p className=" accordion__button m-0" id="headingOne">
                <button
                  className="accordion-button "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + i}
                >
                  {item.label}
                </button>
              </p>
              <div
                id={"collapse" + i}
                className="accordion-collapse collapse show "
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="row">
                  <div className="col-md-4">
                    <img src={a12} alt="" width={160} height={200} />
                  </div>
                  <div className="col-md-7 px-2 ">
                    <strong>
                      This is the item {item.label} accordion body.
                    </strong>
                    <div>
                      <p key={hiddenTexts}>{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Museums;
