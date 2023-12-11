import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="container-fluid vh-100 text-center d-flex align-items-center justify-content-center">
      <div className="border h-25 w-25 rounded-4 bg-primary-subtle">
        <form action="" className="p-3">
          <h3 className="mb-3 font-weight-normal">Login</h3>

          <div className="row mb-3 align-items-center">
            <div className="col-3">
              <label htmlFor="cpf">CPF:</label>
            </div>

            <div className="col-9">
              <input
                type="text"
                id="cpf"
                className="form-control"
                placeholder="000.000.000-00"
                required
              />
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-3">
              <label htmlFor="password">Senha:</label>
            </div>

            <div className="col-9">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Senha"
                required
              />
            </div>
          </div>

          <div className="w-100 d-flex justify-content-end gap-3">
            <a href="/sistema" className="btn btn-primary">
              Entrar
            </a>
            <a href="/cadastro" className="btn btn-warning">
              Cadastrar-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
