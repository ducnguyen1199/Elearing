import React from "react";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const UserWaiting = (props) => {
  const renderUserWaiting = (data) => {
    return data.map((item, index) => {
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.account.taiKhoan}</td>
          <td>{item.account.email}</td>
          <td>{item.account.phoneNumber}</td>
          <td>{item.course.tenKhoaHoc}</td>
          <td>{item.course.danhMuc.tenDanhMuc}</td>
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
    <>
      <Loading />
      <section className="user-management">
        <div className="user-management-tittle">
          <h3 className="title">XÉT DUYỆT HỌC VIÊN</h3>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>TÀI KHOẢN</th>
              <th>EMAIL</th>
              <th>SỐ ĐIỆN THOẠI</th>
              <th>KHÓA HỌC</th>
              <th>DANH MỤC</th>
              <th>THAO TÁC</th>
            </tr>
          </thead>
          <tbody>
            {renderUserWaiting([
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
              {
                account: {
                  taiKhoan: "name",
                  email: "abc@gmail.com",
                  phoneNumber: "0359070925",
                },
                course: {
                  tenKhoaHoc: "reactJS",
                  danhMuc: { tenDanhMuc: "Frontend" },
                },
              },
            ])}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default UserWaiting;
