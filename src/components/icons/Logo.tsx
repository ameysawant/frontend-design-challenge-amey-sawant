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
            ? "https://res.cloudinary.com/dgfnccyus/image/upload/v1772575668/logo-secondary_d5vckg.png"
            : "https://res.cloudinary.com/dgfnccyus/image/upload/v1772575668/logo_v7tcya.png"
        }
        width={100}
        alt="logo"
        className={className}
      />
    </>
  );
};

export default Logo;
