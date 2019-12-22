import React from "react"
import { Sidenav, Nav, Icon, Divider } from "rsuite"

// import "./Menu.module.less"

const instance = () => (
  <div style={{ width: 250 }}>
    <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1">
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<Icon icon="globe" />}>
            Countries
          </Nav.Item>
          <Nav.Item eventKey="3" icon={<Icon icon="podcast" />}>
            Stations
          </Nav.Item>
          <Divider />
          <Nav.Item eventKey="4" icon={<Icon icon="page-top" />}>
            Recently Played
          </Nav.Item>
          <Nav.Item eventKey="5" icon={<Icon icon="heart" />}>
            Liked Stations
          </Nav.Item>
          <Nav.Item eventKey="6" icon={<Icon icon="speaker" />}>
            Liked Presenters
          </Nav.Item>
          <Divider />
          <Nav.Item eventKey="7" icon={<Icon icon="play2" />}>
            AOD/VOD (Premium)
          </Nav.Item>
          <Divider />
          <Nav.Item eventKey="8" icon={<Icon icon="info" />}>
            About Us
          </Nav.Item>
          <Nav.Item eventKey="9" icon={<Icon icon="product-hunt" />}>
            Products
          </Nav.Item>
          <Nav.Item eventKey="10" icon={<Icon icon="at" />}>
            Contact Us
          </Nav.Item>
          <Nav.Item eventKey="11" icon={<Icon icon="help-o" />}>
            Help/Support
          </Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
)

export default instance
