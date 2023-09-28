export default function FAQBox({ title, children }) {
  return (
    <details className='last-of-type:mb-0 rounded-lg bg-neutral-50 dark:bg-neutral-800 p-2 mt-4'>
      <summary>
        <strong className='text-lg'>{title}</strong>
      </summary>
      <div className='nx-p-2'>{children}</div>
    </details>
  );
}

// USE:
// <FAQBox title="Can I use X with Nextra?">
//   The answer is “yes” for most things. Since Nextra is just a Next.js plugin, almost all the things
//   that can be done with React can be done with Nextra. Here are some examples and guides:

// - [Use Tailwind CSS](/docs/guide/tailwind-css)
// - [Use custom CSS and Sass](/docs/guide/custom-css)
// - [Use custom fonts](https://nextjs.org/docs/basic-features/font-optimization)
