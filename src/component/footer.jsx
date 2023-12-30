
function Footer() {
    return (
        <footer>
            <div id="footer1">
                <div className="container-fluid foot">
                    <div className="row">
                        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
                            <img src="HMIT.png" alt="" style={{ width: '180px', height: '180px' }} />
                        </div>
                        <div className="col-12 col-md-4 mt-5" >

                            <h1>HMIT PRESENT</h1>
                            <div>
                                <h4><a href="https://linktr.ee/hmit_telu" style={linkStyle}>LINKTREE</a></h4>
                                <h4><a href="https://www.instagram.com/hmit_telu/" style={linkStyle}>INSTAGRAM</a></h4>
                                <h4><a href="https://www.tiktok.com/@hmit.telkomuniversity" style={linkStyle}>TIKTOK</a></h4>
                                <h4><a href="https://line.me/R/ti/p/@jvz4981s?from=page&liff.referrer=https%3A%2F%2Flinktr.ee%2F&accountId=jvz4981s" style={linkStyle}>LINE</a></h4>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <h2>KRITIK DAN SARAN</h2>
                            <form>
                                <div className="row">
                                    <div className="col-10">
                                        <div className="form-group">
                                            <label htmlFor="nama">Nama:</label>
                                            <input type="text" name="nama" className="form-control" required />
                                            <label htmlFor="nama">email:</label>
                                            <input type="text" name="email" className="form-control" required />
                                            <label htmlFor="nama">kritik & Saran:</label>
                                            <input type="text" name="saran" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button type="submit" className="btn btn-success my-3" style={{ height: '130px' }}>Kirim</button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}

const linkStyle = {
    color: 'green',
    textDecoration: 'none',  // Menghapus garis bawah
};


export default Footer;


