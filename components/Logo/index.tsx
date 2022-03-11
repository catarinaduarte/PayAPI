import React from "react";
import Link from 'next/link';
import LogoImage from '/public/img/logo.svg';
import LogoInvertedImage from '/public/img/logo-invert.svg';

type IProps = {
    invert?: boolean;
};

const Logo: React.FC<IProps> = ({ invert }) => {
    return (
        <Link href={'/'}
              prefetch={false}
        >
            <a aria-label={'payapi'}>
                {!invert ? (<LogoImage />) : (<LogoInvertedImage />)}
            </a>
        </Link>
    );
};

Logo.defaultProps = {
    invert: false,
};

export default Logo;
