import styled from "styled-components";
import React, { forwardRef, useState } from "react";

const StyledInput = forwardRef(({ variant, label, isError, ...rest }, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (e.target.value.length > 0) setIsFocused(true);
    else setIsFocused(false);
  };
  return (
    <Wrapper>
      <Label isFocused={isFocused} htmlFor={label} variant={variant}>
        {label}
      </Label>
      <Input
        isError={isError}
        ref={ref}
        name={label}
        autoComplete="new-password"
        {...rest}
        variant={variant}
        onFocus={handleFocus}
        onBlur={(e) => handleBlur(e)}
      />
    </Wrapper>
  );
});

export default StyledInput;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 385px;
  margin-top: 1.5rem;
  display: flex;
`;

const Label = styled.label`
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  font-size: ${({ isFocused }) => (isFocused ? "1.1rem" : "1.4rem")};
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "-1rem" : "50%")};
  left: ${({ isFocused }) => (isFocused ? "0.5rem" : "1rem")};
  transform: ${({ isFocused }) => (isFocused ? "none" : "translateY(-50%)")};
  opacity: ${({ isFocused }) => (isFocused ? "1" : "0.8")};
  color: ${({ variant }) => (variant === "light" ? "#000" : "#fff")};
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.8rem;
  border: ${({ theme }) => theme.colors.grey};
  padding: 0.5rem 0.5rem;
  border: none;
  outline: ${({ theme, isError }) =>
    isError ? `1px solid ${theme.colors.red}` : "none"};
  background-color: ${({ theme, variant }) =>
    variant === "light" ? theme.colors.lightGray : theme.colors.darkGray};
  border-radius: 0.5rem;
`;
