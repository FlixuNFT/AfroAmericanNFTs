import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className='bg-dark p-12  rounded-lg md:px-6 md:py-8 divide-y divide-secondaryDark    '>
            <div className='flex items-center justify-center gap-4 flex-col pb-6'>
                <a href='https://flowbite.com' className='flex items-center mb-4 sm:mb-0'>
                    <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>AFRO AMERICAN NFTS</span>
                </a>
                <ul className='flex flex-wrap items-center mb-6 sm:mb-0  space-x-8 '>
                    <li>
                        <Link to='/privacy'>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to='/terms'>Terms of Service</Link>
                    </li>
                    <li>
                        <Link to='/dmca'>DMCA</Link>
                    </li>
                </ul>
            </div>
            <div className='block text-sm text-gray-100 sm:text-center pt-6'>
                <p className='text-gray-100'>
                    For any inquiries: <a href='mailto:afroamericannft@protonmail.com'>afroamericannft@protonmail.com</a>
                </p>
                © 2022 <a href='https://afroamericannft.com'>Afro American NFT</a>. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
