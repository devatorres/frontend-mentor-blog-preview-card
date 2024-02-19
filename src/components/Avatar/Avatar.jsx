import { Header } from "../Texts/Header/Header";
import "./Avatar.css";

export const Avatar = ({ avatar }) => {
  return (
    <div id={avatar.id} className="avatar">
      <img
        className="profile-image"
        src={avatar.profileImage}
        width={32}
        height={32}
        alt="Profile image"
      />
      <Header>{`${avatar.firstName} ${avatar.lastName}`}</Header>
    </div>
  );
};
