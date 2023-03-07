import { BaseTextFieldProps, TextField } from '@mui/material';
import { Control, Controller, FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';

interface Props extends BaseTextFieldProps {
  name: string;
  control: Control<any>;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  errorMessage?: string | FieldError | undefined;
  type?: string;
  required?: boolean;
  minRows?: number;
  variant?: 'outlined' | 'standard' | 'filled';
  mask?: string | RegExp | undefined;
}

export const ControlledTextInput = ({
  name,
  control,
  label,
  placeholder,
  autoFocus,
  defaultValue,
  errorMessage,
  type = 'text',
  minRows,
  variant = 'outlined',
  mask,
  ...rest
}: Props) => {
  const _renderInput = ({ field }: any) => {
    const inputProps = {
      ...field,
      ...rest,
      fullWidth: true,
      type,
      label,
      autoFocus,
      placeholder,
      multiline: !!minRows,
      minRows: minRows || 1,
      error: !!errorMessage,
      helperText: errorMessage,
      variant
    };

    return mask ? (
      <InputMask mask={mask} {...inputProps}>
        {(inputProps: any) => <TextField {...inputProps} />}
      </InputMask>
    ) : (
      <TextField {...inputProps} />
    );
  };

  return <Controller name={name} control={control} render={_renderInput} defaultValue={defaultValue ?? ''} />;
};
