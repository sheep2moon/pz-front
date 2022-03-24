import { CgProfile } from "react-icons/cg";
import { RiPlayList2Fill, RiDoorOpenLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

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
    icon: <AiOutlinePlus />,
    text: "join the room",
    to: "/join-the-room",
  },
  {
    icon: <FiSettings />,
    text: "settings",
    to: "/settings",
  },
];
