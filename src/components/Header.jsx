import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";
import classnames from "classnames";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import PersonIcon from "@material-ui/icons/Person";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
      transparent:
        window.location.pathname === "/" ||
        window.location.pathname === "/home" ||
        window.location.pathname === "/home/dang-nhap" ||
        window.location.pathname === "/home/dang-ky",
      updateCart: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  componentWillReceiveProps() {
    this.handleAddtoCart();
  }
  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const transparent =
      currentScrollPos === 0 &&
      (window.location.pathname === "/" ||
        window.location.pathname === "/home" ||
        window.location.pathname === "/home/dang-nhap" ||
        window.location.pathname === "/home/dang-ky");
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      transparent,
    });
  };
  handleAddtoCart = () => {
    this.setState({
      visible: true,
      updateCart: true,
    });
    setTimeout(() => {
      this.setState({
        updateCart: false,
      });
    }, 1000);
  };
  renderCart = () => {
    if (this.props.listCart.length) {
      return this.props.listCart.map((item, index) => {
        return (
          <div key={index} className="item-cart">
            <div className="d-flex justify-content-start">
              <img src={item.hinhAnh} />
              <div className="ct-item-cart ">
                <h5>{item.tenKhoaHoc}</h5>
                <p>{item.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                <p className="fee">${item.fee}</p>
              </div>
            </div>
            <div
              onClick={() => {
                this.props.deleteIntoCart(item.maKhoaHoc);
              }}
            >
              <i className="fa fa-times"></i>
            </div>
          </div>
        );
      });
    }
  };
  handleLogout = () => {
    this.props.handleOnLogout();
  };
  totalCart = () => {
    return this.props.listCart.reduce((rs, item) => {
      return rs + item.fee;
    }, 0);
  };
  handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("infoAccount");
    window.location.replace("/");
  };
  savePrevPage = () => {
    if (
      window.location.pathname !== "/home/dang-ky" &&
      window.location.pathname !== "/home/dang-nhap"
    )
      localStorage.setItem(
        "prevPage",
        JSON.stringify(window.location.pathname + window.location.search)
      );
  };
  renderAccount = () => {
    if (localStorage.getItem("user")) {
      let account = JSON.parse(localStorage.getItem("user"));
      return (
        <Fragment>
          {account.maLoaiNguoiDung === "GV" && (
            <div className="info-account">
              <NavLink to="/admin/dashboard" className="setting">
                <i className="fa fa-cog"></i>
              </NavLink>
            </div>
          )}
          <div className="account">
            <div>
              <div className="account-img">
                <img src="http://bootdey.com/img/Content/User_for_snippets.png" />
                <span>{account.taiKhoan}</span>
              </div>
              <div className="account-content">
                <NavLink to="/home/profile">
                  <PersonIcon /> Tài khoản
                </NavLink>
                <p onClick={this.handleLogout}>
                  <ExitToAppIcon /> Đăng xuất
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <div className="account">
          <NavLink to="/home/dang-nhap" onClick={this.savePrevPage}>
            <i className="fa fa-user user-signin" aria-hidden="true"></i>
          </NavLink>
          <NavLink
            className="btn--blue bttn "
            to="/home/dang-nhap"
            onClick={this.savePrevPage}
          >
            ĐĂNG NHẬP
          </NavLink>
          <NavLink className="signup btn--black bttn " to="/home/dang-ky">
            ĐĂNG KÝ
          </NavLink>
        </div>
      );
    }
  };
  goTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <>
        <header
          className={classnames("header", {
            "navbar--hidden": !this.state.visible,
            "header-transparent": this.state.transparent,
          })}
        >
          <nav className="navbar navbar-expand-md justify-content-md-between">
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>
            <NavLink className="navbar-brand" to="/home">
              <h1>Elearning</h1>
            </NavLink>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${
                      window.location.pathname === "/" && "active"
                    }`}
                    to="/home"
                    activeClassName="active"
                    exact
                  >
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home/courses">
                    KHÓA HỌC
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home/blog">
                    BLOG
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink className="nav-link" to="/home/home-about">
                  ABOUT
                </NavLink>
              </li> */}
              </ul>
            </div>
            <div className="navbar-right">
              <div className="cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <div
                  className={classnames("amount", {
                    updateCart: this.state.updateCart,
                  })}
                >
                  <span>{this.props.listCart.length}</span>
                </div>
                <div className="mct-cart">
                  {this.props.listCart.length === 0 ? (
                    <div className="no-course">
                      Không có khóa học nào trong giỏ hàng
                    </div>
                  ) : (
                    <Fragment>
                      <div className="total">
                        Thành Tiền: ${this.totalCart()}
                      </div>
                      <div className="ct-cart">{this.renderCart()}</div>
                      <div className="d-flex justify-content-around">
                        <NavLink
                          className="btn-neon bttn"
                          to="/home/detail-cart"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          ĐI TỚI GIỎ HÀNG
                        </NavLink>
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
              {this.renderAccount()}
            </div>
          </nav>
        </header>
        <div
          className="end-header"
          style={{ height: !this.state.visible && 42 }}
        ></div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    listCart: state.GioHangReducer.listCart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteIntoCart: (maKhoaHoc) => {
      dispatch(actions.actDeleteIntoCart(maKhoaHoc));
    },
    handleOnLogout: () => {
      dispatch(actions.actLogOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
