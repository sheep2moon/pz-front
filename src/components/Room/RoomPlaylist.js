import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styled from "styled-components";

const RoomPlaylist = ({ playlist }) => {
  return (
    <PlaylistContainer>
      <h2>PlaylistName</h2>
      <Songs>
        {playlist.map((song) => (
          <SongWrap>
            <Cover src={song.coverUrl} />
            <About>
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </About>
            <Length>{song.length}</Length>
            <Like>{song.isLiked ? <AiFillHeart /> : <AiOutlineHeart />}</Like>
            <Delete>
              <RiDeleteBin5Line />
            </Delete>
          </SongWrap>
        ))}
      </Songs>
    </PlaylistContainer>
  );
};

export default RoomPlaylist;

const PlaylistContainer = styled.div``;
const Songs = styled.div`
  font-weight: 400;
`;
const SongWrap = styled.div`
  margin: 0.25rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 0.3fr 4fr 0.4fr 0.4fr 0.4fr;
  font-size: 1.2rem;
`;
const Cover = styled.img`
  width: 40px;
`;
const About = styled.div``;
const Length = styled.p``;
const Like = styled.div``;
const Delete = styled.div``;
