import React, {HTMLAttributes} from "react";
import LinkItem from "../../components/LinkItem";
import FacebookIcon from '/public/img/facebook.svg';
import TwitterIcon from '/public/img/twitter.svg';
import LinkedInIcon from '/public/img/linkedin.svg';

const socials = [
    {
        name: 'facebook',
        href: '#',
        icon: (<FacebookIcon />),
    },
    {
        name: 'twitter',
        href: '#',
        icon: (<TwitterIcon />),
    },
    {
        name: 'linkedin',
        href: '#',
        icon: (<LinkedInIcon />),
    }
];

const SocialListContainer: React.FC<HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
    return (
        <ul {...props}>
            {socials?.map(({ name, href, icon }, index) => (
                <LinkItem href={href}
                          name={name}
                          external
                          key={index}
                >
                    {icon}
                </LinkItem>
            ))}
        </ul>
    );
};

export default SocialListContainer;
