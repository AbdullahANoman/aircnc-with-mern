import { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";

const Avatar = () => {
    const {user} = useContext(AuthContext);
  return (
    <img
      src={user && user?.photoURL ? user?.photoURL : avatarImg}
      alt="profile"
      width='40'
      className="rounded-full"
    />
  );
};

export default Avatar;
