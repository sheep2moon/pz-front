import styled from "styled-components";

// options
//     variant:
//         -light
//         -dark

import React, { useState } from "react";

const StyledInput = ({ variant, label, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (e.target.value.length > 0) setIsFocused(true);
    else setIsFocused(false);
  };
  return (
    <Wrapper>
      <Label isFocused={isFocused}>{label}</Label>
      <Input
        {...rest}
        variant={variant}
        onFocus={handleFocus}
        onBlur={(e) => handleBlur(e)}
      />
    </Wrapper>
  );
};

export default StyledInput;

const Wrapper = styled.div`
  position: relative;
  margin-top: 1.5rem;
`;

const Label = styled.label`
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  font-size: ${({ isFocused }) => (isFocused ? "0.75rem" : "1rem")};
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "-1rem" : "50%")};
  left: ${({ isFocused }) => (isFocused ? "0.5rem" : "1rem")};
  transform: ${({ isFocused }) => (isFocused ? "none" : "translateY(-50%)")};
  opacity: ${({ isFocused }) => (isFocused ? "0.8" : "0.4")};
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.4rem;
  border: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem 0.5rem;
  border: none;
  background-color: ${({ theme, variant }) =>
    variant === "light" ? theme.colors.lightGray : theme.colors.darkGray};
  border-radius: 0.5rem;
  outline: none;
`;
