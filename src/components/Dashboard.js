import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: white;
  position: relative;
  overflow-x: hidden;
`;

const MobileHeader = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: white;
  padding: 0 20px;
  border-bottom: 1px solid #E0E0E0;
  z-index: 1000;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  
  img {
    width: 32px;
    height: 32px;
  }
  
  span {
    font-size: 20px;
    font-weight: 500;
    color: #1A1A1A;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #1A1A1A;
  position: absolute;
  top: 16px;
  right: 16px;
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 2000;
  padding: 20px;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const UserDropdown = styled.div`
  background: white;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 12px 16px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  
  &::after {
    content: '▼';
    font-size: 12px;
    color: #666;
  }
`;

const MobileMenuItem = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: #1A1A1A;
  border-bottom: 1px solid #F0F0F0;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background: white;
  border-right: 1px solid #E0E0E0;
  padding: 20px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainMenuItems = styled.div`
  flex: 1;
`;

const BottomMenuItems = styled.div`
  margin-top: auto;
  border-top: 1px solid #E0E0E0;
  padding-top: 16px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  margin-bottom: 24px;

  img {
    width: 32px;
    height: 32px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
    color: #1A1A1A;
  }
`;

const UserSelect = styled.div`
  padding: 8px 12px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #F8F9FA;
  }
`;

const MenuItem = styled.div`
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${props => props.active ? '#007BFF' : '#666666'};
  background: ${props => props.active ? '#F0F7FF' : 'transparent'};

  &:hover {
    background: #F8F9FA;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  margin-left: 250px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 80px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1A1A1A;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  ${props => props.primary ? `
    background: #007BFF;
    color: white;
    border: none;
    
    &:hover {
      background: #0056B3;
    }
  ` : `
    background: white;
    color: #1A1A1A;
    border: 1px solid #E0E0E0;
    
    &:hover {
      background: #F8F9FA;
    }
  `}
`;

const SearchBar = styled.div`
  margin-bottom: 24px;
  
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #007BFF;
    }
  }
`;

const RepoGrid = styled.div`
  display: grid;
  gap: 16px;
`;

const RepoCard = styled.div`
  padding: 20px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: white;

  &:hover {
    border-color: #007BFF;
  }
`;

const RepoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const RepoTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #1A1A1A;
  margin: 0;
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  background: ${props => props.private ? '#F8F9FA' : '#E3F2FD'};
  color: ${props => props.private ? '#666666' : '#0D47A1'};
`;

const RepoInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #666666;
`;

const RepoStats = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenuItem, setActiveMenuItem] = useState('repositories');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const repositories = [
    {
      name: 'design-system',
      language: 'React',
      size: '7320 KB',
      updated: '1 day ago',
      isPublic: true
    },
    {
      name: 'codeant-ci-app',
      language: 'Javascript',
      size: '5871 KB',
      updated: '2 days ago',
      isPublic: false
    },
    {
      name: 'analytics-dashboard',
      language: 'Python',
      size: '4521 KB',
      updated: '5 days ago',
      isPublic: false
    },
    // Add more repositories as needed
  ];

  return (
    <DashboardContainer>
      <MobileHeader>
        <LogoContainer>
          <img src={logo} alt="CodeAnt AI" />
          <span>CodeAnt AI</span>
        </LogoContainer>
        <HamburgerButton onClick={toggleMobileMenu}>☰</HamburgerButton>
      </MobileHeader>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <LogoContainer>
          <img src={logo} alt="CodeAnt AI" />
          <span>CodeAnt AI</span>
        </LogoContainer>
        <CloseButton onClick={closeMobileMenu}>×</CloseButton>

        <UserDropdown>
          UtkarshDhairyaPanwar
        </UserDropdown>

        <MobileMenuItem onClick={() => { setActiveMenuItem('repositories'); closeMobileMenu(); }}>
          🏠 Repositories
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('codereview'); closeMobileMenu(); }}>
          💻 AI Code Review
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('security'); closeMobileMenu(); }}>
          🔒 Cloud Security
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('howto'); closeMobileMenu(); }}>
          📖 How to Use
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('settings'); closeMobileMenu(); }}>
          ⚙️ Settings
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('support'); closeMobileMenu(); }}>
          📞 Support
        </MobileMenuItem>
        <MobileMenuItem onClick={() => { setActiveMenuItem('logout'); closeMobileMenu(); }}>
          ↪️ Logout
        </MobileMenuItem>
      </MobileMenu>

      <Sidebar>
        <MainMenuItems>
          <LogoSection>
            <img src={logo} alt="CodeAnt AI" />
            <span>CodeAnt AI</span>
          </LogoSection>
          
          <UserSelect>
            UtkarshDhairyaPanwar
          </UserSelect>

          <MenuItem active={activeMenuItem === 'repositories'}>
            🏠 Repositories
          </MenuItem>
          <MenuItem>
            💻 AI Code Review
          </MenuItem>
          <MenuItem>
            🔒 Cloud Security
          </MenuItem>
          <MenuItem>
            📖 How to Use
          </MenuItem>
          <MenuItem>
            ⚙️ Settings
          </MenuItem>
        </MainMenuItems>

        <BottomMenuItems>
          <MenuItem>
            📞 Support
          </MenuItem>
          <MenuItem onClick={() => setIsLoggedIn(false)}>
            ↪️ Logout
          </MenuItem>
        </BottomMenuItems>
      </Sidebar>

      <MainContent>
        <Header>
          <Title>Repositories</Title>
          <HeaderActions>
            <Button>
              🔄 Refresh All
            </Button>
            <Button primary>
              + Add Repository
            </Button>
          </HeaderActions>
        </Header>

        <SearchBar>
          <input 
            type="text" 
            placeholder="Search Repositories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>

        <RepoGrid>
          {repositories.map(repo => (
            <RepoCard key={repo.name}>
              <RepoHeader>
                <RepoTitle>{repo.name}</RepoTitle>
                <Badge private={!repo.isPublic}>
                  {repo.isPublic ? 'Public' : 'Private'}
                </Badge>
              </RepoHeader>
              <RepoInfo>
                <RepoStats>
                  <span style={{ color: repo.language === 'React' ? '#61DAFB' : 
                                repo.language === 'Javascript' ? '#F7DF1E' : 
                                repo.language === 'Python' ? '#3776AB' : 
                                repo.language === 'Swift' ? '#FA7343' :
                                repo.language === 'Java' ? '#007396' :
                                repo.language === 'HTML/CSS' ? '#E34F26' :
                                '#666666' }}>●</span>
                  <span>{repo.language}</span>
                </RepoStats>
                <span>{repo.size}</span>
                <span>Updated {repo.updated}</span>
              </RepoInfo>
            </RepoCard>
          ))}
        </RepoGrid>
      </MainContent>
    </DashboardContainer>
  );
}

export default Dashboard;
