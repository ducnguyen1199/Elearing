import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../redux/actions/index";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Intro = () => {
  const { listCourse } = useSelector((state) => state.khoaHocReducer);
  const dispatch = useDispatch();
  let ref = useRef();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(actions.actGetListCourseAPI());
  }, []);
  const scrollDown = () => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop,
    });
  };
  const handleOnChange = (event) => {
    let { value } = event.target;
    setKeyword(value);
  };
  const renderContentSearch = () =>
    keyword &&
    listCourse
      .filter((item) => {
        return (
          item.tenKhoaHoc.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
      })
      .map((item, index) => {
        return (
          <NavLink to={"/home/detail-course/" + item.maKhoaHoc} key={index}>
            <span>
              {item.tenKhoaHoc.slice(0, 20)}{" "}
              {item.tenKhoaHoc.length > 20 && "..."}
            </span>
            <span className="d-none d-md-block">
              {item.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
            </span>
          </NavLink>
        );
      });
  return (
    <section
      className="intro"
      style={{
        backgroundImage: `url(/img/blog-4.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overflow"></div>
      <div className="content">
        <div>
          <h3 className="head-title">
            Kho tàng Khóa Học <b>Elearning</b>
          </h3>
          <p className="head-subtitle">
            Chúng tôi tự hào đem đến cho các bạn nội dung mới nhất
            <br />
            trong từng khóa học.
          </p>
          <div className="form-group">
            <div className="search">
              <input
                type="text"
                placeholder="What course are you looking for?"
                className="form-control"
                onKeyUp={handleOnChange}
              ></input>
              {keyword && (
                <div className="content-search">{renderContentSearch()}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-down" onClick={scrollDown}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div ref={ref}></div>
    </section>
  );
};

export default Intro;
