import Link from 'next/link'
import clsx from 'clsx'
import {Spinner} from "@/components/Spinner";
import {AnimatePresence} from "framer-motion";

type ButtonProps = {
  invert?: boolean
  loading?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
) & any

export function Button({
  invert = false,
  className,
  loading,
  children,
  ...props
}: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition overflow-hidden',
    invert
      ? 'bg-primary text-neutral-950 hover:bg-neutral-950 hover:text-primary'
      : 'bg-neutral-950 text-white hover:bg-primary hover:text-neutral-950',
    loading && 'pointer-events-none gap-2 items-center bg-neutral-300 !text-neutral-500',

  )

  let inner = <span className="relative top-px">{children}</span>

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        <AnimatePresence>
          {loading && <Spinner size={18} color={"#737373"} />}
        </AnimatePresence>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
