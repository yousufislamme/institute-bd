const Button = ({ BtnTitle, type, className, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {BtnTitle}
    </button>
  );
};

export default Button;
