import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div className="border h-50 w-25 rounded-4 bg-primary-subtle">
        <form action="" className="p-3">
          <h3 className="mb-3 font-weight-normal text-center">Cadastro</h3>

          <div className="mb-3">
            <label htmlFor="password">Nome:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="cpf">CPF:</label>
            <input
              type="text"
              id="cpf"
              className="form-control"
              placeholder="000.000.000-00"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Email:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Senha"
              required
            />
          </div>

          <div className="w-100 d-flex justify-content-end gap-3">
            <a href="/" className="btn btn-success">
              Cadastrar-se
            </a>
            <a href="/" className="btn btn-primary">
              Voltar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
