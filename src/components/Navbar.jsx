import { navLinks } from "#constants";
import { navIcons } from "#constants";

import dayjs from "dayjs";

const data = [
    { id: 1, name: "Potfolio" },
    { id: 2, name: "Contact" },
    { id: 3, name: "Projects" },
];

const Navbar = () => {
    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Abdus Salam's Porfolio</p>

                <ul>
                    {navLinks.map(({ id, name }) => (
                        <li key={id}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:MM A')}</time>
            </div>

        </nav>
    );
};

export default Navbar;