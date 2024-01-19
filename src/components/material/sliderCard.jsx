import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (

    <div class="row mb-3">
        <div class="col-12 px-0">
            <div class="swiper-container cardswiper">
                      <div class="swiper-wrapper">
                          
            <Swiper pagination={{ type: 'progressbar', }}
                navigation={false}
                modules={[Pagination, Navigation]}
                >
              
                              
                              <SwiperSlide>
                                    <div class="swiper-slide">
                                        <div class="card dark-bg">
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <div class="col-auto align-self-center">
                                                        <img src="assets/img/masterocard.png" alt=""/>
                                                    </div>
                                                    <div class="col align-self-center text-end">
                                                        <p class="small">
                                                            <span class="text-uppercase size-10">Validity</span><br/>
                                                            <span class="text-muted">06/25</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4 class="fw-normal mb-2">
                                                            56040.00
                                                            <span class="small text-muted">USD</span>
                                                        </h4>
                                                        <p class="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                        <p class="text-muted size-12">Debit Card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div class="swiper-slide">
                                        <div class="card theme-radial-gradient border-0">
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <div class="col-auto align-self-center">
                                                        <i class="bi bi-wallet2"></i> Wallet
                                                    </div>
                                                    <div class="col align-self-center text-end">
                                                        <p class="small">
                                                            <span class="text-uppercase size-10">Validity</span><br/>
                                                            <span class="text-muted">Unlimited</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4 class="fw-normal mb-2">
                                                            100.00
                                                            <span class="small text-muted">USD</span>
                                                        </h4>
                                                        <p class="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                        <p class="text-muted size-12">Debit Card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div class="swiper-slide">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row mb-3">
                                                    <div class="col-auto align-self-center">
                                                        <img src="assets/img/masterocard.png" alt=""/>
                                                    </div>
                                                    <div class="col align-self-center text-end">
                                                        <p class="small">
                                                            <span class="text-uppercase size-10">Validity</span><br/>
                                                            <span class="text-muted">09/24</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h4 class="fw-normal mb-2">
                                                            150540.00
                                                            <span class="small text-muted">USD</span>
                                                        </h4>
                                                        <p class="mb-0 text-muted size-12">10141 0021 0001 0154</p>
                                                        <p class="text-muted size-12">Debit Card</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                </Swiper>
                     </div>
                </div>
            </div>
        </div>

  );
}
