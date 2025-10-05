import React from 'react';

export default function FormButton({ children, ...props }) {
  return (
      <button
        type="submit"
        className="btn btn-primary w-100"
        {...props}
      >
        {children}
      </button>
  );
}