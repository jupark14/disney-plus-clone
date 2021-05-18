import styled from "styled-components";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <Container>
      <ImageSlider />
    </Container>
  );
}

export default Home;

// main은 div랑 같으나 구글에게 main이라는 것을 알려줄 수 있음
const Container = styled.main`
  // min-height를 정하지 않으면 header 나머지 부분이 container로 채워지지 아니함.
  // header가 70px이므로 나머지 부분이 전부 container로 채워지기 위해서 아래와 같이 처리
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vh + 5px);
  overflow-x: hidden;

  &:before {
    position: relative;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
