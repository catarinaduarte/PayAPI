import React, {HTMLAttributes} from "react";
import LinkItem from "../../components/LinkItem";

const pages = [
    {
        name: 'Pricing',
        href: '/pricing',
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Contact',
        href: '/contact',
    }
];

const PageListContainer: React.FC<HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
    return (
        <ul {...props}>
            {pages?.map(({ name, href }, index) => (
                <LinkItem href={href}
                          name={name}
                          key={index}
                >
                    {name}
                </LinkItem>
            ))}
        </ul>
    );
};

export default PageListContainer;
