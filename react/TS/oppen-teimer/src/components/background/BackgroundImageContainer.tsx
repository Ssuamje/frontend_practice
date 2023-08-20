import styled from 'styled-components';
import oppenTeimerImage from '../../assets/oppenhemier3.png';

const BackgroundImageContainer = styled.div`
  width: 100%; // 화면을 꽉 채우기 위해서 100%로 설정
  height: 100vh; // 높이도 화면 높이만큼
  background: url(${oppenTeimerImage}) no-repeat center center / cover;
  // 'no-repeat center center / cover'는 이미지를 총괄 센터에 위치시키고, 가장 크게 확장하여 화면을 커버하게 만듭니다.
`;

const BackgroundImageComponent: React.FC = ({ children }) => {
    return <BackgroundImageContainer>{children}</BackgroundImageContainer>;
};

export default BackgroundImageComponent;