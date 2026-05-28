# Apex Invest - Simulador Reativo de Evolução Patrimonial

Plataforma digital para simulação, projeção estatística e auditoria de juros compostos desenvolvida com Angular 18+. A aplicação utiliza o ecossistema de Reactive Forms associado a esteiras de cálculo reativo automatizado para computar evoluções patrimoniais em tempo real, distribuindo dados de forma unidirecional através de Signals centrais para painéis analíticos, gráficos interativos baseados em Chart.js e tabelas com rolagem e cabeçalho fixo.

---
---

## Indicadores de Auditoria e Desempenho

O simulador passou pela avaliação do Google Lighthouse na simulação para dispositivos móveis, apresentando os seguintes resultados oficiais de qualidade de software:

* **Melhores Práticas (100/100)**: Pontuação máxima. O código cumpre todas as diretrizes modernas de segurança, integridade da Web API e uso de pacotes estáveis.
* **Acessibilidade (95/100)**: Zona de excelência em conformidade com as regras da WCAG através do uso correto de atributos acessíveis (aria-labels) e calibração de contraste tipográfico.
* **SEO (90/100)**: Estrutura otimizada com indexação correta de tags e metadados estruturados para motores de busca.
* **Performance (45/100 - Mobile)**: Como o Chart.js renderiza o gráfico de linhas diretamente no Canvas usando a CPU do dispositivo, o navegador exige mais ciclos de processamento na inicialização em ambientes simulados de redes lentas. Para otimizar essa esteira, o projeto utiliza o recurso moderno de diretivas deferíveis (`@defer (on viewport)`) nativo do Angular, fazendo o download e a ativação do motor gráfico de forma sob demanda apenas quando o elemento entra na área visível do navegador.

---

## Engenharia de Software e Diferenciais Técnicos

O desenvolvimento do simulador financeiro priorizou o acoplamento fraco entre as camadas de processamento matemático e interface, focando na performance, na imutabilidade de coleções e na governança de estados reativos:

* **Centralização de Estado por Fonte Única de Verdade (Single Source of Truth)**: O componente orquestrador (`HomeComponent`) gerencia centralizadamente o estado das projeções através do Signal `resultadosSimulacao`. Quando o formulário dispara novos payloads aritméticos, a página intercepta o evento e distribui imediatamente o mesmo vetor de dados para múltiplos componentes filhos, garantindo a sincronização e consistência instantânea dos dados na tela.
* **Isolamento de Regras de Negócio e Equivalência de Taxas**: A inteligência matemática da aplicação reside exclusivamente em um serviço dedicado (`CalculoService`), seguindo o Princípio de Responsabilidade Única (SRP). O motor computacional processa taxas nominais anuais e realiza a conversão geométrica precisa para taxas de juros mensais equivalentes via radiciação exponencial, garantindo a exatidão contábil das projeções patrimoniais em cadeias de loops mensais.
* **Sincronismo Assíncrono para Motores Gráficos (Canvas Performance)**: A captura de novas coleções numéricas adota o bloco declarativo `effect()`. Para blindar o carregamento do motor gráfico (Chart.js) contra erros de referências nulas no DOM, a lógica de instanciação é encapsulada em uma rotina de temporização zero (`setTimeout`), empurrando a execução para a esteira de tarefas subsequente à montagem física do elemento Canvas pelo framework e eliminando vazamentos de memória (*memory leaks*).
* **Engenharia de Interface para Tabelas Longas (Sticky Headers)**: O componente de listagem tabular processa matrizes de dados de longa duração (até 360 meses). O SCSS aplica diretivas de posicionamento fixo (`position: sticky`) associadas a fundos de cor sólida nos cabeçalhos (`th`), fazendo com que os dados deslizem por baixo da linha de títulos durante a rolagem, preservando a legibilidade e a ergonomia de auditorias contábeis complexas.
* **Arquitetura de Reatividade Encadeada (Chained Computed Signals)**: O sistema de geração de insights adota um modelo de processamento passivo baseado em grafos de dependência. O Signal `porcentagemJuros` atua como um estado derivado de segundo nível, consumindo os payloads filtrados de outro nó computado (`dadosFinais`). Esta abordagem garante que equações de divisão fracionária e formatações numéricas rodem estritamente quando há mutação na matriz original, poupando ciclos de CPU.

---

## Estrutura Funcional e Componentização

A aplicação divide suas responsabilidades em unidades modulares de apresentação e inteligência de negócio:

* **Home Component**: Unidade centralizadora que hospeda o estado através de Angular Signals reativos, distribuindo os resultados gerados de forma simétrica por meio de um CSS Grid assimétrico responsivo.
* **Formulario Component**: Unidade de captura e validação de dados financeiros, responsável pelo gerenciamento de validações em tempo real e controle de persistência silenciosa no Local Storage com travas preventivas contra loops infinitos.
* **Resultado Cards Component**: Módulo de balanço patrimonial encarregado do resumo macro dos dados (total acumulado, investido e juros), aplicando o controle de fluxo nativo do framework `@if (dadosFinais(); as dados)`.
* **Insights Component**: Módulo analítico responsável por computar a taxa de eficiência de juros em cadeia, transformando dados brutos em resumos executivos estratégicos.
* **Grafico Evolucao Component**: Painel analítico com renderização de curvas suavizadas (`tension: 0.4`) e adaptação geométrica fluida dentro de cavas neumórficas.
* **Tabela Evolucao Component**: Grelha estruturada sob fontes monoespaçadas e formatações locais via `CurrencyPipe` para inspeção linha a linha do crescimento de ativos.

---

## Tecnologias e Recursos Utilizados

* **Angular 18+**: Standalone Components, Reactive Forms, Signals de Reatividade Granular, Computed States e controle nativo de fluxo.
* **TypeScript**: Tipagem estrita de payloads de entrada (`SimulacaoInput`) e modelos de saída estruturados (`ResultadoSimulacao[]`).
* **Chart.js & Ngx-Charts**: Integração de motor gráfico de alta performance para renderizações de Canvas vetoriais.
* **SCSS Avançado**: Manipulação de propriedades neumórficas de relevo interno (`inset`) e elevado, além de reconfigurações dinâmicas de matrizes via Media Queries.

---

## Instruções para Execução do Projeto

A aplicação necessita do runtime Node.js instalado no ambiente local de desenvolvimento:

1. Clone o repositório utilizando o comando:
   ```bash
   git clone https://github.com
   ```
2. Instale a árvore completa de dependências estruturais do pacote:
   ```bash
   npm install
   ```
3. Inicialize o processo de compilação e o servidor local de testes:
   ```bash
   ng serve
   ```
4. Navegue em seu navegador para o endereço padrão apontado pelo compilador: `http://localhost:4200`
