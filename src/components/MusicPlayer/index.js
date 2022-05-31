import React, { useRef, useState } from "react";
import styled from "styled-components";
import BtnPrev from "../../assets/player/go-start.svg";
import BtnNext from "../../assets/player/go-end.svg";
import BtnPause from "../../assets/player/pause.svg";
import BtnPlay from "../../assets/player/play.svg";
import TempCover from "../../assets/player/tempCover.jpeg";
import ReactPlayer from "react-player";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [progress, setProgress] = useState({ played: 0 });
  const [isSeeking, setIsSeeking] = useState(false);
  const playerRef = useRef(null);

  const handleProgress = (val) => {
    if (!isSeeking) {
      setProgress(val);
    }
    console.log(val);
  };
  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const handleTimelineChange = (e) => {
    const newProgress = { ...progress, played: parseFloat(e.target.value) };
    setProgress(newProgress);
  };
  const handleSeekDown = (e) => {
    setIsSeeking(true);
  };

  const handleSeekUp = (e) => {
    console.log(playerRef);
    playerRef.current.seekTo(parseFloat(e.target.value));
    setIsSeeking(false);
  };

  return (
    <>
      <HiddenPlayer>
        <ReactPlayer
          ref={playerRef}
          playing={isPlaying}
          onProgress={handleProgress}
          onDuration={setDuration}
          onEnded={() => setIsPlaying(false)}
          url="https://soundcloud.com/attlas/concussion"
        />
      </HiddenPlayer>
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
            <PlayStopBtn onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <img src={BtnPause} alt="pauza" />
              ) : (
                <img src={BtnPlay} alt="odtwórz" />
              )}
            </PlayStopBtn>
            <NextBtn>
              <img src={BtnNext} alt="utwór do przodu" />
            </NextBtn>
          </ButtonsWrapper>
          <Timeline>
            <CurrentTime>
              {progress?.playedSeconds
                ? `${parseInt(progress.playedSeconds / 60)}:${zeroPad(
                    parseInt(progress.playedSeconds % 60),
                    2
                  )}`
                : "0:00"}
            </CurrentTime>
            <ProgressBar
              type="range"
              value={progress.played}
              max="1"
              step="0.001"
              onMouseDown={handleSeekDown}
              onChange={handleTimelineChange}
              onMouseUp={handleSeekUp}
            />

            <EndTime>{`${parseInt(duration / 60)}:${zeroPad(
              parseInt(duration % 60),
              2
            )}`}</EndTime>
          </Timeline>
        </ControlsWrapper>
      </PlayerContainer>
    </>
  );
};

export default MusicPlayer;

const HiddenPlayer = styled.div`
  display: none;
`;
const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.playerBg};
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: start;
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
const PlayStopBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
`;
const NextBtn = styled.div``;
const Timeline = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const CurrentTime = styled.p`
  width: 40px;
`;
const ProgressBar = styled.input`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  ::-webkit-slider-thumb {
    appearance: none;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    transition: background 0.15s ease-in-out;
    &:hover {
      background: $range-handle-color-hover;
    }
  }
`;

const EndTime = styled.p`
  width: 40px;
`;
