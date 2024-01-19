import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/SliderAchievement.css";

function SliderAchievementCard(props) {
  let R = props.RecordCard;

  const [Data, setData] = useState({
    AchievementCard: R.AchievementCard,
    IdReg: R.IdReg,
    FullName: R.FullName,
    backgroundImage: R.bgCard,
    IconAchievement: R.IconAchievement,
  });

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'>
        <SwiperSlide>
          <div className='col-12 px-0 mb-4'>
            <div
              className='card dark-bg'
              style={{
                backgroundImage: `url(` + Data.backgroundImage + `)`,
              }}>
              <div className='card-body px-3 py-2'>
                <div className='row'>
                  <div className='col-6 align-self-center pe-0'>
                    <p className='small text-color-theme'>
                      <span className='text-Normal fs-6'>Achievement Card</span>
                    </p>
                  </div>
                  <div className='col-6 align-self-center text-end ps-0'>
                    <p className='small text-color-theme'>
                      <span className='text-normal size-12'>
                        {Data.AchievementCard}
                      </span>
                    </p>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-auto align-self-center py-2'>
                    <img src={Data.IconAchievement} alt='' />
                  </div>
                  <div className='col-12'>
                    <p className='text-muted fs-6 letter-space-1 mb-0'>
                      {Data.IdReg}
                    </p>
                    <p className='text-muted fs-6 letter-space-1'>
                      {Data.FullName}
                    </p>
                  </div>
                </div>
                <div className='row pt-1'>
                  <div className='col-7 align-self-center'>
                    <p className='small text-color-theme'>
                      <span className='text-Normal size-12'>
                        Nusantara Kita Sejahtera
                      </span>
                    </p>
                  </div>
                  <div className='col align-self-center text-end'>
                    <p className='small text-color-theme'>
                      <span className='text-normal size-12'>www.nks.id</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className='col-12 px-0 mb-4'>
            <div className='card theme-radial-gradient border-0'>
              <div className='card-body'>
                <div className='row mb-3'>
                  <div className='col-auto align-self-center'>
                    <i className='bi bi-wallet2'></i> Wallet
                  </div>
                  <div className='col align-self-center text-end'>
                    <p className='small'>
                      <span className='text-uppercase size-10'>Validity</span>
                      <br />
                      <span className='text-muted'>Unlimited</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h4 className='fw-normal mb-2'>
                      100.00
                      <span className='small text-muted'>USD</span>
                    </h4>
                    <p className='mb-0 text-muted size-12'>
                      10141 0021 0001 0154
                    </p>
                    <p className='text-muted size-12'>Debit Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='col-12 px-0 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='row mb-3'>
                  <div className='col-auto align-self-center'>
                    <img src='assets/img/masterocard.png' alt='' />
                  </div>

                  <div className='col align-self-center text-end'>
                    <p className='small'>
                      <span className='text-uppercase size-10'>Validity</span>
                      <br />
                      <span className='text-muted'>09/24</span>
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <h4 className='fw-normal mb-2'>
                      150540.00
                      <span className='small text-muted'>USD</span>
                    </h4>
                    <p className='mb-0 text-muted size-12'>
                      10141 0021 0001 0154
                    </p>
                    <p className='text-muted size-12'>Debit Card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default SliderAchievementCard;
