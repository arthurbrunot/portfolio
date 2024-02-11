import React, { forwardRef } from 'react';

const RadioInput = forwardRef((
  { label, ...props }: React.ComponentPropsWithoutRef<'input'> & { label: string },
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        ref={ref}
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  );
});

RadioInput.displayName = 'RadioInput';

export default RadioInput;

