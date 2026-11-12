
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weddingData from '../../data/weddingData';
import './Invitation.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function DecorativeDivider() {
  return (
    <div className="invitation-ornament-divider" aria-hidden="true">
      <span />
      <i>✦</i>
      <span />
    </div>
  );
}

function CoupleProfile({ role, profile, className }) {
  return (
    <div className={`couple-profile ${className}`}>
      <span className="couple-role text-light-gold">{role}</span>
      <h3 className="text-light-gold">{profile.name}</h3>

      {profile.qualification && (
        <p className="couple-qualification">{profile.qualification}</p>
      )}

      <p className="couple-family">{profile.parents}</p>

      {profile.familyDetails?.map((detail) => (
        <p className="couple-detail" key={detail}>
          {detail}
        </p>
      ))}
    </div>
  );
}

function Invitation() {
  const sectionRef = useRef(null);

  const { couple, guardians, invitation } = weddingData;

  useGSAP(
    () => {
      const items = gsap.utils.toArray('.invitation-reveal');

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 88%',
              once: true,
            },
          },
        );
      });

      gsap.to('.invitation-orbit-star', {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: 'none',
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="invitation-section" ref={sectionRef}>
      <div className="invitation-section-glow" />

      <div className="invitation-orbit-star orbit-one">✧</div>
      <div className="invitation-orbit-star orbit-two">✦</div>
      <div className="invitation-orbit-star orbit-three">✧</div>

      <div className="invitation-section-inner">
        <div className="invitation-top-label invitation-reveal">
          <span className='text-light-gold'>THE BEGINNING OF FOREVER</span>
        </div>

        <div className="invitation-main-content">
          <p className="invitation-bismillah invitation-reveal text-light-gold" lang="ar" dir="rtl">
            {invitation.bismillah}
          </p>

          <DecorativeDivider />

          <p className="invitation-overline invitation-reveal text-ivory">
            WITH THE BLESSINGS OF ALLAH
          </p>

          <h2 className="invitation-section-title invitation-reveal text-light-gold">
            Wedding Invitation
          </h2>

          <p className="invitation-message invitation-reveal">
            {invitation.openingMessage}
          </p>

          {/* <DecorativeDivider />

          <div className="guardians-section invitation-reveal">
            <p className="invitation-small-heading">
              UNDER THE GUARDIANSHIP OF
            </p>

            <div className="guardians-list">
              {guardians.map((guardian) => (
                <div className="guardian-item" key={guardian.names}>
                  <h3 className='text-light-gold'>{guardian.names}</h3>

                  {guardian.qualification && (
                    <p>{guardian.qualification}</p>
                  )}

                  <p>{guardian.designation}</p>
                </div>
              ))}
            </div>
          </div> */}

          <div className="couple-section invitation-reveal">
            <CoupleProfile
              role="THE BRIDE"
              profile={couple.bride}
              className="bride-profile"
            />

            <div className="couple-ampersand" aria-hidden="true">
              <span />
              <i>&</i>
              <span />
            </div>

            <CoupleProfile
              role="THE GROOM"
              profile={couple.groom}
              className="groom-profile"
            />
          </div>

          <div className="invitation-date-block invitation-reveal">
            <DecorativeDivider />

            <p className="invitation-nikah-label">
              IN SHA ALLAH
            </p>

            <h3 className='text-light-gold'>NIKAH</h3>

            <p className="invitation-day">{invitation.day}</p>

            <p className="invitation-date">
              {invitation.weddingDate}
            </p>

            <p className="invitation-hijri">
              {invitation.hijriDate}
            </p>

            <div className="invitation-date-star">✦</div>
          </div>
        </div>

        <div className="invitation-bottom-ornament" aria-hidden="true">
          <span>❧</span>
          <i className='text-ivory'>MADE WITH LOVE & BLESSINGS</i>
          <span>❧</span>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
