import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const On = keyframes`
  from {
    padding-left: 3px;
  } to {
    padding-left: 20px;
  }
`;

const Off = keyframes`
  from {
    padding-left: 20px;
  } to {
    padding-left: 3px;
  }
`;

export const WrapperRoot = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  /* color: #4e75ff; */
`;

export const WrapperImg = styled.div`
  border-radius: 20px;
  display: flex;
  width: 150em;
  height: 600px;
  margin-top: 45px;
  margin-left: 250px;
  background-image: url("/landing/03.gif");
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LogInWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-left: 7px;
  justify-content: center;
  padding-top: 80px;
  @media screen and (max-width: 1500px) {
    align-items: center;
  }

  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    align-items: center;

    width: 100%;
  }
`;

export const panel = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LogInImg = styled.img`
  width: 30em;
`;

export const MiddleWrapper = styled.div`
  width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 20px 0;
  box-shadow: 0 0 10px #4e75ff;
  font-weight: 500;
  @media ${breakPoints.mobile} {
    width: 60vw;
  }
`;

export const Head = styled.div`
  width: 100%;
  font-size: 40px;
  margin-bottom: 1em;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AdminOnOffBox = styled.div`
  margin-left: 10px;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const AdminToggle = styled.div`
  border-radius: 20px;
  flex-direction: row;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #4e75ff;
  margin-top: 5px;
  animation: ${(props: { adminOn: boolean }) => (props.adminOn ? On : Off)} 0.5s
    ease-in-out forwards;
`;

export const AdminToggleButton = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2.5px solid gray;
  cursor: pointer;
  opacity: 0.4;
  background-color: gray;
`;

export const UpperBody = styled.div`
  display: flex;
  width: 20em;
  flex-direction: column;
  border-bottom: 3px solid #4e75ff;
  padding: 0 20px 30px 20px;
  margin-bottom: 30px;
`;

export const Email = styled.input`
  height: 40px;
  border: none;
  margin-bottom: 10px;
  outline: none;
`;

export const Password = styled.input`
  height: 40px;
  border: none;
  outline: none;
`;

export const LowerBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  padding: 0 20px 30px 20px;
`;

export const ImgWrapper = styled.div`
  width: 15em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Social = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

export const SocialTitle = styled.div``;

export const LogIn = styled.button`
  border: none;
  width: 7em;
  height: 3em;
  background-color: #4e75ff;
  border-radius: 10px;
  font-weight: 500;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const SignUp = styled.div`
  margin-top: 10px;
  font-weight: 600;
  color: #4e75ff;
  border-bottom: 1px solid #4e75ff;
  cursor: pointer;
`;

export const Footer = styled.div`
  width: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: #4e75ff;
  font-weight: 600;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid #4e75ff;
  }
`;

export const MobileBox = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    margin-top: 1em;
  }
`;

export const CommentBox = styled.div`
  color: #4e75ff;
  font-weight: 600;
  cursor: pointer;
  :hover {
    border-bottom: 2px solid #4e75ff;
  }
`;
