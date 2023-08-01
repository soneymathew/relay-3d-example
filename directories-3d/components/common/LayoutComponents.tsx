import React from 'react';

export function Layout(props: {children: React.ReactNode}) {
  return <div className="min-h-full">{props.children}</div>;
}

export function Content(props: any) {
  return (
    <main className="dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8" {...props} />
    </main>
  );
}

export function Title(props: any) {
  return (
    <h1
      className="text-4xl font font-mono tracking-tight text-gray-900 dark:text-white sm:text-2xl mb-10"
      {...props}
    />
  );
}

type ButtonProps = JSX.IntrinsicElements['button'] & {size: 'small'};
export function Button({size, ...props}: ButtonProps) {
  const sizeClasses = size === 'small' ? 'px-2' : 'py-3 px-8 font-medium';
  return (
    <button
      className={`inline-block text-center bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 ${sizeClasses}`}
      {...props}
    />
  );
}
