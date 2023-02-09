// material-ui
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { FormHelperText, IconButton, InputAdornment, Stack, TextField } from '@mui/material';

// third party

// project import
import { BaseTextFieldProps } from '@mui/material';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

interface Props extends BaseTextFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  errorMessage?: string;
  type?: string;
  required?: boolean;
  minRows?: number;
  showPassword?: boolean;
  variant?: 'standard' | 'filled' | 'outlined';
}

export const ControlledTextInput = ({
  name,
  control,
  label,
  placeholder,
  defaultValue,
  errorMessage,
  type = 'text',
  minRows,
  variant = 'outlined',
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const _renderInput = ({ field }: any) => {
    return (
      <Stack>
        <TextField
          fullWidth
          type={type != 'password' ? type : showPassword ? 'text' : 'password'}
          label={label}
          placeholder={placeholder}
          autoComplete="new-password"
          multiline={minRows ? true : false}
          minRows={minRows ? minRows : 1}
          error={!!errorMessage}
          variant={variant}
          endAdornment={
            type === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                </IconButton>
              </InputAdornment>
            )
          }
          {...rest}
          {...field}
        />
        <FormHelperText error>{errorMessage}</FormHelperText>
      </Stack>
    );
  };

  return <Controller name={name} control={control} render={_renderInput} defaultValue={defaultValue ? defaultValue : ''} />;
};
