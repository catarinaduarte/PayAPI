import React, {HTMLAttributes} from "react";

const partners = [
    {
        name: 'tesla',
        src: '/img/tesla.svg',
    },
    {
        name: 'hewlett-packard',
        src: '/img/hewlett-packard.svg',
    },
    {
        name: 'google',
        src: '/img/google.svg',
    },
    {
        name: 'microsoft',
        src: '/img/microsoft.svg',
    },
    {
        name: 'oracle',
        src: '/img/oracle.svg',
    },
    {
        name: 'nvidia',
        src: '/img/nvidia.svg',
    },
];

const PartnerContainer: React.FC<HTMLAttributes<HTMLUListElement>> = ({ ...props }) => {
    return (
        <ul {...props}>
            {partners?.map(({ src, name}, index) => (
                <li key={index}>
                    <img src={src}
                         alt={name}
                    />
                </li>
            ))}
        </ul>
    );
};

export default PartnerContainer;
