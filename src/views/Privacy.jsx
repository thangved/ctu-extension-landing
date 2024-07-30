import React from "react";
import styles from "./Docs.module.css";

export default function Privacy() {
	return (
		<div className="container-sm">
			<div className={styles.wrapper}>
				<h2>Chính sách quyền riêng tư</h2>

				<p>
					CTU Extension tôn trọng quyền riêng tư của mỗi cá nhân, vì thế chúng tôi luôn cố gắng bảo
					vệ thông tin cá nhân của mọi người. Chính sách quyền riêng tư sẽ thể hiện quá trình chúng
					tôi thu thập, chuyển đổi, xử lý và sử dụng.
				</p>

				<h3>Chúng tôi thu thập những gì?</h3>

				<p>
					Chúng tôi không thu thập bất cứ thông tin cá nhân nào của người dùng, tất cả các hoạt động
					của CTU Extension đều diễn ra trên trình duyệt của người dùng và không được sử dụng để gửi
					về bất cứ máy chủ nào của chúng tôi.
				</p>

				<h3>Chúng tôi bảo mật thông tin như thế nào?</h3>

				<p>
					CTU Extension sẽ luôn bảo mật thông tin cá nhân của bạn nhưng chúng tôi không đảm bảo sự
					an toàn các thông tin của bạn trên website.
				</p>

				<h3>Chia sẻ thông tin với bên thứ ba</h3>

				<p>
					Chúng tôi cam kết không chia sẻ thông tin cá nhân của bạn với đơn vị thứ 3 hay bất cứ đơn
					vị nào khác.
				</p>

				<h3>Mã nguồn mở</h3>

				<p>
					CTU Extension là một công cụ nguồn mở, vì vậy các bạn có thể xác thực các thông tin trong
					văn bản này tại{" "}
					<a
						href="https://github.com/thangved/ctu-extension"
						target="_blank"
						rel="noopener noreferrer"
					>
						https://github.com/thangved/ctu-extension
					</a>
					.
				</p>
			</div>
		</div>
	);
}
