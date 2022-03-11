import React, {useState} from "react";
import styles from './style.module.scss';
import MenuIcon from '/public/img/mobile/menu.svg';
import CloseIcon from '/public/img/mobile/close.svg';
import Button from "../Button";
import Link from 'next/link';
import cn from "classnames";

const pages = [
    {
        title: 'Pricing',
        href: '/pricing',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    }
];

const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className={styles.nav}>
            <div className={cn(styles.menuWrapper, {
                [styles.open]: open,
            })}>
                <ul className={styles.menu}>
                    {pages?.map(({title, href}) => (
                        <li>
                            <Link href={href}
                                  prefetch={false}
                            >
                                <a>
                                    {title}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Button>
                            Schedule a Demo
                        </Button>
                    </li>
                </ul>
            </div>
            <button className={styles.menuButton}
                    aria-label={'menu'}
                    onClick={_ => setOpen(!open)}
            >
                {!open ? (<MenuIcon/>) : (<CloseIcon />)}
            </button>
        </nav>
    );
};

export default Menu;
