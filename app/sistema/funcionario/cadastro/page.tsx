import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "@/src/components/header";

export default function Main() {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <Header />

      <div className="p-3 pt-0 d-flex flex-grow-1 flex-column">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link" href="/sistema/funcionario">
              Lista de Funcionarios
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/sistema/funcionario/cadastro"
            >
              Cadastras Funcionario
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sistema/funcionario/permissao">
              Permissoes Usuarios
            </a>
          </li>
        </ul>

        <div className="row flex-grow-1 p-3 justify-content-center align-items-center">
          <div className="col-4 h-75 border rounded-3"></div>
        </div>
      </div>
    </div>
  );
}
