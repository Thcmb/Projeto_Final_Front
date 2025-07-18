import AccountAction from '../../components/AccountAction'

import { SplitLayout, Footer, Logo, SectionLoguin } from './styles'
import logo from '../../assets/icon.svg'

const Entry = () => (
  <>
    <div>
      <SplitLayout>
        <Logo className="desktop-logo">
          <img src={logo} alt="logo X" />
        </Logo>
        <SectionLoguin>
          <div className="mobile-logo">
            <img src={logo} alt="logo X" />
          </div>
          <h2>Acontecendo agora</h2>
          <AccountAction />
        </SectionLoguin>
      </SplitLayout>
      <Footer>
        <p>
          Todos direitos reservados {''}
          <a
            href="https://github.com/Thcmb"
            target="_blank"
            rel="noreferrer"
          >
            @Thcmb
          </a>
        </p>
      </Footer>
    </div>
  </>
)

export default Entry
