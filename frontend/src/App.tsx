import { useState } from 'react';
import { KeyRound, Copy, Check, RefreshCw } from 'lucide-react';
import './App.css';

export default function App() {
  const [senha, setSenha] = useState<string>('');
  const [copiado, setCopiado] = useState<boolean>(false);
  const [carregando, setCarregando] = useState<boolean>(false);

  const gerarSenha = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch('http://127.0.0.1:8000/gerar-senha');
      const dados = await resposta.json();
      setSenha(dados.senha);
      setCopiado(false);
    } catch (erro) {
      console.error('Erro ao conectar com a API:', erro);
      setSenha('Erro na API');
    } finally {
      setCarregando(false);
    }
  };

  const copiarParaTransferencia = () => {
    if (senha && senha !== 'Erro na API') {
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

        <button className="btn-gerar" onClick={gerarSenha} disabled={carregando}>
          {carregando ? <RefreshCw className="spin" size={18} /> : 'Gerar Senha (8 Caracteres)'}
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