import "./app.css";

const Profile = ({ name, email, website, phone }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div className="email">{email}</div>
      <a className="website" href={website}>
        {website}
      </a>
      <div className="phone">{phone}</div>
    </div>
  );
};

export default Profile;
