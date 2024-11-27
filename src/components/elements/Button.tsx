import React, { CSSProperties } from 'react';
import 'styles/elements/button.css';

interface ButtonProps {
  label: string
  onClick: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  className?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  style?: CSSProperties
  size?: 'sm' | 'md' | 'lg'
}

const Button = ({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  style,
  size = 'md',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`custom-button ${variant} ${size} ${className} ${
        disabled ? 'disabled' : ''
      }`}
    >
      {icon && iconPosition === 'left' && (
        <div className="button-icon">{icon}</div>
      )}
      {label}
      {icon && iconPosition === 'right' && (
        <div className="button-icon">{icon}</div>
      )}
    </button>
  );
};

export default Button;