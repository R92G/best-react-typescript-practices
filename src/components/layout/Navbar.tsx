import { Logo } from "./Logo";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import useSearchModal from "../../stores/useSearchModal";
import styled from "styled-components";

export const Navbar = () => {
  const searchModal = useSearchModal();
  return (
    <Header>
      <Logo />

      {/* Navigation */}
      <Nav>
        <NavLink href="/categories">Categories</NavLink>
      </Nav>

      {/* Icons */}

      <IconContainer>
        <IconWrapper onClick={searchModal.openSearch}>
          <FaSearch />
        </IconWrapper>
        {/* Favorites Icon */}
        <IconWrapper onClick={() => {}}>
          <FaHeart />
        </IconWrapper>

        {/* Cart Icon */}
        <IconWrapper onClick={() => {}}>
          <FaShoppingCart />
        </IconWrapper>
      </IconContainer>
    </Header>
  );
};

const Header = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: #4a4a4a;
  text-decoration: none;
  padding: 8px 0;
  transition: all 0.3s ease;
  border-radius: 0;
  text-align: center;

  &:hover {
    color: white;
    background-color: black;
    padding: 8px 16px; // Vergroot padding bij hover voor pill-effect
    border-radius: 9999px; // Maak het volledig rond voor een pill-effect
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-right: 16px;
`;

const IconWrapper = styled.div`
  position: relative;
  color: #4a4a4a;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #1a1a1a;
  }
`;
