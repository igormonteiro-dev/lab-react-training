import './IdCard.css';

function IdCard({ picture, firstName, lastName, gender, height, birth }) {
  return (
    <div className="container">
      <img src={picture} alt={firstName} />
      <p>
        <span>
          <strong>First Name:</strong> {firstName}
        </span>
        <span>
          <strong>Last Name:</strong> {lastName}
        </span>
        <span>
          <strong>Gender:</strong> {gender}
        </span>
        <span>
          <strong>Height:</strong> {height}
        </span>
        <span>
          <strong>Birth:</strong> {birth.toDateString()}
        </span>
      </p>
    </div>
  );
}

export default IdCard;
