import "./fill.css";

const Fill = () => {
  const nameArray = ["boldoo", "navchaa", "tsetsgee", "bat", "horol"];
  const changeNameArray = [...nameArray].fill("bolio", 3);
  const change = [...nameArray].fill(0);

  console.log(change);

  return (
    <div>
      <div>
        <h1>Name</h1>
        {nameArray.map((name) => (
          <p key={name}>{name}</p>
        ))}
      </div>
      <div>
        <h1>change the name by fill</h1>
        {changeNameArray.map((name, idx) => (
          <p key={name + idx}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Fill;
