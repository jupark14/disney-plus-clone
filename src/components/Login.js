import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ad
          veniam a earum nihil sapiente unde, porro dignissimos. Libero, error!
          Eos culpa sed architecto. Numquam fugit voluptate nesciunt
          perspiciatis dolore?{" "}
        </Description>
        <CTALogoTwo src="images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    background-image: url("/images/login-background.jpg");
    opacity: 0.7; //어둡게 하려면 opacity 주기
    z-index: -1;
  }
`;

const CTA = styled.div`
  margin-top: 100px;
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column; //column으로 해야지 세로로 됨
  align-items: center;
`;
const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%; //parent tag를 display flex, flex-direction column으로 해야지 꽉참
  font-weight: bold;
  background-color: #0063e5;
  padding: 17px 0;
  border-radius: 4px;
  color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 90%;
`;
