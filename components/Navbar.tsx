import Image from 'next/image';
import Link from 'next/link';
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { selectBasketItems } from '../redux/basketSlice';
import { useSelector } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href='/'>
          <div className='relative h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100'>
            <Image
              src='https://pinclipart.com/picdir/middle/528-5280107_ecommerce-store-logo-png-clipart.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <Link href='' className='headerLink'>
          Product
        </Link>
        <Link href='' className='headerLink'>
          Explore
        </Link>
        <Link href='' className='headerLink'>
          Support
        </Link>
      </div>
      <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
        <SearchIcon className='headerIcon' />
        <Link href='/checkout'>
          <div className='relative cursor-pointer'>
            {items.length > 0 && (
              <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-[10px] text-white'>
                {items.length}
              </span>
            )}

            <ShoppingBagIcon className='headerIcon' />
          </div>
        </Link>

        {session ? (
          <Image
            src={
              session.user?.image ||
              'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
            }
            alt=''
            className='cursor-pointer rounded-full'
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className='headerIcon' onClick={() => signIn()} />
        )}
      </div>
    </header>
  );
};
export default Navbar;
