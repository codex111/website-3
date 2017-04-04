import Logo from '../logo'
import SiteNav from './site-nav'
import UserNav from './user-nav'
import Hexagons from './hexagons.svg'

const Header = ({
  theme = 'light',
  isSiteNavOpen,
  toggleNav,
  children
}) => (
  <div className={`Header t-${theme}`}>
    <div className='Hexagons'>
      <Hexagons />
    </div>
    <div className='Header__inner u-wrapper'>
      <div className='Header__bar'>
        <a className='Header__logo' href='/'>
          <Logo />
        </a>

        <span onClick={toggleNav} className='Header__nav-toggle fa fa-bars' />

        <SiteNav isOpen={isSiteNavOpen} />
        <UserNav />
      </div>

      {children}
    </div>

    <style jsx>{`
      /* = HEADER
       * ==================================================================== */
      .Header {
        color: #fff;
        padding-top: 25px;
        position: relative;
      }

      .Header.t-dark {
        background: linear-gradient(0deg, #0B0F15, #0B0F15);
      }

      .Header.t-dark::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background:
          radial-gradient(875.03px at 50% 100%, rgba(0, 100, 255, 0.25) 0%, rgba(0, 100, 255, 5e-05) 100%);
        animation: pulseBG 3s infinite linear;
      }

      .Header__inner {
        width: 100%;
        max-width: 1220px;
        padding-left: 30px;
        padding-right: 30px;
        position: relative;
        z-index: 1;
      }

      .Header__bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .Header__logo :global(svg) {
        width: 120px;
      }

      .Header__logo :global(path) {
        fill: #fff;
      }

      .Header__nav-toggle {
        cursor: pointer;
        font-size: 28px;
      }

      @media screen and (min-width: 591px) {
        .Header__nav-toggle {
          display: none;
        }
      }

      .Hexagons {
        position: absolute;
        width: 100%;
        min-width: 1530px;
        left: 50%;
        margin-left: -765px;
        bottom: 0;
        display: flex;
        transition: opacity .25s ease-in-out;
      }

      .t-light .Hexagons {
        display: none;
      }

      @media screen and (max-width: 720px) {
        .Hexagons {
          opacity: 0;
        }
      }


      @keyframes pulseBG {
        from, to {
          opacity: 1;
        }

        50% {
          opacity: .8;
        }
      }
    `}</style>
  </div>
)

export default Header