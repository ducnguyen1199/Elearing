import React, { useEffect } from "react";
import AOS from "aos";
const StepBuyCourse = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="stepbuycourse text-center"
      style={{
        backgroundImage: "url('./img/group-3.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <h3
        className="title"
        data-aos-delay="100"
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        Hưỡng dẫn đăng ký
      </h3>
      <div
        className="content"
        data-aos-delay="700"
        data-aos="zoom-out"
        data-aos-duration="600"
      >
        <div className="step-group">
          <div>
            1<br />
            Bước
          </div>
          <p>Chọn khóa học</p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            2<br />
            Bước
          </div>
          <p>
            Thêm vào
            <br />
            giỏ hàng
          </p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            3<br />
            Bước
          </div>
          <p>
            Đăng ký
            <br />
            khóa học
          </p>
        </div>
        <div className="line"></div>
        <div className="step-group">
          <div>
            4<br />
            Bước
          </div>
          <p>
            Chờ
            <br />
            xét duyệt
          </p>
        </div>
      </div>
    </section>
  );
};
export default StepBuyCourse;
