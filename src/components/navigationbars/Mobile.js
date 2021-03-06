/**
 * @author FarminF
 * @email farmin.f@gmail.com
 * @create date 2018-07-02 12:40:39
 * @modify date 2018-07-02 12:40:39
 * @desc [description]
 */
import React from "react";
// import { connect } from "react-redux";
import { Menu, Responsive, Header } from "semantic-ui-react";
// import PopupMessage from '../components/PopupMessage';
// import ProfileMenu from "../components/ProfileMenu";
// import logo from "../images/logo-white.png";

class NavigationbarMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;
    return (
      <Responsive maxWidth={530}>
        <div className="nav-bar">
          <Menu fixed="top" inverted>
            <Menu.Item>
              <Header
                as="h2"
                inverted
                style={{
                  color: "white",
                  fontSize: "1.5em",
                  fontWeight: "700"
                }}
              >
                S3 WebApp
              </Header>
            </Menu.Item>

            {/*<Container>
              <Menu.Item position="right">
                <ProfileMenu user={this.props.user} />
              </Menu.Item>
            </Container>*/}
          </Menu>
        </div>

        <div className="body-mobile">
          {/*<PopupMessage/> */}
          {children}
        </div>
      </Responsive>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   return { auth: state.auth };
// };

export default NavigationbarMobile;
