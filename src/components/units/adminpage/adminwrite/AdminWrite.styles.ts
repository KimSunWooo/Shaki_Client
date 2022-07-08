import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const WrapperRoot = styled.div`
  width: calc(100% - 250px);
  background-color: #f9f9f9;
  padding: 20px;
`;
export const Wrapper = styled.div`
  width: 1200px;
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 50px;
  background-color: #ffffff;
`;
export const HeadWrapper = styled.div`
  width: 100%;
`;
export const LogoWrapper = styled.div`
  width: 100%;
`;
export const Logo = styled.img`
  width: 150px;
`;
export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
`;
export const OptionNew = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999999;
  cursor: pointer;
`;

export const BodyWrapper = styled.div`
  width: 100%;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const TitleLabel = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;
export const Title = styled.input`
  width: 400px;
  height: 40px;
`;

export const RoomNumberLabel = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`;
export const RoomNumber = styled.input`
  width: 480px;
  height: 40px;
`;
export const RemarksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const RemarksLabel = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: bold;
`;
export const Remarks = styled.input`
  width: 1000px;
  height: 40px;
`;
export const TagsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const TagsLabel = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: bold;
`;
export const Tags = styled.input`
  width: 750px;
  height: 40px;
  margin-right: 20px;
`;
export const PersonLabel = styled.div`
  width: 100px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const PersonSelect = styled.input`
  width: 120px;
  height: 40px;
`;
export const Person = styled.option``;
export const PersonSelected = styled.input`
  width: 100px;
`;
export const ContentsWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;
export const ContentsLabel = styled.div`
  width: 100%;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const ReactQuillWrapper = styled.div`
  width: 100%;
  height: 200px;
`;
export const Contents = styled(ReactQuill)`
  width: 100%;
  height: 200px;
  margin-top: 10px;
`;
export const AddressWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 50px;
`;
export const MapWrapper = styled.div`
  width: 100%;
`;
export const Map = styled.div`
  width: 400px;
  height: 250px;
  background-color: #999999;
`;
export const AddressDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;
export const AddressLabel = styled.div`
  width: 100%;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export const AddressTitle = styled.div``;
export const AddressSearchWrapper = styled.div`
  display: flex;
`;
export const AddressCode = styled.input`
  width: 100px;
  height: 50px;
  margin-right: 10px;
`;
export const AddressSearchButton = styled.button`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
export const Address = styled.input`
  height: 50px;
`;
export const AddressDetail = styled.input`
  height: 50px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 100px;
`;
export const MainWrapper = styled.div`
  width: 100%;
`;
export const Main = styled.img`
  width: 300px;
  height: 300px;
  margin-right: 20px;
  cursor: pointer;
`;
export const SubImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SubImageOne = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubImage = styled.img`
  width: 130px;
  height: 130px;
  cursor: pointer;
`;
export const SubImageWrappertwo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SubImagetwo = styled.img`
  width: 130px;
  height: 130px;
  cursor: pointer;
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SubmitButton = styled(Button)`
  width: 300px;
  height: 80px;
  border: 1px solid #000000;
  border-radius: 30px;
  font-size: 20px;
  font-family: snas-serif;
  color: black;
`;
