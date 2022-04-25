import { CgProfile } from "react-icons/cg";
import { RiPlayList2Fill, RiDoorOpenLine } from "react-icons/ri";

import { FiSettings, FiUsers } from "react-icons/fi";

export const links = [
  {
    icon: <CgProfile />,
    text: "account",
    to: "/profile",
  },
  {
    icon: <RiPlayList2Fill />,
    text: "playlists",
    to: "/",
  },
  {
    icon: <RiDoorOpenLine />,
    text: "rooms",
    to: "/",
  },
  {
    icon: <FiUsers />,
    text: "friends",
    to: "/friends",
  },
  {
    icon: <FiSettings />,
    text: "settings",
    to: "/settings",
  },
];
