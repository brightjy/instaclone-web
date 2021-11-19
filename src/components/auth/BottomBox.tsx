import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../common/Common";

const SBottomBox = styled(BaseBox)`
  padding: 20px 0px;
  text-align: center;
  a {
    font-weight: bold;
    color: ${(props) => props.theme.accentColor};
  }
`;

function BottomBox({cta, linkText, link}) {
  return (
    <SBottomBox>
      <span>{ cta } </span>
      <Link to={ link }>
        { linkText}
      </Link>
  </SBottomBox>
  );
}

export default BottomBox;