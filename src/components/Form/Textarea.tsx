import { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {}

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      id="bio"
      defaultValue="I'm a product design..."
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
      {...props}
    />
  );
}
