import "./slice.css";
const Slice = () => {
  const data = "202406052000";

  return (
    <div>
      <p>{data}</p>
      <p>slice year {data.slice(0, 4)}</p>
      <p>slice month {data.slice(4, 6)}</p>
      <p>slice day {data.slice(6, 8)}</p>
      <p>
        slice time {data.slice(8, 10)}:{data.slice(10, 12)}
      </p>
    </div>
  );
};

export default Slice;
