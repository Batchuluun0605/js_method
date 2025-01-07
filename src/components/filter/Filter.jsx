import { useState } from "react";

const allData = [
  { name: "boldoo", id: 1 },
  { name: "naraa", id: 2 },
  { name: "jijgee", id: 3 },
  { name: "sukhee", id: 6 },
  { name: "bataa", id: 4 },
  { name: "selenge", id: 7 },
  { name: "orgil", id: 5 },
];

const Filter = () => {
  const [filterData, setFilterData] = useState([]);

  const handleFunction = () => {
    const filterData = allData.filter((data) => data.id > 3);
    setFilterData(filterData);
  };

  return (
    <div>
      <div>
        <p>all data map function</p>
        {allData.map((data) => (
          <p key={data.id}>{data.name}</p>
        ))}
      </div>
      <button onClick={handleFunction}>handleFunction click</button>
      <div>
        <p>foreach data render after handlefunctin click</p>
        {filterData &&
          filterData.map((data) => <p key={data.id}>{data.name}</p>)}
      </div>
    </div>
  );
};

export default Filter;
