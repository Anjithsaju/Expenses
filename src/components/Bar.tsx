function Bar() {
  return (
    <>
      <div
        className="progress"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-success" style={{ width: "25%" }}>
          {" "}
          Breakfast
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow={50}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar bg-info text-dark"
          style={{ width: "50%" }}
        >
          Lunch
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar bg-warning text-dark"
          style={{ width: "75%" }}
        >
          {" "}
          Dinner
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-danger" style={{ width: "100%" }}>
          Snacks
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-danger" style={{ width: "100%" }}>
          Transport
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow={100}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="progress-bar bg-danger" style={{ width: "100%" }}>
          Others
        </div>
      </div>
    </>
  );
}

export default Bar;
