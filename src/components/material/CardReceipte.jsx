import React from "react";

const CardReceipt = (props) => {
    let R = props.material;
    let type = props.type;
    if (type == "Purchase") {
        return (
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col">
                            <p className=" fw-bold text-muted">No. Ref</p>
                        </div>
                        <div className="col text-end">
                            <p className=" fw-bold text-muted">{R.No_Ref}</p>
                        </div>
                    </div>

                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col">
                                    <p className="fw-normal">Pengirim</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <figure className="avatar avatar-60 rounded-oval">
                                        <img src="assets/img/user1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="col px-0 align-self-center">
                                    <h6 className="mb-0 text-color-theme">{R.Sender_Name}</h6>
                                    <p className="text-muted fs-07 m-0">{R.Sender_Bank}</p>
                                    <p className="text-muted fs-07 m-0">{R.Sender_Phone}</p>
                                </div>
                            </div>
                            <hr className="invoce mb-1 mt-2" />
                            <div className="row mb-3">
                                <div className="col">
                                    <p className=" fw-normal">Tujuan</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-auto">
                                    <figure className="avatar avatar-60 rounded-oval">
                                        <img src="assets/img/user1.jpg" alt="" />
                                    </figure>
                                </div>
                                <div className="col px-0 align-self-center">
                                    <h6 className="mb-0 text-color-theme">{R.Recipient_Name}</h6>
                                    <p className="text-muted fs-07 m-0">{R.Recipient_Bank}</p>
                                    <p className="text-muted fs-07 m-0">{R.Recipient_Phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="dashed mb-3" />
                    <div className="row mb-2">
                        <div className="col">
                            <h6 className="title">Total Belanja</h6>
                        </div>
                        <div className="col-auto">
                        </div>
                    </div>
                    <hr className="invoce m-0" />
                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted">Total harga ( {R.Qty_Product} barang )</p>
                        </div>
                        <div className="col text-end">
                            <p>{R.Product_Price}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted">Total ongkos kirim</p>
                        </div>
                        <div className="col text-end">
                            <p>{R.Ongkir}</p>
                        </div>
                    </div>
                    <div className="row mb-2 mt-4">
                        <div className="col">
                            <h6 className="title">Biaya Transaksi</h6>
                        </div>
                        <div className="col-auto">
                        </div>
                    </div>
                    <hr className="invoce m-0" />
                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted">Biaya layanan</p>
                        </div>
                        <div className="col text-end">
                            <p>{R.ServiceFee}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted">Biaya PPN</p>
                        </div>
                        <div className="col text-end">
                            <p>{R.Ppn}</p>
                        </div>
                    </div>
                    <hr className="invoce m-0" />
                    <div className="row mb-3 mt-4">
                        <div className="col">
                            <p className=" fw-bold">Total Tagihan</p>
                        </div>
                        <div className="col text-end">
                            <p className=" fw-bold">{R.Total_Bill}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (type == "Cashback") {
        return (
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <div className="row text-center mb-3">
                        <h2 class="my-1 fs-22px">Total Cashback Umroh</h2>
                        <h6 class="my-1 fs-18px">{R.Total_Cashback}</h6>
                    </div>


                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted fs-15px">No Transaksi Cashback</p>
                        </div>
                        <div className="col text-end">
                            <p className="fs-15px">{R.No_Transaction}</p>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <p className="text-muted fs-15px">Cashback Dari</p>
                        </div>
                        <div className="col text-end">
                            <p className="fs-15px">{R.Cashback_From}</p>
                        </div>
                    </div>
                    <hr className="invoce m-0" />
                    <div className="my-3" />
                    <tr>
                        <td>
                            <p className="text-muted fs-15px">Id Reg</p>
                        </td>
                        <td className="px-2">
                            <p className="text-muted fs-15px">:</p>
                        </td>
                        <td>
                            <p className="text-muted fs-15px">{R.Id_Regist}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-muted fs-15px">Nama</p>
                        </td>
                        <td className="px-2">
                            <p className="text-muted fs-15px">:</p>
                        </td>
                        <td>
                            <p className="text-muted fs-15px">{R.RecipientName}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-muted fs-15px">Alamat</p>
                        </td>
                        <td className="px-2">
                            <p className="text-muted fs-15px">:</p>
                        </td>
                        <td>
                            <p className="text-muted fs-15px">{R.RecipientAddress}</p>
                        </td>
                    </tr>
                    <div className="my-3" />
                    <hr className="invoce m-0" />
                    <div className="my-3" />
                    <div className="row mb-1">
                        <div className="col">
                            <p className="fw-normal">INFORMASI</p>
                        </div>
                    </div>
                    <div className="row mb-1">
                        <div className="col">
                            <p className="fw-normal">PT. Nusantara Kita Sejahtera</p>
                        </div>
                    </div>
                    <tr>
                        <td>
                            <p className="text-muted fs-15px">Kantor</p>
                        </td>
                        <td className="px-2">
                            <p className="text-muted fs-15px">:</p>
                        </td>
                        <td>
                            <p className="text-muted fs-15px">Jl. Malang AA 1</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-muted fs-15px">NPWP</p>
                        </td>
                        <td className="px-2">
                            <p className="text-muted fs-15px">:</p>
                        </td>
                        <td>
                            <p className="text-muted fs-15px">54695465468354</p>
                        </td>
                    </tr>
                    <div className="my-3" />
                </div>
            </div>
        )
    } else {
        return "";
    }
};

export default CardReceipt;