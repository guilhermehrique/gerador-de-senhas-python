import { useState } from 'react';
import { KeyRound, Copy, Check, RefreshCw } from 'lucide-react';
import './App.css';

function App() {
  const [tamanho, setTamanho] = useState(8);
  const [senha, setSenha] = useState('');
  const [copiado, setCopiado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  // Função que chama a nossa API no FastAPI
  const gerarSenha = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch(`http://127.0.0.1:8000/gerar-senha?tamanho=${tamanho}`);
      const dados = await resposta.json();
      setSenha(dados.senha);
      setCopiado(false);
    } catch (erro) {
      console.error("Erro ao conectar com a API:", erro);
      setSenha("Erro ao conectar à API");
    } finally {
      setCarregando(false);
    }
  };

  // Função para copiar a senha
  const copiarParaTransferencia = () => {
    if (senha && senha !== "Erro ao conectar à API") {
      navigator.clipboard.writeText(senha);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>
          <KeyRound size={28} color="#00ff88" /> Gerador de Senhas
        </h2>

        <div className="campo-grupo">
          <label htmlFor="tamanho">Tamanho da senha: <strong>{tamanho}</strong></label>
          <input
            type="range"
            id="tamanho"
            min="6"
            max="32"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
          />
        </div>

        <button className="btn-gerar" onClick={gerarSenha} disabled={carregando}>
          {carregando ? <RefreshCw className="spin" size={18} /> : 'Gerar Nova Senha'}
        </button>

        {senha && (
          <div className="resultado-box">
            <span className="senha-texto">{senha}</span>
            <button className="btn-copiar" onClick={copiarParaTransferencia} title="Copiar senha">
              {copiado ? <Check color="#00ff88" size={20} /> : <Copy size={20} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;