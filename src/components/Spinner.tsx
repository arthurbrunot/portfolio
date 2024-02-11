import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  color?: string
  size?: number
} & (
  | (React.ComponentPropsWithoutRef<'svg'>)
)

export function Spinner({
  className,
  size = 50,
  color = '#000',
  ...props
}: ButtonProps) {
  return (
    <>
      <style>
        {`
          @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes dash {
            0% {
              stroke-dasharray: 1, 150;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -35;
            }
            100% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -124;
            }
          }
        `}
      </style>
      <svg
        style={{
          width: `${size}px`,
          height: `${size}px`,
          animation: 'rotate 2s linear infinite',
        }}
        viewBox="0 0 50 50"
        {...props}
      >
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke={color}
          style={{
            animation: 'dash 1.5s ease-in-out infinite',
            strokeLinecap: 'round',
          }}
        ></circle>
      </svg>
    </>
  );
}
