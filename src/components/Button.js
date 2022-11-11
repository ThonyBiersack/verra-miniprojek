
const Button = ({ onClick, children }) => {
  return (
    <button className="bg-emerald-600 text-white py-2 px-6 my-10 rounded hover:bg-emerald-700"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button