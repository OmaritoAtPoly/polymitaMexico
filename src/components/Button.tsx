import { Button as ButtonUI} from "@material-ui/core";
import { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import React, { useMemo } from "react";

export type ButtonType = "primary" | "secondary";

type Props = {
  label: string;
  typeVariant: ButtonType;
  fullWidth: boolean;
} & ButtonBaseProps;

const Button: React.FC<Props> = ({
  label,
  typeVariant,
  fullWidth,
  ...rest
}) => {
  const variant = useMemo(
    () => ({ primary: "contained", secondary: "outlined" }[typeVariant] as any),
    [typeVariant]
  );
  return (
    <ButtonUI
      fullWidth={fullWidth}
      variant={variant}
      {...rest}
      color="primary"
    >
      {label}
    </ButtonUI>
  );
};
 export default Button; 