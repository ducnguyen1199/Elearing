import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../redux/actions/index";
import AOS from "aos";
const Category = () => {
  const { listCategoryCourse } = useSelector((state) => state.khoaHocReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.actGetCategoryCourseAPI());
    AOS.init();
  }, []);
  const renderCategoryHTML = () =>
    listCategoryCourse.length &&
    listCategoryCourse.map((item, index) => (
      <div className="col-4 col-md-2">
        <NavLink
          className="item-category"
          style={{
            backgroundImage: `url(/img/cate-${index + 1}.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          to={`/home/courses/${item.maDanhMuc}`}
        >
          <div className="overflow"></div>
          <div className="content">
            <div className="text-center">
              <h6>{item.tenDanhMuc}</h6>
            </div>
          </div>
        </NavLink>
      </div>
    ));
  return (
    <section className="category ">
      <div className="wallpaper">
        <img src="./img/bg-3.png" alt="wallpaper" />
      </div>

      <h3 className="title h-t" data-aos="fade-down" data-aos-duration="1300">
        Danh Mục Của Chúng Tôi
      </h3>
      <div className="container">
        <div className="row" data-aos="fade-right" data-aos-duration="1000">
          {renderCategoryHTML()}
        </div>
      </div>
    </section>
  );
};

export default Category;
