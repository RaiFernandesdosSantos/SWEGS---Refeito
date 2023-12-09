import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom px-3 bg-primary-subtle">
        <a
          href="/home"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">SWAGS</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="/home" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/funcionario" className="nav-link">
              Funcionarios
            </a>
          </li>
          <li className="nav-item">
            <a href="/fornecedor" className="nav-link">
              Fornecedores
            </a>
          </li>
          <li className="nav-item">
            <a href="/galpao" className="nav-link">
              Galpoes
            </a>
          </li>
          <li className="nav-item">
            <a href="/animal" className="nav-link">
              Animais
            </a>
          </li>
          <li className="nav-item">
            <a href="/estoque" className="nav-link">
              Estoque
            </a>
          </li>
          <li className="nav-item">
            <a href="/relatorio" className="nav-link">
              Relatorios
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Sair
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
