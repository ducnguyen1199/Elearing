import React from "react";
import { Pie } from "react-chartjs-2";
import { Row, Col, Container } from "reactstrap";
import PeopleIcon from "@material-ui/icons/People";
import CategoryIcon from "@material-ui/icons/Category";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import { Divider } from "@material-ui/core";
import Swal from "sweetalert2";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const chartjsOptions = {
  layout: {
    padding: { left: 0, right: 0, top: 5, bottom: 5 },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "single",
    callbacks: {
      label: function (tooltipItems, data) {
        var sum = data.datasets[0].data.reduce(add, 0);
        function add(a, b) {
          return a + b;
        }

        return (
          parseInt(
            (data.datasets[0].data[tooltipItems.index] / sum) * 100,
            10
          ) + " %"
        );
      },
    },
  },
  legend: { position: "right" },
};
const backgroundColorArr = [
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#63FF84",
  "#EBC6A2",
  "#F9F306",
];

const Dashboard = (props) => {
  const renderBox = (data) =>
    data.map((item, index) => (
      <Col sm={4} className="box-contain" key={index}>
        <div className="box-contain-content d-flex justify-content-around align-items-center">
          <item.icon
            className="icon"
            style={{
              backgroundColor: backgroundColorArr[index] + "c2",
              boxShadow: `0 0 0 10px ${backgroundColorArr[index] + "36"}`,
            }}
          />
          <div className="text-gr">
            <h1>{item.text}</h1>
            <h2>{item.statistics}</h2>
          </div>
        </div>
      </Col>
    ));
  const renderPie = (title, data, labels) => (
    <div className="box-contain-content">
      <h5>{title}</h5>
      <Divider />
      <div>
        <Pie
          options={chartjsOptions}
          height={300}
          width={300}
          data={{
            datasets: [
              {
                data,
                backgroundColor: backgroundColorArr,
                hoverBackgroundColor: backgroundColorArr,
              },
            ],
            labels,
          }}
        />
      </div>
    </div>
  );

  const renderUserWaiting = (data) => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.account.taiKhoan}</td>
          <td>{item.course.tenKhoaHoc}</td>
          <td>
            <CheckIcon
              style={{ color: "green" }}
              className="cursor-pointer"
              onClick={() => {
                props.acceptCourse({
                  maKhoaHoc: item.maKhoaHoc,
                  taiKhoan: props.id,
                  tenKhoaHoc: item.tenKhoaHoc,
                });
              }}
            />
            <CloseIcon
              color="secondary"
              className="cursor-pointer"
              onClick={() => {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  icon: "warning",
                  html: `<h3 style="color:#f8bb86"><b>WARNING!</b></h3><b>Bạn có muốn hủy ghi danh khóa học này không?</b>`,
                  showCancelButton: true,
                  confirmButtonColor: "#d33",
                  cancelButtonColor: "#3085d6",
                  confirmButtonText: "Đồng ý",
                  cancelButtonText: "Hủy",
                  reverseButtons: true,
                }).then((rs) => {
                  if (rs.value) {
                    props.cancelAttendCourse({
                      maKhoaHoc: item.maKhoaHoc,
                      taiKhoan: props.id,
                    });
                  }
                });
              }}
            />
          </td>
        </tr>
      );
    });
  };
  return (
    <Container>
      <Row className="mb-5">
        {renderBox([
          { text: "Người Dùng", icon: PeopleIcon, statistics: 999 },
          {
            text: "Danh Mục",
            icon: CategoryIcon,
            statistics: 8,
          },
          { text: "Khóa Học", icon: LaptopChromebookIcon, statistics: 999 },
        ])}
      </Row>
      <Row className="mb-5">
        <Col sm={6} className="box-contain">
          {renderPie(
            "Số lượng khóa học theo danh mục",
            [1286, 320, 1976, 1286, 320, 1976],
            [
              "Route Deviation",
              "Battery Disconnection",
              "OverSpeed",
              "SOS",
              "Rash Driving",
              "OverStay",
            ]
          )}
        </Col>
        <Col sm={6} className="box-contain">
          {renderPie(
            "Những khóa học có nhiều học viên nhất",
            [1286, 320, 1976, 1286, 320, 1976],
            [
              "Route Deviation",
              "Battery Disconnection",
              "OverSpeed",
              "SOS",
              "Rash Driving",
              "OverStay",
            ]
          )}
        </Col>
      </Row>
      <div className="box-contain">
        <div className="box-contain-content">
          <h5>Học viên đang chờ xét duyệt</h5>
          <div style={{ height: 500, overflowY: "scroll" }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>TÀI KHOẢN</th>
                  <th>KHÓA HỌC</th>
                  <th>THAO TÁC</th>
                </tr>
              </thead>
              <tbody>
                {renderUserWaiting([
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                  {
                    account: { taiKhoan: "name" },
                    course: { tenKhoaHoc: "reactJS" },
                  },
                ])}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
