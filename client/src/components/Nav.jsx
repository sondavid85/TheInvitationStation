import React from "react";
import { Button } from "react-bootstrap";
import AuthService from "../utils/auth";

function Nav() {
    const handleLogout = () => {
        AuthService.logout();
    }

    return (
        <nav style={styles.nav}>
            <Button variant="primary" onClick={handleLogout} style={styles.button}>
                Logout
            </Button>
        </nav>
    );
}

const styles = {
    nav: {
        width: '100%',
        maxWidth: '7xl',
        margin: '6px auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        marginRight: '6px',
    },
};

export default Nav;
