
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const colecoes = [
  {
    titulo: "Executiva Ativa",
    descricao: "Looks sofisticados que funcionam no escritório e no estúdio.",
    pecas: [
      {
        nome: "Legging com Elástico na Cintura (Gloss Thermo)",
        descricao: "Legging elegante com brilho sutil, ideal para o escritório e atividades físicas.",
        imagem: "/images/legging-gloss-thermo.jpg"
      },
      {
        nome: "Casaco Alongado com Capuz (Soft Brush Sherpa)",
        descricao: "Casaco versátil que complementa o look profissional e mantém o conforto no dia a dia.",
        imagem: "/images/casaco-sherpa.jpg"
      }
    ]
  },
  {
    titulo: "Mãe em Movimento",
    descricao: "Conforto e praticidade para quem cuida de tudo o dia inteiro.",
    pecas: [
      {
        nome: "Blusão Térmico com Gola Alta (Soft Polar Light)",
        descricao: "Blusão confortável que facilita a mobilidade e mantém o aquecimento durante as atividades.",
        imagem: "/images/blusao-polar.jpg"
      },
      {
        nome: "Legging com Cós Alto Duplo (Sport Power)",
        descricao: "Legging de alta sustentação que oferece conforto e liberdade de movimento.",
        imagem: "/images/legging-sport-power.jpg"
      }
    ]
  },
  {
    titulo: "Minimalista Consciente",
    descricao: "Estilo clean, peças curingas e tecidos com propósito.",
    pecas: [
      {
        nome: "Camiseta Básica Sem Cavas (Visco Joy)",
        descricao: "Camiseta básica e confortável, perfeita para compor looks minimalistas.",
        imagem: "/images/camiseta-visco-joy.jpg"
      },
      {
        nome: "Bermuda Ciclista com Cós Alto (Sport Power)",
        descricao: "Bermuda prática e funcional, adequada para diversas atividades do dia a dia.",
        imagem: "/images/bermuda-sport-power.jpg"
      }
    ]
  },
  {
    titulo: "Power Look Academia",
    descricao: "Performance e atitude com shapes que destacam o corpo.",
    pecas: [
      {
        nome: "Top Alongado com Alças Cruzadas (Neo Fit + UV Smart)",
        descricao: "Top estiloso que oferece suporte e valoriza a silhueta durante os exercícios.",
        imagem: "/images/top-neo-fit.jpg"
      },
      {
        nome: "Shorts com Cós Alto Duplo (Sport Power)",
        descricao: "Shorts confortável que permite liberdade de movimento e realça as curvas.",
        imagem: "/images/shorts-sport-power.jpg"
      }
    ]
  }
];

export default function CatalogoDiCorpo() {
  const [step, setStep] = useState(0);
  const perguntas = [
    "Qual seu principal objetivo?",
    "Onde costuma usar suas roupas fitness?",
    "Qual seu biotipo?",
    "Qual cor ou estilo mais te representa?"
  ];
  const opcoes = [
    ["Treinar", "Conforto diário", "Ambos"],
    ["Academia", "Trabalho", "Casa/rua"],
    ["Ampulheta", "Triângulo", "Retângulo", "Oval"],
    ["Clássico", "Moderno", "Minimalista", "Ousado"]
  ];
  const [respostas, setRespostas] = useState([]);

  function selecionarOpcao(opcao) {
    const novasRespostas = [...respostas];
    novasRespostas[step] = opcao;
    setRespostas(novasRespostas);
    if (step < perguntas.length - 1) {
      setStep(step + 1);
    }
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-16">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Catálogo Interativo DiCorpo
      </h1>

      {step < perguntas.length ? (
        <Card className="max-w-xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {perguntas[step]}
            </h2>
            <div className="grid gap-3">
              {opcoes[step].map((opcao, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  onClick={() => selecionarOpcao(opcao)}
                >
                  {opcao}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Recomendação Personalizada
          </h2>
          <p className="text-gray-600 mb-6">
            Com base nas suas respostas, selecionamos peças que equilibram estilo, conforto e performance para o seu dia a dia ativo.
          </p>
          <Button className="mb-2">Ver Peças Recomendadas</Button>
          <p className="text-sm text-gray-400">Ou explore o catálogo completo abaixo.</p>
        </div>
      )}

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Coleções por Estilo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {colecoes.map((colecao, idx) => (
            <Card key={idx} className="bg-gray-100">
              <CardContent className="p-4">
                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  {colecao.titulo}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {colecao.descricao}
                </p>
                <div className="grid gap-4">
                  {colecao.pecas.map((peca, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-4">
                      <img
                        src={peca.imagem}
                        alt={peca.nome}
                        className="w-24 h-32 object-cover rounded"
                      />
                      <div>
                        <h5 className="font-semibold text-gray-700">{peca.nome}</h5>
                        <p className="text-sm text-gray-500">{peca.descricao}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
