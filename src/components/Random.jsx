//The component should display a random integer in the range between the min and the max number.
function Random({ min, max }) {
  let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <div className="container">
      <span>
        Random value between {min} and {max} {`=>`} {randomInteger}
      </span>
    </div>
  );
}

export default Random;
