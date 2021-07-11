import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Divider } from "@material-ui/core";
import { useHistory } from "react-router";

const listTab = [
  { text: "Thống Kê", icon: DashboardIcon, path: "/admin/dashboard" },
  { text: "Quản Lý Người Dùng", icon: PeopleIcon, path: "/admin/user" },
  {
    text: "Quản Lý Khóa Học",
    icon: LaptopChromebookIcon,
    path: "/admin/courses",
  },
  {
    text: "Xét Duyệt Học Viên",
    icon: PostAddIcon,
    path: "/admin/user-waiting",
  },
];

const SideBar = ({ isOpen, setIsOpen }) => {
  const history = useHistory();
  const renderListTab = () => (
    <div onClick={() => setIsOpen(false)}>
      <List>
        <ListItem
          button
          className="navbar-brand"
          onClick={() => history.push("/admin/dashboard")}
        >
          <img src="/img/logo.png" className="img-fluid" />
          <h1>Elearning</h1>
        </ListItem>
        <Divider />
        {listTab.map((item, index) => (
          <ListItem button key={index} onClick={() => history.push(item.path)}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer anchor={"left"} open={isOpen} onClose={() => setIsOpen(false)}>
      {renderListTab()}
    </Drawer>
  );
};

export default SideBar;
