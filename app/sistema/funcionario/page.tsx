import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "@/src/components/header";

export default function Main() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="p-3 pt-0">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/sistema/funcionario"
            >
              Lista de Funcionarios
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sistema/funcionario/cadastro">
              Cadastras Funcionario
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sistema/funcionario/permissao">
              Permissoes Usuarios
            </a>
          </li>
        </ul>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
