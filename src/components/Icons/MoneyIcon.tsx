type MoneyIconProps = {
  className?: string
}

export const MoneyIcon = ({ className }: MoneyIconProps) => (
  <svg
    width="60"
    height="47"
    viewBox="0 0 60 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 8.44435V40.9478C0 42.8363 1.05208 44.6199 2.8125 45.2809C11.875 48.6907 20.9375 46.3615 30 44.0323C38.3125 41.9025 46.625 39.7622 54.9271 42.0494C57.3229 42.7104 60 41.0527 60 38.5452V6.05223C60 4.16371 58.9479 2.38012 57.1875 1.71914C48.125 -1.69068 39.0625 0.638488 30 2.96766C21.6875 5.09748 13.375 7.2273 5.07292 4.9401C2.66667 4.27912 0 5.93682 0 8.44435ZM30 33.5721C25.3958 33.5721 21.6667 29.0606 21.6667 23.5C21.6667 17.9394 25.3958 13.4279 30 13.4279C34.6042 13.4279 38.3333 17.9394 38.3333 23.5C38.3333 29.0606 34.6042 33.5721 30 33.5721ZM6.66667 33.5721C10.3438 33.5721 13.3333 36.5832 13.3333 40.2868H6.66667V33.5721ZM13.3333 11.7492C13.3333 15.4528 10.3438 18.464 6.66667 18.464V11.7492H13.3333ZM53.3333 28.536V35.2508H46.6667C46.6667 31.5472 49.6562 28.536 53.3333 28.536ZM46.6667 6.71321H53.3333V13.4279C49.6562 13.4279 46.6667 10.4168 46.6667 6.71321Z"
      fill="currentColor"
    />
  </svg>
)
