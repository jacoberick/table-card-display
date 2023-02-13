const CardSection = ({ title, content, data, fullHeight }) => {
  const noDataTag = <p id="noDataTag">No available data.</p>;

  return (
    <section className={fullHeight ? "full-height" : ""}>
      <h2>{title}</h2>
      {data ? content : noDataTag}
    </section>
  );
};

export default CardSection;
