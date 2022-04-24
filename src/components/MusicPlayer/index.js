import React from "react";
import styled from "styled-components";
import BtnPrev from "../../assets/player/go-start.svg";
import BtnNext from "../../assets/player/go-end.svg";
import BtnPause from "../../assets/player/pause.svg";
import TempCover from "../../assets/player/tempCover.jpeg";

const MusicPlayer = () => {
  return (
    <PlayerContainer>
      <AboutWrapper>
        <ImgWrap>
          <SongImg src={TempCover} />
        </ImgWrap>
        <InfoWrap>
          <SongTitle>Strangers By Nature</SongTitle>
          <SongArtist>Adele</SongArtist>
        </InfoWrap>
      </AboutWrapper>
      <ControlsWrapper>
        <ButtonsWrapper>
          <PreviousBtn>
            <img src={BtnPrev} alt="utwór wstecz" />
          </PreviousBtn>
          <PlayStopBtn>
            <img src={BtnPause} alt="utwór wstecz" />
          </PlayStopBtn>
          <NextBtn>
            <img src={BtnNext} alt="utwór wstecz" />
          </NextBtn>
        </ButtonsWrapper>
        <Timeline>
          <CurrentTime>0:00</CurrentTime>
          <ProgressBar>
            <CurrentProgress />
          </ProgressBar>
          <EndTime>3:20</EndTime>
        </Timeline>
      </ControlsWrapper>
    </PlayerContainer>
  );
};

export default MusicPlayer;

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.playerBg};
  display: flex;
  color: #fff;
`;
const AboutWrapper = styled.div`
  width: 400px;
  display: flex;
`;
const ImgWrap = styled.div`
  margin: auto 1rem;
`;
const SongImg = styled.img`
  width: 60px;
`;
const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;
const SongTitle = styled.p``;
const SongArtist = styled.p`
  color: ${({ theme }) => theme.colors.white80};
`;
const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const PreviousBtn = styled.div``;
const PlayStopBtn = styled.div``;
const NextBtn = styled.div``;
const Timeline = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const CurrentTime = styled.p``;
const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;
const CurrentProgress = styled.div``;
const EndTime = styled.p``;
