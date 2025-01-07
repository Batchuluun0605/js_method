import "./every.css";

const Every = () => {
  const arr1 = [2, 5, 12, 8, 9];
  const arr2 = [3, 5, 18, 23, 20];

  const isBigEnough = (currentValue) => currentValue >= 3;

  const arr1Click = () => {
    console.log(arr1.every(isBigEnough));
  };

  const arr2Click = () => {
    console.log(arr2.every(isBigEnough));
  };
  return (
    <div>
      check console after click arr1 or arr2 button
      <div className="btn-container">
        <button className="button" onClick={arr1Click}>
          arr1
        </button>
        <button className="button" onClick={arr2Click}>
          arr2
        </button>
      </div>
    </div>
  );
};

export default Every;
