import React from "react";
import styled from "styled-components";

export const FormGroup = styled.form`
  /* color: palevioletred; */
  display: flex;
  justify-content: center;
  margin-top: 60px;
  .form_left {
    width: 340px;
  }
  .form_right {
    width: 340px;
    margin-left: 47px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
`;

export const Input = styled.input`
  padding: 0.5em;
  color: black;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;
export const Select = styled.select`
  padding: 0.5em;
  color: black;
  background: white;
  border: 2px solid black;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 0.5em;
`;
