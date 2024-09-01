"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css'
import { usePathname } from 'next/navigation';
const Header = () => {
const currentPath = usePathname()
    return (
       <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className={`me-auto ${styles.link}`}>
            <Link href="/" className={(currentPath=="/")?"bg-danger":""}>Home</Link>
            <Link href="/about-us" className={(currentPath=="/about-us")?"bg-danger":""}>About</Link>
            <Link href="/contact-us" className={(currentPath=="/contact-us")?"bg-danger":""}>Contact</Link>
            <Link href="/products" className={(currentPath=="/products")?"bg-danger":""}>Products</Link>
            <Link href="/login" className={(currentPath=="/login")?"bg-danger":""}>Login</Link>

          </Nav>
        </Container>
      </Navbar>
       </>
    );
}

export default Header;
