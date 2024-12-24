import React, { useState } from 'react';
import styled from 'styled-components';
import githubIcon from './assets/github.svg';
import bitbucketIcon from './assets/bitbucket.svg';
import azureIcon from './assets/azure.svg';
import gitlabIcon from './assets/gitlab.svg';
import logo from './assets/logo.svg';
import Dashboard from './components/Dashboard';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  background: #F9F9F9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 1000px;
    height: 1000px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.04;
    z-index: 0;
    transform: rotate(-10deg);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopCard = styled.div`
  width: 80%;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const Metric = styled.div`
  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0 0 4px 0;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #666666;
    margin: 0;
  }
`;

const IssuesCard = styled.div`
  position: absolute;
  bottom: -63px;
  right: 20px;
  width: 220px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Chart = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F0F0FF;
    border-radius: 50%;
  }

  img {
    width: 32px;
    height: 32px;
    position: relative;
    z-index: 1;
  }
`;

const IssuesInfo = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0 0 4px 0;
  }

  .trend {
    font-size: 12px;
    color: #4CAF50;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

const LogoTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 8px;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 24px;
    font-weight: 600;
    color: #1A1A1A;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #1A1A1A;
  text-align: center;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 32px;
    height: 32px;
  }
`;

const TabContainer = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 30px;
  background: #F1F1F1;
  border-radius: 6px;
  padding: 4px;
`;

const Tab = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  background: ${props => props.active ? '#007BFF' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666666'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.active ? '#0056B3' : '#E5E5E5'};
  }
`;

const SignInButton = styled.button`
  width: 90%;
  height: 50px;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: #1A1A1A;
  }

  &:hover {
    background: #F8F9FA;
  }
`;

const Footer = styled.p`
  font-size: 12px;
  color: #757575;
  text-align: center;
  margin-top: auto;
  padding-top: 20px;

  a {
    color: #1A1A1A;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Dashboard />;
  }

  return (
    <Container>
      <LeftPanel>
        <TopCard>
          <CardHeader>
            <h2>
              <img src={logo} alt="CodeAnt AI" />
              AI to Detect & Autofix Bad Code
            </h2>
          </CardHeader>
          <MetricsGrid>
            <Metric>
              <h3>30+</h3>
              <p>Language Support</p>
            </Metric>
            <Metric>
              <h3>10K+</h3>
              <p>Developers</p>
            </Metric>
            <Metric>
              <h3>100K+</h3>
              <p>Hours Saved</p>
            </Metric>
          </MetricsGrid>
          <IssuesCard>
            <Chart>
              <img src={logo} alt="CodeAnt AI" />
            </Chart>
            <IssuesInfo>
              <h3>500K+</h3>
              <div className="trend">
                ↑ 14% <span>This week</span>
              </div>
            </IssuesInfo>
          </IssuesCard>
        </TopCard>
      </LeftPanel>

      <RightPanel>
        <LogoTitle>
          <img src={logo} alt="CodeAnt AI" />
          <span>CodeAnt AI</span>
        </LogoTitle>
        <Title>
          Welcome to CodeAnt AI
        </Title>

        <TabContainer>
          <Tab active>SAAS</Tab>
          <Tab>Self Hosted</Tab>
        </TabContainer>

        <SignInButton onClick={handleLogin}>
          <img src={githubIcon} alt="GitHub" />
          <span>Sign in with Github</span>
        </SignInButton>

        <SignInButton onClick={handleLogin}>
          <img src={bitbucketIcon} alt="Bitbucket" />
          <span>Sign in with Bitbucket</span>
        </SignInButton>

        <SignInButton onClick={handleLogin}>
          <img src={azureIcon} alt="Azure DevOps" />
          <span>Sign in with Azure Devops</span>
        </SignInButton>

        <SignInButton onClick={handleLogin}>
          <img src={gitlabIcon} alt="GitLab" />
          <span>Sign in with GitLab</span>
        </SignInButton>

        <Footer>
          By signing up you agree to the <a href="#">Privacy Policy</a>
        </Footer>
      </RightPanel>
    </Container>
  );
}

export default App;
