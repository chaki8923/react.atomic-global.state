import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;

  return <SInput placeholder={placeholder}></SInput>;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid 1px #ddd;
  border-radius: 9999px;
  outline: none;
`;
