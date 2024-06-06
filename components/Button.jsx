"use client";

const Button = ({ BtnTitle, href, type, className, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {/* <Link href={href || null}>{BtnTitle}</Link> */}
      {BtnTitle}
    </button>
  );
};

export default Button;
