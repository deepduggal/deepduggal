import React, {PureComponent} from 'react';
import {StyleSheet, css} from "aphrodite";

class NavLink extends PureComponent {
    render () {
        const {href} = this.props;

        return (
            <a className={css(styles.link)} href={href}>{this.props.children}</a>
        );
    }
}

const styles = StyleSheet.create({
    link: {
        textDecoration: "none",
        color: "#111111",
        ":hover": {
            color: "#999999",
            transition: "color 0.2s"
        }
    }
});

export default NavLink;