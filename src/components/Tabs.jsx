import React, { useState } from "react";

export const Tabs = ({tabsData}) => {
  const [selectedTabs, setSelectedTabs] = useState(0);
  // console.log(tabsData);
  // console.log(selectedTabs);

  return (
    <div className="max-w-2xl min-h-[250px] mx-auto rounded border border-slate-400 ">
      <article className="flex divide-x divide-slate-700">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTabs(index)}
            className="w-full p-4 uppercase font-medium bg-slate-200 hover:bg-slate-300 text-slate-800"
          >
            {tab.title}
          </button>
        ))}
      </article>


      <article className="text-slate-100 px-6 pt-6 pb-10">
          <p className="text-2xl font-semibold mb-2">
            {tabsData[selectedTabs].heading}
          </p>
          <p>{tabsData[selectedTabs].text}</p>

      </article>
    </div>
  );
};
