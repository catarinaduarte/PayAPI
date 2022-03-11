import React, {HTMLAttributes} from "react";
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLLIElement> {
    name?: string;
    href: string;
    external?: boolean;
};

const LinkItem: React.FC<IProps> = ({ name, href, external, children }) => {
    return (
        <li>
            {!external ? (
                <Link href={href}>
                    <a aria-label={name}>
                        {children}
                    </a>
                </Link>
            ) : (
                <a href={href}
                   aria-label={name}
                >
                    {children}
                </a>
            )}
        </li>
    );
};

LinkItem.defaultProps = {
    external: false,
};

export default LinkItem;
