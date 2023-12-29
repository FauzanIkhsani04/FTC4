import React  from 'react';

function AboutCard() {
    

    return (
        <div className="card mx-auto" style={{ width: '60vw', marginTop: '20vh', position: 'relative', height: 'min-content', border: '2px solid black' }}>
            <img src="foto.jpg" className="card-img-top" alt="Card background" />
            <div
            
                style={{
                    position: 'absolute',
                    transform: 'translate(0, 200%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: '10px',
                    }}
            >
                <h5 className="card-title" style={{ fontSize: '30px', marginBottom: '10px' }}>ABOUT US</h5>
                <p className="card-text">
                    HMIT (Himpunan Mahasiswa Information Technology) Himpunan ini didirikan pada tanggal 10 Mei 2018 di Bandung sampai dengan waktu yang tidak ditentukan. HMIT Universitas Telkom bertujuan untuk mewujudkan mahasiswa Program Studi S1 TEKNOLOGI INFORMASI yang taat kepada Tuhan Yang Maha Esa serta berjiwa besar diiringi dengan wawasan luhur, cinta damai dan memiliki jiwa sosial agar terbentuk mahasiswa yang intelek, jujur, bertanggung jawab, berjiwa pemimpin dan rasa kekeluargaan yang tinggi bagi diri dan masyarakat.
                </p>
            </div>
        </div>
    );
}

export default AboutCard;
