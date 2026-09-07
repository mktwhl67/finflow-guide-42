import { createFileRoute } from "@tanstack/react-router";
import carteiraChart from "@/assets/carteira-chart.jpg";

// Troque pelo link real do seu checkout na Kiwify:
const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK-AQUI";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Finânceia — Curso de Finanças Pessoais" },
      {
        name: "description",
        content:
          "Domine seu dinheiro com o método Finânceia: curso online de finanças pessoais na Kiwify, do zero à sua primeira carteira de investimentos. De R$80 por apenas R$37.",
      },
      { property: "og:title", content: "Finânceia — Curso de Finanças Pessoais" },
      {
        property: "og:description",
        content:
          "Do salário apertado ao patrimônio consistente. Um método passo a passo para investir com clareza. Promoção: de R$80 por R$37.",
      },
    ],
  }),
  component: Index,
});

function BuyButton({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden font-body text-ink">
      {/* ambient gradient light + blurred depth layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mist via-white to-mist" />
      <div className="pointer-events-none absolute -top-40 left-1/4 size-[520px] rounded-full bg-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-24 size-[460px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 size-[420px] rounded-full bg-brand/10 blur-[100px]" />

      {/* nav */}
      <header className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-2xl bg-white/55 px-5 py-3 ring-1 ring-white/60 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-brand font-display text-lg font-bold text-white">
                F
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Finân<span className="text-brand">ceia</span>
              </span>
            </div>
            <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
              <a href="#metodo" className="hover:text-ink">
                Método
              </a>
              <a href="#modulos" className="hover:text-ink">
                Módulos
              </a>
              <a href="#planos" className="hover:text-ink">
                Planos
              </a>
              <a href="#faq" className="hover:text-ink">
                FAQ
              </a>
            </nav>
            <BuyButton className="rounded-xl bg-ink px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ink/10 transition hover:bg-ink/90">
              Entrar no curso
            </BuyButton>
          </div>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-14 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20 backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" />
              Oferta de lançamento: 53% de desconto hoje
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Pare de ver seu salário <span className="text-brand">sumir</span> antes do dia 10.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/60">
              Descubra o método passo a passo que já tirou milhares de pessoas do aperto e as levou
              à primeira carteira de investimentos — mesmo ganhando pouco.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#planos"
                className="group inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-white shadow-xl shadow-brand/25 transition hover:bg-brand/90"
              >
                QUERO SAIR DO APERTO
                <span className="transition group-hover:translate-x-0.5">&rarr;</span>
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-2xl bg-white/60 px-6 py-4 text-base font-semibold text-ink ring-1 ring-white/70 backdrop-blur transition hover:bg-white/80"
              >
                Ver como funciona
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-ink/50">
              De <span className="line-through">R$ 80</span> por apenas{" "}
              <span className="font-bold text-brand">R$ 37</span> &middot; acesso imediato &middot;
              garantia de 7 dias
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <p className="font-display text-2xl font-bold">+4.200</p>
                <p className="text-sm text-ink/50">alunos</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">
                  4.9<span className="text-accent">/5</span>
                </p>
                <p className="text-sm text-ink/50">avaliação média</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold">12</p>
                <p className="text-sm text-ink/50">módulos</p>
              </div>
            </div>
          </div>

          {/* frosted hero card */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/30 to-accent/20 blur-2xl" />
            <div className="rounded-3xl bg-white/55 p-6 ring-1 ring-white/60 backdrop-blur-xl shadow-2xl shadow-brand/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink/40">
                    Carteira educacional
                  </p>
                  <p className="font-display text-3xl font-bold">R$ 48.320</p>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  +18,7% a.a.
                </span>
              </div>
              <img
                src={carteiraChart}
                alt="Gráfico de crescimento de uma carteira de investimentos"
                width={1024}
                height={512}
                className="mt-5 aspect-[16/9] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-white/60">
                  <p className="text-xs text-ink/50">Renda fixa</p>
                  <p className="font-display text-lg font-semibold">42%</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-white/60">
                  <p className="text-xs text-ink/50">Ações</p>
                  <p className="font-display text-lg font-semibold">38%</p>
                </div>
                <div className="rounded-2xl bg-white/70 p-3 ring-1 ring-white/60">
                  <p className="text-xs text-ink/50">Reserva</p>
                  <p className="font-display text-lg font-semibold">20%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* dor */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl bg-white/55 p-8 ring-1 ring-white/60 backdrop-blur-xl md:p-10">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              Se o seu salário entra no dia 5 e some no dia 12, o problema{" "}
              <span className="text-brand">não é você</span> — é a falta de método.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-white/60">
                <p className="text-sm leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">Você trabalha o mês inteiro</span> e no
                  fim não sobra nada para investir — todo mês a mesma correria.
                </p>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-white/60">
                <p className="text-sm leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">Dívidas travam sua vida</span> e qualquer
                  imprevisto vira um novo empréstimo.
                </p>
              </div>
              <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-white/60">
                <p className="text-sm leading-relaxed text-ink/70">
                  <span className="font-semibold text-ink">Você quer mudar</span>, mas não sabe por
                  onde começar — e cada ano que passa custa caro.
                </p>
              </div>
            </div>
            <p className="mt-6 text-base font-medium text-ink/60">
              A boa notícia: isso tem solução, e ela cabe no seu bolso. &darr;
            </p>
          </div>
        </div>
      </section>

      {/* método */}
      <section id="metodo" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-white/55 p-6 ring-1 ring-white/60 backdrop-blur-xl">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 font-display text-lg font-bold text-brand">
                01
              </div>
              <p className="mt-4 font-display text-lg font-semibold">Método claro</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Aprenda a organizar dívidas, formar reserva e montar sua primeira carteira em ordem
                lógica.
              </p>
            </div>
            <div className="rounded-3xl bg-white/55 p-6 ring-1 ring-white/60 backdrop-blur-xl">
              <div className="grid size-11 place-items-center rounded-2xl bg-accent/10 font-display text-lg font-bold text-accent">
                02
              </div>
              <p className="mt-4 font-display text-lg font-semibold">Sem enrolação</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Linguagem simples e ações práticas para aplicar no próximo mês, não no dia 31 de
                dezembro.
              </p>
            </div>
            <div className="rounded-3xl bg-white/55 p-6 ring-1 ring-white/60 backdrop-blur-xl">
              <div className="grid size-11 place-items-center rounded-2xl bg-brand/10 font-display text-lg font-bold text-brand">
                03
              </div>
              <p className="mt-4 font-display text-lg font-semibold">Comunidade</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Troque experiências e tire dúvidas com milhares de alunos construindo patrimônio
                juntos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* módulos */}
      <section id="modulos" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-10 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight">
              O que você vai aprender
            </h2>
            <p className="mt-3 text-ink/55">
              12 módulos práticos, do diagnóstico financeiro ao primeiro investimento.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Diagnóstico", "Mapeie seus gastos e entenda para onde seu dinheiro vai todo mês."],
              ["Dívidas", "Priorize e quite dívidas pagando o mínimo de juros possível."],
              ["Reserva", "Monte sua reserva de emergência sem travar seu dinheiro."],
              ["Orçamento", "Um orçamento mensal simples que cabe na sua realidade."],
              ["Renda fixa", "Tesouro, CDB e LCI explicados de forma simples e direta."],
              ["Ações e FIIs", "Primeiros passos na bolsa sem medo e sem aposta."],
              ["Carteira", "Monte uma carteira alinhada ao seu perfil e objetivos."],
              ["Rotina", "Hábitos mensais para manter o plano vivo depois do curso."],
            ].map(([titulo, desc], i) => (
              <div
                key={titulo}
                className="rounded-3xl bg-white/55 p-5 ring-1 ring-white/60 backdrop-blur-xl"
              >
                <p className="font-display text-2xl font-bold text-brand/40">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-base font-semibold">{titulo}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* planos */}
      <section id="planos" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              &#9889; Oferta de lançamento — por tempo limitado
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
              Menos de R$ 1,25 por dia para mudar sua vida financeira
            </h2>
            <p className="mt-3 text-ink/55">
              De <span className="line-through">R$ 80</span> por{" "}
              <span className="font-bold text-brand">R$ 37</span>. Acesso imediato pela Kiwify,
              garantia de 7 dias e suporte da comunidade.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* plano 1 */}
            <div className="flex flex-col rounded-3xl bg-white/55 p-7 ring-1 ring-white/60 backdrop-blur-xl">
              <p className="font-display text-lg font-semibold">Starter</p>
              <p className="mt-1 text-sm text-ink/50">Para começar do zero</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-sm text-ink/40 line-through">R$ 80</span>
                <span className="font-display text-4xl font-bold">R$ 37</span>
              </div>
              <p className="text-sm text-ink/50">pagamento único</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> 12 módulos em vídeo
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> Planilhas de orçamento
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> Comunidade de alunos
                </li>
              </ul>
              <BuyButton className="mt-7 rounded-2xl bg-white/80 py-3 text-center text-sm font-semibold ring-1 ring-ink/10 transition hover:bg-white">
                Assinar plano
              </BuyButton>
            </div>
            {/* plano 2 (destaque) */}
            <div className="relative flex flex-col rounded-3xl bg-white/75 p-7 ring-1 ring-brand/30 backdrop-blur-2xl shadow-2xl shadow-brand/20 md:-mt-4 md:scale-[1.03]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-white">
                Mais escolhido
              </span>
              <p className="font-display text-lg font-semibold">Investidor</p>
              <p className="mt-1 text-sm text-ink/50">Para investir de verdade</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-sm text-ink/40 line-through">R$ 80</span>
                <span className="font-display text-4xl font-bold text-brand">R$ 37</span>
              </div>
              <p className="text-sm text-ink/50">pagamento único</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
                <li className="flex gap-2">
                  <span className="text-brand">&#10003;</span> Tudo do Starter
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">&#10003;</span> Mentoria ao vivo mensal
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">&#10003;</span> Portfólio modelo
                </li>
                <li className="flex gap-2">
                  <span className="text-brand">&#10003;</span> Certificado de conclusão
                </li>
              </ul>
              <BuyButton className="mt-7 rounded-2xl bg-brand py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand/90">
                Assinar plano
              </BuyButton>
            </div>
            {/* plano 3 */}
            <div className="flex flex-col rounded-3xl bg-white/55 p-7 ring-1 ring-white/60 backdrop-blur-xl">
              <p className="font-display text-lg font-semibold">Premium</p>
              <p className="mt-1 text-sm text-ink/50">Para escalar seu patrimônio</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-sm text-ink/40 line-through">R$ 80</span>
                <span className="font-display text-4xl font-bold">R$ 37</span>
              </div>
              <p className="text-sm text-ink/50">pagamento único</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink/70">
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> Tudo do Investidor
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> 2 sessões 1:1
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> Análise de sua carteira
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">&#10003;</span> Acesso vitalício
                </li>
              </ul>
              <BuyButton className="mt-7 rounded-2xl bg-white/80 py-3 text-center text-sm font-semibold ring-1 ring-ink/10 transition hover:bg-white">
                Assinar plano
              </BuyButton>
            </div>
          </div>
        </div>
      </section>

      {/* garantia */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-white/55 p-8 ring-1 ring-white/60 backdrop-blur-xl sm:flex-row sm:items-center md:p-10">
            <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-accent/15 font-display text-2xl font-bold text-accent">
              7
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Garantia incondicional de 7 dias.
              </h2>
              <p className="mt-2 text-ink/60">
                Entre, assista e aplique. Se em 7 dias você sentir que não é para você, devolvemos
                100% do valor. Sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight">
                Perguntas frequentes
              </h2>
              <p className="mt-3 text-ink/55">Tudo o que você precisa saber antes de entrar.</p>
            </div>
            <div className="space-y-3">
              {[
                [
                  "Preciso de conhecimento prévio?",
                  "Não. O curso parte do zero e assume que você nunca investiu antes.",
                ],
                [
                  "Quanto tempo tenho de acesso?",
                  "O acesso é imediato após a compra e inclui todas as atualizações do plano escolhido.",
                ],
                [
                  "Onde eu recebo o curso?",
                  "Após a compra, você acessa imediatamente pela plataforma da Kiwify, pelo computador ou celular.",
                ],
                [
                  "E se eu não gostar?",
                  "Você tem 7 dias de garantia incondicional: devolvemos 100% do valor, sem perguntas.",
                ],
              ].map(([pergunta, resposta]) => (
                <details
                  key={pergunta}
                  className="group rounded-2xl bg-white/55 p-5 ring-1 ring-white/60 backdrop-blur-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {pergunta}
                    <span className="text-xl leading-none text-brand transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{resposta}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* cta final */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[2rem] bg-white/55 p-10 text-center ring-1 ring-white/60 backdrop-blur-2xl md:p-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 size-[400px] -translate-x-1/2 rounded-full bg-brand/25 blur-[100px]" />
            <h2 className="relative font-display text-4xl font-bold tracking-tight md:text-5xl">
              Daqui a 12 meses, você vai desejar ter começado hoje.
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-ink/60">
              De <span className="line-through">R$ 80</span> por apenas{" "}
              <span className="font-bold text-brand">R$ 37</span> — menos que um lanche por mês.
              Risco zero com a garantia de 7 dias.
            </p>
            <BuyButton className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand/25 transition hover:bg-brand/90">
              SIM, QUERO COMEÇAR AGORA &rarr;
            </BuyButton>
            <p className="relative mt-4 text-xs text-ink/45">
              Pagamento seguro via Kiwify &middot; Acesso imediato &middot; Garantia de 7 dias
            </p>
          </div>
        </div>
      </section>

      <footer className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-12 text-center text-sm text-ink/40">
          <p>
            Finânceia &mdash; educação financeira. Conteúdo educacional, não constitui recomendação
            de investimento.
          </p>
        </div>
      </footer>
    </div>
  );
}
