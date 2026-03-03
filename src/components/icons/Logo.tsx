const Logo = ({
  className,
  option,
}: {
  className?: string;
  option?: number;
}) => {
  return (
    <>
      <img
        src={
          option === 2
            ? "/src/assets/images/logo/logo-secondary.png"
            : "/src/assets/images/logo/logo.png"
        }
        width={100}
        alt="logo"
        className={className}
      />
    </>
  );
};

export default Logo;
