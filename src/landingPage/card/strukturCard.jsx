import { Fragment } from "react";
import Viscom from '../../../public/viscom.jpg';
import Eve from '../../../public/everest.jpg';
import Mega from '../../../public/megabit.jpg';
import Jahim from '../../../public/jahim.jpg';
import Proxi from '../../../public/proxi.jpg';
import Smite from '../../../public/smite.png';

function StrukturCard() {
    return (
        <Fragment>
            <div id="proker">

                <div className="con1 d-flex justify-content-around my-5">
                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Proxi} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PROXIMITY</h5>
                            <p className="card-text">PROXIMITI merupakan kegiatan Kaderisasi yang ditujukan kepada mahasiswa/i baru S1 Teknologi Informasi untuk membentuk karakter calon - calon pemimpin dalam sebuah organisasi sehingga tercipta rasa kekeluargaan dan kebanggaan terhadap jurusan. Selain itu, PROXIMITI ini untuk media pembelajaran mahasiswa baru S1 Teknologi Informasi di luar bidang akademik.</p>

                        </div>
                    </div>

                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Eve} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">EVEREST</h5>
                            <p className="card-text">EVEREST merupakan sebuah program kerja dari HMIT yang Diperuntukan bagi para mahasiswa/i baru dari jurusan S1 Teknologi Informasi, Telkom University. Acara ini merupakan ajang silahturahmi dan juga berkompetisi secara sehat bagi para mahasiswa/i Teknologi Informasi. Karena acara ini dibentuk menjadi sebuah kompetisi dibidang Sport, E-sport, dan juga lomba poster kreatif.</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Mega} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">MEGABIT</h5>
                            <p className="card-text">MEGABIT adalah serangkaian acara Welcoming party bagi mahasiswa baru teknologi informasi, yang berfungsi untuk mempereret tali silaturahmi antar angkata Mahasiswa S1 Teknologi Informasi</p>

                        </div>
                    </div>
                </div>
                <div className="con1 d-flex justify-content-around my-5">
                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Jahim} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PENJAHIMAN</h5>
                            <p className="card-text">Penjahiman adalah acara sakral Himpunan mahasiswa S1 Teknologi Informasi yang berisi serah terima Jaket Himpunan bagi yang lulus Kaderisasi</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Viscom} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">VISIT COMPANY</h5>
                            <p className="card-text">Visit Company adalah program kerja Unggulan dari Bidang Akademik, merupakan kegiatan yang bertujuan untuk memberikan wawasan kepada mahasiswa terkait dunia industri dan praktik langsung di bidang teknologi informasi.</p>

                        </div>
                    </div>
                    <div className="card" style={{ width: '35rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src={Smite} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">SMITE</h5>
                            <p className="card-text">SMITE adalah acara tahunan yang diselenggarakan oleh Himpunan Mahasiswa Teknologi Informasi (HMIT). Acara ini bertujuan memberikan wawasan mendalam kepada peserta mengenai dunia kerja di bidang Teknologi Informasi (TI). Dengan menghadirkan para ahli dan praktisi terkemuka, SMITE menggabungkan seminar, sesi tanya jawab, diskusi panel, dan workshop interaktif untuk memberikan pemahaman praktis tentang perkembangan terkini dalam industri TI.</p>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default StrukturCard;    
