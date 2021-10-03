import React from "react";
import styled from "styled-components";
export const InputField = styled.input`
  padding: 14px 20px;
  border: 2px solid #ffffff00;
  border-radius: 7px;
  transition: all 0.3s;
  margin-bottom: 50px;
  &:focus {
    outline: none !important;
    border: 2px solid blue !important;
  }
`;
