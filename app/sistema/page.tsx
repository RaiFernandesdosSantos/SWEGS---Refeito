import Header from "@/src/components/header";

export default function Main() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <Header />

      <div className="row flex-grow-1 p-3 pt-0">
        <div className="col-8 p-2">
          <div className="card h-100">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        <div className="col-4 p-0">
          <div className="col-12 h-50 p-2">
            <div className="card h-100">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 h-50 p-2">
            <div className="card h-100">
              <h5 className="card-header">Featured</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
