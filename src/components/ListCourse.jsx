import * as actions from "../redux/actions/index";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { NavLink } from "react-router-dom";
import AOS from "aos";

const ListCourse = (props) => {
  const dispatch = useDispatch();
  const { listCourse } = useSelector((state) => state.khoaHocReducer);
  const { accountInfo } = useSelector((state) => state.NguoiDungReducer);
  useEffect(() => {
    dispatch(actions.actGetListCourseAPI());
    dispatch(actions.actGetInfoAccount());
    AOS.init();
  }, []);

  const renderListCourse = () => {
    if (listCourse.length) {
      return listCourse.slice(0, 6).map((item, index) => (
        <div className="item-course col-12 col-md-6 col-xl-4" key={index}>
          <CourseItem course={item} history={props.history} />
        </div>
      ));
    }
  };
  return (
    <section
      className="list-course"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <h3 className="title h-t">Những khóa học mới nhất</h3>

      <div className="lc-main-content">
        <div className="lc-content row">{renderListCourse()}</div>
        <div className="lc-btn-group">
          <NavLink to="/home/courses">
            Xem tất cả khóa học<i className="fa fa-angle-double-right"></i>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ListCourse;
