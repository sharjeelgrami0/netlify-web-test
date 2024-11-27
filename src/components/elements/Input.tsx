import React, { ReactNode } from 'react';
import 'styles/elements/Input.css'

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode
  variant?: 'default' | 'outline' | 'filled' | 'transparent'
  className?: string;
}

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  variant = 'default',
  className = '',
  }: InputProps) => {
  return (
    <div className={`input-container ${variant} ${className}`}>
      {icon && <div className="input-icon">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
};

export default Input;