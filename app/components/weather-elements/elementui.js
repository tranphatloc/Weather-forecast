import { units } from "@/utils/common-functions";
import React from "react";
/**
 * // type define
 * @typedef {Object} ElementUIProps
 * @property {import("@/utils/common-functions").WeatherElement} elementData
 */
/**
 * @param {ElementUIProps}
 */
function Elementui({ elementData }) {
  return (
    <div className="py-2 px-3 w-full text-white">
      <div className="flex flex-col bg-cyan-300  h-[110px] rounded-xl p-4 ">
        <span className="font-light text-sm">{elementData.title}</span>

        <div className=" flex flex-col">
          {elementData.content.map((c, i) => {
            return (
              <div
                className="flex items-center gap-4"
                key={`wether.content.${i}`}
              >
                {c.head !== undefined && (
                  <span className="text-sm">{c.head}</span>
                )}
                <span className="inline-flex items-center gap-1">
                  <span>{c.value}</span>

                  {c.unit !== undefined && <span>{units[c.unit]}</span>}
                </span>
              </div>
            );
          })}
        </div>
        <span className="font-light text-sm">{elementData.desc}</span>
      </div>
    </div>
  );
}

export default Elementui;
