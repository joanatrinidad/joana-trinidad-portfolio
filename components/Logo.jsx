import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <Image 
        src='/logo.png' 
        width={65} // Increase the width
        height={60} // Increase the height
        priority 
        alt='Logo'
      />
    </Link>
  );
}

export default Logo;
