/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TabsComponent = ({ items, title, secTitle }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <section className="w-full max-w-6xl px-2 py-10 mx-auto lg:px-12">
      <section className="flex items-start justify-between">
        <section>
          <h4 className="mb-[-0.25rem] text-md text-slate-100">{secTitle}</h4>
          <h3 className="text-xl font-bold uppercase text-slate-100">
            {title}
          </h3>
        </section>
        <section>
          <button
            className="px-3 py-1 text-xs font-black tracking-wider uppercase bg-slate-100 rounded-3xl"
            onClick={() => {
              navigate("/catalog/fall");
            }}
          >
            shop all
          </button>
        </section>
      </section>
      <div className="flex items-start pt-3 pb-12 text-xs">
        <div className="flex flex-col w-full max-w-[13rem] gap-y-2">
          <div className="flex items-center justify-between p-1 font-bold text-white border-2 border-red-800 rounded-3xl gap-x-2">
            {items.map((item, index) => (
              <button
                ref={index === 0 ? firstBtnRef : null}
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`outline-none w-full py-1 rounded-3xl text-center uppercase ${
                  selectedTab === index ? " bg-red-800 text-slate-100" : ""
                } `}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="p-2 bg-white rounded-3xl">
            {items.map((item, index) => (
              <div
                key={item}
                className={`${selectedTab === index ? "" : "hidden"}`}
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsComponent;
