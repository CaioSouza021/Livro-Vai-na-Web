import S from "./doados.module.scss";
import livros from "../../assets/livros.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  const [livro, setLivro] = useState([]);

  const getLivros = async () => {
    try {
      const response = await axios.get(
        "https://teste-deploy-bkai.onrender.com/livros"
      );
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  };

  useEffect(() => {
    getLivros();
  });

  return (
    <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxcard}>
        <article className={S.boxTeste}>
          <img src={livros} alt="Livro doado O Peotagonista" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
        {livro.map((item) => (
          <article key={item.id}>
            <img src={item.imagem_url} alt="" />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
