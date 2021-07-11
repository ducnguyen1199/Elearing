import React, { useEffect, useRef, useState } from "react";
import { useCountUp } from "react-countup";

const CountUp = ({ end, isReset }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: 0,
    duration: 5,
  });

  useEffect(() => {
    update(isReset ? end : 0);
  }, [isReset]);
  return (
    <div>
      <p className="amount">{countUp}</p>
    </div>
  );
};

const InfoElearning = () => {
  const ref = useRef();
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window?.pageYOffset >= ref?.current?.offsetTop - 500) {
        setIsReset(true);
      } else {
        setIsReset(false);
      }
    });
  }, []);

  return (
    <section
      className="info-elearning"
      style={{ backgroundImage: "url('./img/bg-info-elearning.jpg')" }}
      ref={ref}
    >
      <div
        className="ie-overflow"
        style={{ backgroundImage: "url('./img/bg-2.png')" }}
      ></div>
      <div className="ie-content">
        <div className="icon-group">
          <i className="fa fa-edit" aria-hidden="true"></i>
          <div className="name-icon">Giảng viên</div>
          <CountUp end={100} isReset={isReset} setIsReset={setIsReset} />
        </div>
        <div className="icon-group">
          <i className="fa fa-book"></i>
          <div className="name-icon">Khóa học</div>
          <CountUp end={1000} isReset={isReset} setIsReset={setIsReset} />
        </div>
        <div className="icon-group">
          <i className="fa fa-mortar-board"></i>
          <div className="name-icon">Học viên</div>
          <CountUp end={999} isReset={isReset} setIsReset={setIsReset} />
        </div>
      </div>
    </section>
  );
};

export default InfoElearning;
