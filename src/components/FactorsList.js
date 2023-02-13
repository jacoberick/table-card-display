const FactorsList = ({ data, noDataTag }) => {
  const getWeightDescStyle = (val) => {
    switch (val.split(" ")[0]) {
      case "Weak":
        return "red";

      case "Medium":
        return "yellow";

      default:
        return "green";
    }
  };

  return (
    <div className="factors-list">
      {data
        ? data.map((x, idx) => (
            <div key={idx} className="factor-item">
              <div className="opp-info-line">
                <h3>{x.name}</h3>
                <p className={getWeightDescStyle(x.weight.description)}>
                  {x.weight.description.split(" ")[0]}
                </p>
              </div>

              <p>{x.message}</p>
            </div>
          ))
        : noDataTag}
    </div>
  );
};

export default FactorsList;
