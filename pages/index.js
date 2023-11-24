import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";

const FlexWrapper = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <FlexWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents $isBlack={true} />
      <BoxWithStyledComponents $isBlack={false} />
    </FlexWrapper>
  );
}
