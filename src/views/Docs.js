import React from "react";
import styles from "./Docs.module.css";

import ss00 from "../assets/images/screenshots/00.png";
import ss01 from "../assets/images/screenshots/01.png";
import ss02 from "../assets/images/screenshots/02.png";
import ss03 from "../assets/images/screenshots/03.png";
import ss04 from "../assets/images/screenshots/04.png";
import ss05 from "../assets/images/screenshots/05.png";
import ss06 from "../assets/images/screenshots/06.png";

import Image from "../components/elements/Image";

const Docs = () => {
	return (
		<div className="container-sm">
			<div className={styles.wrapper}>
				<h2>Hướng dẫn sử dụng CTU Extension</h2>

				<p>
					CTU Extension là một công cụ hữu ích dành cho sinh viên CTU với một số tính năng như gợi ý
					thời khóa biểu dựa trên kế hoạch học tập và bỏ qua captcha khi đăng nhập vào hệ thống quản
					lý
				</p>

				<Image src={ss00} alt="CTU Extension thumbnail" />

				<h3>Cài đặt</h3>

				<p>Để bắt đầu sử dụng bạn cần cài đặt tiện ích này từ một trong số phương thức dưới đâu</p>

				<ol>
					<li>
						Cài đặt tự động từ{" "}
						<a
							href="https://chrome.google.com/webstore/detail/ctu-extension/lggkifjaacghbpebpcbaneimpogjbnmf"
							target="_blank"
							rel="noopener noreferrer"
							className="text-color-primary"
						>
							Google Chrome Store
						</a>
					</li>

					<li>
						Cài đặt thủ công từ mã nguồn trên{" "}
						<a
							href="https://github.com/thangved/ctu-extension"
							target="_blank"
							rel="noopener noreferrer"
							className="text-color-primary"
						>
							Github
						</a>
					</li>
				</ol>

				<p>
					Sau khi cài đặt thành công, bạn sẽ thấy biểu tượng của CTU Extension xuất hiện trong danh
					sách tiện ích của trình duyệt
				</p>

				<Image src={ss01} alt="CTU Extension icon" />

				<h3>Giới thiệu giao diện</h3>

				<p>
					Sau khi bạn đăng nhập vào hệ thống quản lý, bạn sẽ thấy giao diện của tiện ích xuất hiện
					như trong hình
				</p>

				<p>
					<i>
						Giao diện của tiện ích được xây dựng trên nền thư viện{" "}
						<a href="//react.dev" target="_blank" rel="noopener noreferrer">
							React
						</a>{" "}
						và{" "}
						<a href="//ant.design" target="_blank" rel="noopener noreferrer">
							Ant Design
						</a>
					</i>
				</p>

				<Image src={ss02} alt="Giao diện CTU Extension" />

				<h4>Thanh điều hướng</h4>

				<p>
					Đây là nơi để các bạn có thể di chuyển qua lại giữa các tính năng của tiện ích (Bao gồm:
					Xem kế hoạch học tập, xếp thời khóa biểu và có thể sẽ có thêm tính năng khác trong tương
					lai)
				</p>

				<h4>Khu vực làm việc chính</h4>

				<p>
					Đây là nơi hiển thị các thông tin về kế hoạch học tập và thời khóa biểu của bạn phần lớn
					thời gian sử dụng các bạn sẽ tương tác với tiện ích trong khu vực này.
				</p>

				<h3>Chức năng</h3>

				<p>Các tính năng của tiện ích này bao gồm</p>

				<ol>
					<li>Bỏ qua captcha khi đăng nhập</li>
					<li>Xem kế hoạch học tập</li>
					<li>Gợi ý xếp thời khóa biểu</li>
				</ol>

				<h4>Bỏ qua captcha khi đăng nhập</h4>

				<p>
					Đây là tính năng đầu tiên được phát triển cho tiện ích này, nó sẽ giúp bạn bỏ qua bước xác
					thực captcha khi đăng nhập vào hệ thống quản lý
				</p>

				<Image src={ss03} alt="Bỏ qua captcha khi đăng nhập" />

				<h4>Xem kế hoạch học tập</h4>

				<p>
					Tính năng này sẽ giúp bạn xem kế hoạch học tập của mình, bạn có thể xem kế hoạch học tập
					theo các học kỳ hoặc xem toàn bộ kế hoạch học tập của mình
				</p>

				<Image src={ss04} alt="Xem kế hoạch học tập" />

				<h4>Gợi ý xếp thời khóa biểu</h4>

				<p>Tính năng này sẽ giúp bạn xếp thời khóa biểu dựa trên kế hoạch học tập của mình</p>

				<Image src={ss05} alt="Gợi ý xếp thời khóa biểu" />

				<Image src={ss06} alt="Gợi ý xếp thời khóa biểu" />

				<p></p>

				<p>Với chức năng này chúng ta có rất nhiều tùy chọn như trong hình</p>

				<ol>
					<li>
						<b className="text-color-primary">Chọn năm học - học kỳ</b>: Chọn học kỳ bạn muốn xếp
						thời khóa biểu
					</li>

					<li>
						<b className="text-color-primary">Xóa ngày</b>: Với mỗi học phần, bạn có thể xóa những
						ngày trong tuần mà bạn không muốn học học phần đó. Ví dụ: Ai mà lại muốn học Vi tích
						phân vào thứ 7 chứ!
					</li>

					<li>
						<b className="text-color-primary">Chọn nhóm học phần</b>: Với mỗi học phần, bạn có thể
						chọn nhóm học phần mà bạn muốn học. Ví dụ: Bạn có hẹn với đứa bạn sẽ học chung môn Cơ sở
						dữ liệu nhóm 2 thì bạn có thể chọn nhóm 3 để khỏi học chung nó nhé :))
					</li>

					<li>
						<b className="text-color-primary">Xóa học phần</b>: Bạn có thể xóa những học phần mà bạn
						không muốn học trong kế hoạch học tập của mình. Ví dụ: Bạn chưa muốn học Cơ sở dữ liệu
						nhưng nó có trong kế hoạch học tập thì bạn có thể xóa nó đi để không bị gợi ý xếp thời
						khóa biểu cho bạn.
					</li>

					<li>
						<b className="text-color-primary">Giới hạn tính</b>: Tính năng giới hạn giúp bạn kiểm
						soát được số lượng thời khóa biểu được gợi ý cho bạn do việc tính toán nhiều với số
						lượng tổ hợp rất lớn có thể dẫn đến ứng dụng bị crash. Mặc định, giá trị này là{" "}
						<strong>1000</strong> và bạn có thể thay đổi nó theo ý muốn của mình. Lưu ý là bạn không
						nên để chỉ số này quá cao vì có thể gây treo máy!
					</li>

					<li>
						<b className="text-color-primary">Duyệt lịch học</b>: Bạn có thể duyệt qua tất cả lịch
						học mà tiện ích gợi ý cho bạn và chọn một thời khóa biểu để lưu lại.
					</li>
				</ol>
			</div>
		</div>
	);
};

export default Docs;
