import React, { forwardRef } from 'react';
import clsx from 'clsx';

// Определяем интерфейс для ButtonProps
const Button = forwardRef(({ 
  children, 
  className, 
  variant = 'solid', 
  isLoading = false, 
  leftIcon, 
  rightIcon, 
  ...rest 
}, ref) => {
  // Определяем классы для различных вариантов кнопки
  const baseStyles = 'font-bold py-2 px-4 rounded transition-colors';

  const variantStyles = {
    solid: 'bg-blue-500 hover:bg-blue-700 text-white',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    ghost: 'bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const classes = clsx(
    baseStyles,
    variantStyles[variant],
    className,
    { 'cursor-not-allowed opacity-50': isLoading }
  );

  return (
    <button ref={ref} className={classes} {...rest} disabled={isLoading}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {isLoading ? (
        <span className="animate-spin">🔄</span>
      ) : (
        children
      )}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
