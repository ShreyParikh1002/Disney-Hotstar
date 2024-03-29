import styled from "styled-components"
import { Link } from "react-router-dom";

const Login = (props) => {
    return(    
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                    <SignUp to="/home">ENTER THE DISNEY MAGIC</SignUp>
                    <Description>
                        Welcome to the Dinsye+ Hotstar Frontend clone.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
                </CTA>
                <BgImage/>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display : flex;
    flex-direction : column;
    text-align:center;
    height:100vh;
 `;  
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage=styled.div`
    background-image: url("/images/login-background.jpg");
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    /* image wasnt visible without top, right, left */
    z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;

`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp = styled(Link)`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
    font-size: 11px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;