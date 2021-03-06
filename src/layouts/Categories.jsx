import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react'

export default function Categories() {
  const location = useLocation().pathname;

  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name="home"
        />
        <Menu.Item
          name="messages"
        />
        <Menu.Item
          name="friends"
        />
      </Menu>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobads"} active={location==="/jobads" || location==="/"}>
            <Icon name="list" />
            İş ilanları        
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"} active={location==="/employers"}>
            <Icon name="factory" />
            İş verenler       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidatesListView"} active={location==="/candidatesListView"}>
          <Icon name="user" />
          Kullanıcılar
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"} active={location==="/cvs"}>
          <Icon name="wordpress forms" />
          Cvler
        </Menu.Item>
      </Menu>
    </div>
  );
}
