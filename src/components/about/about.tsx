import parse from 'html-react-parser';

// Types
import { IProfile, TProfile } from 'types/common';

// Constants
import { ABOUT_TEXT_1, ABOUT_TEXT_2, ABOUT_TEXT_3 } from 'constants/common';

// Jsons
import Profiles from 'jsons/profiles.json';

// Styles
import './about.scss';

const About = () => {
  const keysA: any[] = Profiles.data_1.map((obj) => Object.keys(obj)).flat();
  const keysB: any[] = Profiles.data_2.map((obj) => Object.keys(obj)).flat();

  const RenderProfile = (profile: IProfile[], keys: TProfile[]) => {
    return (
      <ul>
        {profile.map((item, index) => {
          const key = keys[index];
          const value = item[key];
          return (
            <li key={index}>
              <i className="bi bi-chevron-right"></i>{' '}
              <strong className="text-capitalize">{key}:</strong>{' '}
              <span>{parse(`${value}`)}</span>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>{ABOUT_TEXT_1}</p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/346102163_243767698303900_3106328073556110959_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHCot0tNgZRrBdD1HRMqsmKPmRO1KSjrhk-ZE7UpKOuGepbhEG2rhLj1aaGXV3LqYn5wXwrOOptUgojSkH586hK&_nc_ohc=ncASp7XB0wQQ7kNvgFe_9LK&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFVG9FQCBPF1q4SBpF3EotEjhDVcjh4fOURUae_mGegUA&oe=66FC5BF7" 
                className="img-fluid"
                alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>Student Developer (Flutter / Laravel Enthusiast)</h3>
            <p className="fst-italic">{ABOUT_TEXT_2}</p>
            <div className="row">
              <div className="col-lg-6">
                {RenderProfile(Profiles.data_1, keysA)}
              </div>
              <div className="col-lg-6">
                {RenderProfile(Profiles.data_2, keysB)}
              </div>
              <p>{ABOUT_TEXT_3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
