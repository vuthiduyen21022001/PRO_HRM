import React, { useEffect } from "react";
import styled from "styled-components";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Header from "../../components/Header/Header";

import "./style.css";


const Footer = styled.div`
  background: black;
  height: auto;
  color: white;
  .footer_container {
    max-width: 1100px;
    height: auto;
    .footer_content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .footer_item {
        /* margin: auto; */
      }
    }
  }
`;
export default function HomePages() {
  // useEffect(() => {
  //   courseService
  //     .getListCourse()
  //     .then((res) => {
  //       console.log(321, res);
  //       //  setMovie(res?.data?.content);
  //     })
  //     .catch((err) => {
  //       console.log("error:", err);
  //     });
  // });
  return (
    <div>
      {/* <Header /> */}
      <SimpleSlider />
      {/* <Footer>
        <div className="footer_container">
          <div className="footer_content">
            <div className="footer_item">1</div>
            <div className="footer_item">2</div>
            <div className="footer_item">3</div>
            <div className="footer_item">4</div>
            <div className="footer_item">5</div>
          </div>
        </div>
      </Footer> */}
      <div>

        <div className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a href="" className="navbar-brand">HRM</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav ml-auto">
                <a href="http://localhost:3000/usermanagement" className="nav-item nav-link">Trang quản lý</a>
                
                {/* <button className="Navbar_myLearn">Hi! </button>
                <img
                className="Navbar_avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuy-Mq0d9zyb72Vv92LeXE7b0jSsMEr962atWeNUJY_w&s"
                alt=""
              /> */}
                <a href="http://localhost:3000/login" className="nav-item nav-link">Login</a>
                <a href="http://localhost:3000/register" className="nav-item nav-link">Register</a>
              </div>
            </div>
          </div>
        </div>
    
        {/* Video Modal Start*/}
        <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
                {/* 16:9 aspect ratio */}
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Video Modal End */}
        {/* Fact Start */}
        <div className="fact">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <img src="img/icon-4.png" alt="Icon" />
                  <h2>Đội ngũ team</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <img src="img/icon-1.png" alt="Icon" />
                  <h2>Tiếp nhận cá nhân</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <img src="img/icon-8.png" alt="Icon" />
                  <h2>100% Thành công</h2>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="fact-item">
                  <img src="img/icon-6.png" alt="Icon" />
                  <h2>100% Hài lòng</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fact Start */}
        {/* About Start */}
        <div className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="about-img">
                  <div className="about-img-1">
                    <img src="img/about-2.jpg" alt="Image" />
                  </div>
                  <div className="about-img-2">
                    <img src="img/about-1.jpg" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-header">
                  <p>Tìm hiểu về chúng tôi</p>
                  <h2>25 năm kinh nghiệm</h2>
                </div>
                <div className="about-text">
                  <p>
                    Chấm công đa dạng hình thức: Khuôn mặt, Wifi, GPS, QR Code </p>
                  <p>Quản lý hàng triệu hồ sơ nhân sự, nhắc gia hạn hợp đồng</p>
                  <p>Tự động tính lương ca kíp, part-time, OT, CTV, nghỉ phép</p>
                  <p>Quản lý thủ tục: Quy hoạch, bổ nhiệm, thuyên chuyển cán bộ</p>
                  <p>150+ mẫu báo cáo dành cho CEO, HR</p>
                  <p>Quyết toán Thuế TNCN tự động, kết nối Cơ quan BHXH</p>

                  <a className="btn" href>Tìm hiểu thêm</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Service Start */}
        <div className="service">
          <div className="container">
            <div className="section-header">
              <p>Các dịch vụ tư vấn</p>
              <h2>Dịch vụ tư vấn tốt nhất của chúng tôi</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-1.png" alt="Icon" />
                  <h3>Chiến lược kinh doanh</h3>
                  <p>
                    Nên cung cấp các giải pháp quản lý nhân sự toàn diện để hỗ trợ các tổ chức trong quá trình tuyển dụng, đào tạo, quản lý và phát triển nhân viên.                  </p>
                  <a href>Đoc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-2.png" alt="Icon" />
                  <h3>Quản lý dự án</h3>
                  <p>
                    Trước khi bắt đầu dự án, cần xác định rõ mục tiêu, phạm vi và các yêu cầu của dự án. Việc này giúp định hướng và tập trung cho các hoạt động quản lý dự án.                  </p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-3.png" alt="Icon" />
                  <h3>Nghiên cứu thị trường</h3>
                  <p>
                    Để bắt đầu nghiên cứu thị trường, HRM cần xác định rõ mục tiêu của nghiên cứu, bao gồm các câu hỏi cần trả lời và thông tin cần thu thập.                  </p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-4.png" alt="Icon" />
                  <h3>Nguồn nhân lực</h3>
                  <p>
                    Tìm kiếm tài năng trong cộng đồng và mạng lưới chuyên môn và tuyển dụng các chuyên gia và chuyên viên có kinh nghiệm trong lĩnh vực của mình.</p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-5.png" alt="Icon" />
                  <h3>Kinh doanh trực tuyến</h3>
                  <p>
                    Thực hiện giao dịch thương mại. Việc kinh doanh trực tuyến có thể bao gồm bán hàng, quảng cáo, cung cấp dịch vụ, chăm sóc khách hàng trực tuyến</p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-6.png" alt="Icon" />
                  <h3>Quản lý vốn</h3>
                  <p>
                    Đánh giá và điều chỉnh việc sử dụng tài nguyên tổ chức hay cá nhân. Vốn gồm nguồn tài chính như tiền mặt, tài sản cố định, tài sản lưu động và khoản nợ.</p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-7.png" alt="Icon" />
                  <h3>Bảo hiểm kinh doanh</h3>
                  <p>Dự trù tài chính cũng giúp tổ chức hay cá nhân chuẩn bị sẵn sàng để đối phó với những khó khăn và rủi ro trong tương lai.</p>
                  <a href>Đọc thêm</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="service-item">
                  <img src="img/icon-8.png" alt="Icon" />
                  <h3>Tiếp tục </h3>
                  <p>
                    Phát triển kế hoạch đào tạo và phát triển nhân viên, và đưa ra các chính sách và thực tiễn tăng cường động lực và tinh thần làm việc của nhân viên.
                  </p>
                  <a href>Đọc thêm</a>
                </div>


              </div>
            </div>
          </div>
        </div>
        {/* Service End */}
        {/* Feature Start */}
        <div className="feature">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="feature-img">
                  <img src="img/business-man.png" alt="Image" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-header">
                  <p>Tính năng của chúng tôi</p>
                  <h2>Tại sao chọn chúng tôi?</h2>
                </div>
                <p>
                  Tự động đăng tin tuyển dụng, tổng hợp công, tính lương và lưu trữ thông tin hồ sơ nhân viên,Sử dụng phần mềm quản lý nhân sự trên mọi thiết bị, tiện lợi làm việc từ xa,
                  Ứng dụng AI, Máy học giúp scan, gợi ý và nhập liệu hồ sơ ứng viên; Trợ lý ảo báo cáo tình hình nhân sự,
                  Toàn bộ dữ liệu được lưu trữ trên Cloud, phân quyền sử dụng tài nguyên. Đạt tiêu chuẩn Tier 3, ISO 27000 và CSA STAR.
                </p>
                <div className="row counters">
                  <div className="col-6">
                    <i className="fa fa-user" />
                    <div className="counters-text">
                      <h2 data-toggle="counter-up">100</h2>
                      <p>Nhân viên của chúng tôi</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <i className="fa fa-users" />
                    <div className="counters-text">
                      <h2 data-toggle="counter-up">200</h2>
                      <p>Khách hàng của chúng tôi</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <i className="fa fa-check" />
                    <div className="counters-text">
                      <h2 data-toggle="counter-up">300</h2>
                      <p>Dự án của chúng tôi</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <i className="fa fa-running" />
                    <div className="counters-text">
                      <h2 data-toggle="counter-up">400</h2>
                      <p>Đang chạy dự án</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Testimonial Start */}
        <div className="testimonial">
          <div className="container">
            <div className="section-header">
              <p>Chứng thực</p>
              <h2>100% Đánh giá tích cực từ khách hàng</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/testimonial-1.jpg" alt="Team Image" />
                    <p> HRM được đánh giá cao khi có tính linh hoạt trong việc thích ứng với các nhu cầu của khách hàng và giúp khách hàng thực hiện các thay đổi trong tổ chức của họ một cách hiệu quả.   </p>
                    <h2>Minh Yến</h2>
                    <h3>Chuyên viên tuyển dụng</h3>
                  </div>



                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/testimonial-2.jpg" alt="Team Image" />
                    <p>
                      Khách hàng đánh giá cao HRM khi họ có khả năng giải quyết các vấn đề về nhân sự nhanh chóng và hiệu quả, giúp khách hàng giải quyết vấn đề một cách thỏa đáng.
                    </p>
                    <h2>Nam Di</h2>
                    <h3>Chuyên viên tư vấn</h3>
                  </div>

                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/testimonial-3.jpg" alt="Team Image" />
                    <p>
                      HRM đánh giá cao khi cung cấp tư vấn chuyên sâu và giúp khách hàng tìm kiếm giải pháp tối ưu cho các vấn đề liên quan đến quản lý nhân sự.</p>
                    <h2>Uyên Vy</h2>
                    <h3>Chủ doanh nghiệp</h3>
                  </div>

                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/testimonial-4.jpg" alt="Team Image" />
                    <p>
                      Khách hàng đánh giá cao HRM khi họ cung cấp các dịch vụ chuyên nghiệp, thể hiện thông qua việc trả lời câu hỏi và giải đáp thắc mắc nhanh chóng và hiệu quả.</p>
                    <h2>Khánh Ly</h2>
                    <h3>Chuyên viên đào tạo</h3>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial End */}
        {/* Team Start */}
        <div className="team">
          <div className="container">
            <div className="section-header">
              <p>Thắc mắc liên hệ .</p>
              <h2>Team của chúng tôi!</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-1.jpg" alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Vũ Duyên</h2>
                    <p>Leader &amp; CEO</p>
                    <div className="team-social">
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-linkedin-in" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-2.jpg" alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Lâm Châu</h2>
                    <p>Coder</p>
                    <div className="team-social">
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-linkedin-in" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-3.jpg" alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Văn Mừng</h2>
                    <p>Code chăm chỉ</p>
                    <div className="team-social">
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-linkedin-in" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-4.jpg" alt="Team Image" />
                  </div>
                  <div className="team-text">
                    <h2>Thành Đạt</h2>
                    <p>Member</p>
                    <div className="team-social">
                      <a href><i className="fab fa-twitter" /></a>
                      <a href><i className="fab fa-facebook-f" /></a>
                      <a href><i className="fab fa-linkedin-in" /></a>
                      <a href><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Contact Start */}
        <div className="contact">
          <div className="container">
            <div className="section-header">
              <p>Liên lạc</p>
              <h2>Hãy liên lạc cho chúng tôi!</h2>
            </div>
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-map-marker-alt" />
                  </div>
                  <div className="contact-text">
                    <h3>Trụ sở chính</h3>
                    <p>25 Street, Hiep Phu, HCM City  </p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone-alt" />
                  </div>
                  <div className="contact-text">
                    <h3>Gọi giúp đỡ</h3>
                    <p>+012 345 6789</p>
                  </div>
                </div>
                <div className="contact-info">
                  <div className="contact-icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="contact-text">
                    <h3>Email </h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact-form">
                  <div id="success" />
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <input type="text" className="form-control" id="name" placeholder="Tên" required="required" data-validation-required-message="Tên" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="email" className="form-control" id="email" placeholder=" Email" required="required" data-validation-required-message="Email" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="text" className="form-control" id="subject" placeholder="Chủ thể" required="required" data-validation-required-message="Chủ thể" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea className="form-control" id="message" placeholder="Tin nhắn" required="required" data-validation-required-message="Tin nhắn" defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button className="btn" type="submit" id="sendMessageButton">Gửi tin nhắn</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        {/* Blog Start */}
        {/* <div className="blog">
          <div className="container">
            <div className="section-header">
              <p>Consulting Blog</p>
              <h2>Latest From Our Consulting Blog</h2>
            </div>
            <div className="owl-carousel blog-carousel">
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-1.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <i className="fa fa-list-alt" />
                    <a href>Category</a>
                    <i className="fa fa-calendar-alt" />
                    <p>01-Jan-2045</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-2.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <i className="fa fa-list-alt" />
                    <a href>Category</a>
                    <i className="fa fa-calendar-alt" />
                    <p>01-Jan-2045</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href>Read More</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <div className="blog-img">
                  <img src="img/blog-3.jpg" alt="Blog" />
                </div>
                <div className="blog-content">
                  <h2 className="blog-title">Lorem ipsum dolor sit amet</h2>
                  <div className="blog-meta">
                    <i className="fa fa-list-alt" />
                    <a href>Category</a>
                    <i className="fa fa-calendar-alt" />
                    <p>01-Jan-2045</p>
                  </div>
                  <div className="blog-text">
                    <p>
                      Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor
                    </p>
                    <a className="btn" href>Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Blog End */}
        {/* Footer Start */}
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-contact">
                      <h2>Trụ sở chính của chúng tôi</h2>
                      <p><i className="fa fa-map-marker-alt" />29 Street, District 9, HCM</p>
                      <p><i className="fa fa-phone-alt" />+012 345 67890</p>
                      <p><i className="fa fa-envelope" />info@example.com</p>
                      <div className="footer-social">
                        <a href><i className="fab fa-twitter" /></a>
                        <a href><i className="fab fa-facebook-f" /></a>
                        <a href><i className="fab fa-youtube" /></a>
                        <a href><i className="fab fa-instagram" /></a>
                        <a href><i className="fab fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-link">
                      <h2>Đường dẫn nhanh</h2>
                      <a href>Điều khoản sử dụng</a>
                      <a href>Chính sách bảo mật</a>
                      {/* <a href>Cookies</a> */}
                      <a href>Giup đỡ</a>
                      <a href>Câu hỏi thường gặp</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="footer-newsletter">
                  <h2>Bản tin</h2>
                  <p>
                  Dễ dàng cài đặt và tinh chỉnh theo nhu cầu của doanh nghiệp, giúp doanh nghiệp số hóa bất kể yêu cầu phức tạp.
                  Thiết kế đa nền tảng cho phép sử dụng trên mọi hệ điều hành.
                  </p>
                  <div className="form">
                    <input className="form-control" placeholder="Email goes here" />
                    <button className="btn">Gửi</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container copyright">
            <div className="row">
              <div className="col-md-6">
                <p>© <a href="#">Nhóm CMD</a>, All Right Reserved.</p>
              </div>
              <div className="col-md-6">
                <p>Designed By CMD <a href="https://htmlcodex.com">HTML Codex</a></p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </div>

    </div>
  );
}
