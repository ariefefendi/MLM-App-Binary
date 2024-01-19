import React from "react";

function MenuRiwayat(props) {
  let R = props.RecordCard;
  let type = props.type;
  if (type == "MenuRiwayat") {
    return (
      <>
        <div className="position-fixed w-100 bottom-0 start-0">
          <ul
            class="nav nav-pills nav-justified tabs mb-3"
            id="assetstabs"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="Reward-tab"
                data-bs-toggle="tab"
                data-bs-target="#Reward"
                type="button"
                role="tab"
                aria-controls="Reward"
                aria-selected="true"
              >
                Reward
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="Komisi-tab"
                data-bs-toggle="tab"
                data-bs-target="#Komisi"
                type="button"
                role="tab"
                aria-controls="Komisi"
                aria-selected="false"
              >
                Komisi
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="Pembelian-tab"
                data-bs-toggle="tab"
                data-bs-target="#Pembelian"
                type="button"
                role="tab"
                aria-controls="Pembelian"
                aria-selected="false"
              >
                Pembelian
              </button>
            </li>
          </ul>
        </div>
      </>
    );
  } else if (type == "MenuKomisi") {
    return (
      <>
        <ul
          class="nav nav-pills nav-justified tabs2 mb-3"
          id="assetstabs"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active size-15"
              id="Komisi1-tab"
              data-bs-toggle="tab"
              data-bs-target="#Komisi1"
              type="button"
              role="tab"
              aria-controls="Reward"
              aria-selected="true"
            >
              Komisi Pasangan
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link size-15"
              id="Komisi2-tab"
              data-bs-toggle="tab"
              data-bs-target="#Komisi2"
              type="button"
              role="tab"
              aria-controls="Komisi"
              aria-selected="false"
            >
              Komisi Sponsor
            </button>
          </li>
        </ul>
        <style>{`
      .size-15 {
        font-size: 15px;
      }
      .tabs2 .nav-item>.nav-link {
        line-height: 20px;
        text-transform: none;
        border-radius: 20px;
        color: #888888;
      }
      .tabs2 {
        background-color: #dadff6;
        border-radius: 20px;
        padding: 5px;
      }
      .tabs2 .nav-item>.nav-link.active {
        color: #000000bf;
        background-color: #ffffff;
      }
      `}</style>
      </>
    );
  }
  // menu pembelian
  else if (type == "MenuPembelian") {
    return (
      <>
        <ul
          class="nav nav-pills nav-justified tabs3 mb-3"
          id="assetstabs"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active size-15"
              id="Pembelian1-tab"
              data-bs-toggle="tab"
              data-bs-target="#Pembelian1"
              type="button"
              role="tab"
              aria-controls="Reward"
              aria-selected="true"
            >
              Semua
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link size-15"
              id="Pembelian2-tab"
              data-bs-toggle="tab"
              data-bs-target="#Pembelian2"
              type="button"
              role="tab"
              aria-controls="Komisi"
              aria-selected="false"
            >
              Berlangsung
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link size-15"
              id="Pembelian3-tab"
              data-bs-toggle="tab"
              data-bs-target="#Pembelian3"
              type="button"
              role="tab"
              aria-controls="Komisi"
              aria-selected="false"
            >
              Berhasil
            </button>
          </li>
        </ul>
        <style>{`
      .size-15 {
        font-size: 15px;
      }
      .tabs3 .nav-item>.nav-link {
        line-height: 20px;
        text-transform: none;
        border-radius: 20px;
        color: #888888;
      }
      .tabs3 {
        background-color: #dadff6;
        border-radius: 20px;
        padding: 5px;
      }
      .tabs3 .nav-item>.nav-link.active {
        color: #000000bf;
        background-color: #ffffff;
      }
      `}</style>
      </>
    );
  }
}
export default MenuRiwayat;
