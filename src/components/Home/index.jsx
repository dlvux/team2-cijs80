import React from "react";
import "./style.css";
const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="header-infor">
          <div className="hotline">
            Hệ thống Showroom | Mua hàng: 0931733469
          </div>

          <div className="account">Tài khoản | Giỏ hàng</div>
        </div>
        <div className="header-nav">
          <img
            src="https://raw.githubusercontent.com/ducnguyenhn128/html/duc/Project/logo1.png"
            alt="#"
          />
        </div>
      </div>
      <div>
        <img
          src="https://bucket.nhanh.vn/fb2e20-2071/bn/20221129_S8GbEDDJiUYPWq70.jpg"
          alt="#"
          style={{
            width: "1537px",
            height: "503px",
          }}
        />
      </div>

      <div className="benefit-container">
        <div className="benefit-item">
          <div className="img-item">
            <img
              src="https://bucket.nhanh.vn/fb2e20-2071/bn/20211021_3Kn3hmVgfqjT0MxOzNExmBAF.png"
              alt=""
            />
          </div>
          <div className="text-item">
            <h1>Freeship</h1>
            <p>Miễn phí ship với đơn hàng lớn hơn 500k </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="img-item">
            <img
              src="https://bucket.nhanh.vn/fb2e20-2071/bn/20211021_wpbKMwEdiohcjWjlwhyeqgql.png"
              alt=""
            />
          </div>
          <div className="text-item">
            <h1>Thanh toán COD</h1>
            <p>Kiểm tra, thanh toán khi nhận hàng COD </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="img-item">
            <img
              src="https://bucket.nhanh.vn/fb2e20-2071/bn/20211021_aUKSes75e9wDHSgoOXvYFqvS.png"
              alt=""
            />
          </div>
          <div className="text-item">
            <h1>Khách hàng VIP</h1>
            <p>Ưu đãi cho khách hàng thân thiết </p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="img-item">
            <img
              src="https://bucket.nhanh.vn/fb2e20-2071/bn/20211021_m0Z9Blszj8ygEMGd54loKxBu.png"
              alt=""
            />
          </div>
          <div className="text-item">
            <h1>Hỗ trợ bảo hành </h1>
            <p>Lỗi 1 đổi 1 tại các store Torano </p>
          </div>
        </div>
      </div>
      {/*san pham moi */}
      <div className="content-box">
        <div className="text-content">
          <h1>
            <a href="/new-products">Sản phẩm mới </a>
          </h1>
        </div>
      </div>

      <div className="new-item">
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221012/52351390471_eae4c80956_o__1_.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221012/52351814650_0621a5a122_o.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221012/52351632073_c1e662b23d_o__1_.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221027/tp011__1_.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221013/52288898508_ed1cdb9c89_o.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221012/52307427720_979d4c2935_o.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20221114/cw008_2_52473266927_o.jpg"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
        <div className="new-item-product">
          <img
            src="https://bucket.nhanh.vn/store/2071/ps/20220526/web_TP004__1_.png"
            alt=""
          />
          <p>Áo polo can phối 1.DSTP645</p>
          <h1>420,000đ</h1>
        </div>
      </div>
      <button class="btn-more">Xem thêm</button>

      <div className="text-content">
        <h1>Bộ sưu tập dành cho bạn </h1>
      </div>

      <div className="recommend">
        <div className="re-item">
          <img
            src="https://bucket.nhanh.vn/fb2e20-2071/bn/20220526_IWBBaDGIhzhSJWDIXpGPKnvf.png"
            alt=""
          />
          <h2>NHÂM MẠNH DŨNG X TORANO</h2>
        </div>
        <div className="re-item">
          <img
            src="https://bucket.nhanh.vn/fb2e20-2071/bn/20220126_RvTAyNrpiGm8bgDI7lV2hgvJ.jpg"
            alt=""
          />
          <h2>HOÀNG ĐỨC X TORANO</h2>
        </div>
        <div className="re-item">
          <img
            src="https://bucket.nhanh.vn/fb2e20-2071/bn/20211021_gg1Js8OMKBiSZq41Mj5AE2h6.jpg"
            alt=""
          />
          <h2>MASCHILE X TORANO</h2>
        </div>
        <div className="re-item">
          <img
            src="https://bucket.nhanh.vn/fb2e20-2071/bn/20220526_IWBBaDGIhzhSJWDIXpGPKnvf.png"
            alt=""
          />
          <h2>NHÂM MẠNH DŨNG X TORANO</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
