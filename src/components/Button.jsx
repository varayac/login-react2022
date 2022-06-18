const Button = ({ buttonText, type }) => {
  return (
    <button
      type={type}
      className="w-96 mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {buttonText}
    </button>
  )
}

export default Button
