interface Props {
  progressValue:number;
}

function Bar({progressValue}:Props) {
 // Example value, can be dynamic

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow={progressValue}
      aria-valuemin={0}   // Corrected to number type
      aria-valuemax={100} // Corrected to number type
    >
      <div className="progress-bar" style={{ width: `${progressValue}%` }}></div>
    </div>
  );
}

export default Bar;
