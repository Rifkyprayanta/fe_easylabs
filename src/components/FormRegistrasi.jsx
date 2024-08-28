import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const FormRegistrasi = (data1) => {
  
  const [nik, setNik] =  useState('');
  const [sim, setSim] =  useState('');
  const [nama, setNama] =  useState('');
  const [kelamin, setKelamin] =  useState('');
  const [tempatlahir, setTempatlahir] = useState('');
  const [usia, setUsia] = useState('');
  const [darah, setDarah] = useState('');
  const [tanggallahir, setTanggallahir] = useState('');
  const [agama, setAgama] = useState('');
  const [status, setStatus] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kabupaten, setKabupaten] = useState('');
  const [provinsi, setProvinsi] = useState('');
  const [negara, setNegara ] = useState('');
  const [warganegara, setWargaNegara] = useState('');

  const [validation, setValidation] = useState([]);

  const navigateTo = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('nik', nik);
    formData.append('sim', sim);
    formData.append('nama', nama);
    formData.append('tempat_lahir', tempatlahir);
    formData.append('tanggal_lahir', tanggallahir);
    formData.append('usia', usia);
    formData.append('jenis_kelamin', kelamin);
    formData.append('agama', agama);
    formData.append('pekerjaan', pekerjaan);
    formData.append('status_perkawinan', status);
    formData.append('alamat_lengkap', alamat);
    formData.append('alamat_negara', negara);
    formData.append('alamat_provinsi', provinsi);
    formData.append('alamat_kabupaten_kota', kabupaten);
    formData.append('alamat_desa', kelurahan);
    formData.append('status_warga_negara', warganegara);
    formData.append('golongan_darah', darah);
  
    const token = localStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    
    await axios.post('http://103.196.153.28/api/regisPasien', formData, config)
        .then((response) => {
            //set token on localStorage
            //localStorage.setItem('token', response.data.data.token);
            //redirect to dashboard
            console.log(response.data)
            navigateTo('/registrasi');

            })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })

    
  }
  return (
    <div>
        <div className="row">
		    <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">{data1.tableName}</h6>
                <form className="forms-sample" onSubmit={submitHandler}>
                  <div className="row">
                  <div className="col-md-4">
                  <div className="mb-3">
                      <label htmlFor="exampleInputUsername1" className="form-label">NIK Pasien</label>
                      <input type="text" className="form-control" id="exampleInputUsername1"  onChange={(e) => setNik(e.target.value)} placeholder="NIK Pasien"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputUsername1" className="form-label">SIM Pasien</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setSim(e.target.value)} placeholder="SIM Pasien"/>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputUsername1" className="form-label">Nama Pasien</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setNama(e.target.value)} placeholder="Nama Pasien"/>
                    </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">Jenis Kelamin</label>
                            <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setKelamin(e.target.value)} placeholder="Jenis Kelamin"/>
                        </div>
                        
                        
                  </div>
                  <div className="col-md-4">
                  <div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Tempat Lahir</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setTempatlahir(e.target.value)} placeholder="Tempat Lahir"/>
									</div>
									<div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Usia</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setUsia (e.target.value)} placeholder="Usia"/>
									</div>
									<div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Gol. Darah</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setDarah(e.target.value)} placeholder="Gol. Darah"/>
									</div>
                  <div className="mb-3">
                      <label htmlFor="exampleInputUsername1" className="form-label">Pekerjaan</label>
                      <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setPekerjaan(e.target.value)} placeholder="Pekerjaan"/>
                  </div>
                  </div>
                  <div className="col-md-4">
                  <div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Tanggal Lahir</label>
										<input type="date" className="form-control" id="exampleInputUsername1" onChange={(e) => setTanggallahir(e.target.value)} placeholder="Tanggal Lahir"/>
									</div>
									<div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Agama</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setAgama(e.target.value)} placeholder="Agama"/>
									</div>
									<div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Status Perkawinan</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setStatus(e.target.value)} placeholder="Status Perkawinan"/>
									</div>
                  <div className="mb-3">
										<label htmlFor="exampleInputUsername1" className="form-label">Warga Negara</label>
										<input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setWargaNegara(e.target.value)} placeholder="Warga Negara"/>
									</div>
                 

                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-12">
                  <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Alamat</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e) => setAlamat(e.target.value)}></textarea>
                </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Desa / Kelurahan</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setKelurahan(e.target.value)}  placeholder="Desa / Kelurahan"/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Kota / Kabupaten</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setKabupaten(e.target.value)} placeholder="Kota / Kabupaten"/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Provinsi</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setProvinsi(e.target.value)} placeholder="Provinsi"/>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Negara</label>
                        <input type="text" className="form-control" id="exampleInputUsername1" onChange={(e) => setNegara(e.target.value)} placeholder="Negara"/>
                      </div>
                    </div>
                  </div>

                  {/* <h6 className="card-title">Data Pemeriksaan</h6>
                    <div className="row">
                      <div className="col-md-8">
                        <div className="mb-3">
                          <label htmlFor="exampleInputUsername1" className="form-label">Nomor Rekam Medis</label>
                          <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="RM270617219" disabled/>
                        </div>
                      </div>
                    </div>		
                    <div className="row">
                      <div className="mb-3">
                        <div className="col-md-12">
                          <label htmlFor="exampleFormControlSelect2" className="form-label">Diagnosa</label>
                          <select multiple className="form-select" id="exampleFormControlSelect2">
                            <option>Abortus</option>
                            <option>Abortus Infeksius</option>
                            <option>Abortus Inkomplit</option>
                            <option>Abortus Pain</option>
                            </select>
                        </div>
                        </div>
                    </div>	
                    <div className="row">
                          <div>
                            <div className="row">
                              <div className="col-md-5">
                                  <div className="mb-3">
                                    <label htmlFor="exampleInputUsername1" className="form-label">Nama Pemeriksaan</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="RM270617219"/>
                                  </div>
                              </div>
                              <div className="col-md-5">
                                  <div className="mb-3">
                                    <label htmlFor="exampleInputUsername1" className="form-label">Harga</label>
                                    <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Harga"/>
                                  </div>
                              </div>
                              <div className="col-md-1">
                                <div className="mb-3">
                                  <label htmlFor="exampleInputUsername1" className="form-label">Tambah</label>
                                      <button className="btn btn-primary">+</button>
                                </div>
                              </div>
                              <div className="col-md-1">
                                <div className="mb-3">
                                  <label htmlFor="exampleInputUsername1" className="form-label">Kurang</label>
                                      <button className="btn btn-danger">-</button>
                                </div>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5">
                          <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label" hidden>Nama Pemeriksaan</label>
                            <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="RM270617219" hidden/>
                          </div>
                      </div>
                      <div className="col-md-5">
                          <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">Total Harga</label>
                            <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Harga"/>
                          </div>
                      </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Pembiayaan</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Pembiayaan" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Nomor Member</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Nomor Member" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-5">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Dokter</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Dokter" />
                            </div>
                        </div>
                    </div>

                  <h6 className="card-title">Data Perujuk</h6>
                  <div className="row">
                        <div className="col-md-5">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Dokter Perujuk</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Dokter Perujuk" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Instansi Perujuk</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Instansi Perujuk" />
                            </div>
                        </div>
                  </div>
                  <div className="row">
                  <div className="col-md-12">
                            <div className="mb-3">
                              <label htmlFor="exampleInputUsername1" className="form-label" >Diagnosa Perujuk</label>
                              <input type="text" className="form-control" id="exampleInputUsername1"  placeholder="Diagnosa Perujuk" />
                            </div>
                        </div>
                  </div> */}
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
									<button className="btn btn-secondary">Cancel</button>
								</form>

              </div>
            </div>
					</div>
				</div>
    </div>
  )
}

export default FormRegistrasi