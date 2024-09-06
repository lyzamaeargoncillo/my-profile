import { useState } from 'react';

// Components
import Navagition from 'components/nav';

// Constants
import { NAME } from 'constants/common';

// Jsons
import SocialMedias from 'jsons/social-medias.json';

// Styles
import './header.scss';

const Header = () => {
  const [listIcon, xIcon] = ['list', 'x'];
  const [menuIcon, setMenuIcon] = useState<string>(listIcon);

  const handleToggleIcon = () => {
    setMenuIcon((prev) => (prev === listIcon ? xIcon : listIcon));
  };

  const handleNavClick = () => {
    setMenuIcon(listIcon);
  };

  return (
    <div className={`${menuIcon === xIcon ? 'mobile-nav-active' : ''}`}>
      <i
        className={`mobile-nav-toggle d-xl-none bi bi-${menuIcon}`}
        onClick={handleToggleIcon}
      ></i>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/346102163_243767698303900_3106328073556110959_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHCot0tNgZRrBdD1HRMqsmKPmRO1KSjrhk-ZE7UpKOuGepbhEG2rhLj1aaGXV3LqYn5wXwrOOptUgojSkH586hK&_nc_ohc=ncASp7XB0wQQ7kNvgFe_9LK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFVG9FQCBPF1q4SBpF3EotEjhDVcjh4fOURUae_mGegUA&oe=66FC5BF7"
              alt=""
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '160px'}}
            />
            <h1 className="text-light">{NAME}</h1>
            <div className="social-links mt-3 text-center">
              {SocialMedias.medias.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className={item.name}
                  target="blank"
                >
                  <i className={`bi bi-${item.name}`}></i>
                </a>
              ))}
            </div>
          </div>
          <Navagition handleNavClick={handleNavClick} />
        </div>
      </header>
    </div>
  );
};

export default Header;
