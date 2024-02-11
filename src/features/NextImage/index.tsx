import Image, { ImageProps } from "next/image";
import Link from "next/link";
type INextImageProps = ImageProps & {
  src: string;
  linkTo?: "";
};

const NextImage: React.FC<INextImageProps> = ({
  src,
  alt,
  width = 300,
  height = 200,
  className = "",
  placeholder = "blur",
  linkTo,
}) => {
  const imageComponent = (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      quality={75}
      placeholder={placeholder}
    />
  );

  return linkTo ? (
    <Link href={linkTo} passHref>
      <a>{imageComponent}</a>
    </Link>
  ) : (
    imageComponent
  );
};

export default NextImage;
