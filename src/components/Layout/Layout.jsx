import { Suspense } from "react";
import { Container, Header, LinkList, StyledLink } from "./Layout.styled";

const { NavLink, Outlet, Link } = require("react-router-dom")

const Layout = () => {

    return (
        <Container>
            <Header>
            <nav>
                <LinkList>
                   <li><StyledLink to="/">Home</StyledLink></li>
                    <li><StyledLink to="/movies">Movies</StyledLink></li>
                </LinkList>
            </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
           </Suspense>
        </Container>
        
    )
}

export default Layout;