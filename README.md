# APEX INVEST
## Simulador Reativo de Evolução Patrimonial

Plataforma digital para simulação, projeção estatística e auditoria de juros compostos desenvolvida com Angular 18+. A aplicação utiliza o sistema de formulários reativos para calcular a evolução do dinheiro em tempo real. Os dados são distribuídos de forma automática para painéis de resumo, gráficos interativos com Chart.js e tabelas organizadas.

---

### DEMONSTRAÇÃO VISUAL

![Interface do Simulador](simulador-investimento/assets/Apex-Invest.gif)

---

### DESEMPENHO REAL
#### Indicadores de Auditoria Google Lighthouse

O simulador passou pela avaliação do Google Lighthouse na simulação para dispositivos móveis, apresentando os seguintes resultados oficiais:

*   **Melhores Práticas (100/100)**: Pontuação máxima. O código cumpre todas as diretrizes modernas de segurança e uso de pacotes estáveis.
*   **Acessibilidade (95/100)**: Zona de excelência. Uso correto de etiquetas acessíveis e calibração de contraste para leitura confortável.
*   **SEO (90/100)**: Estrutura otimizada com indexação correta de tags para motores de busca.
*   **Performance (45/100 Mobile)**: Gráficos exigem mais processamento para desenhar na tela em celulares lentos. Para resolver isso, o projeto usa o recurso moderno `@defer` do Angular. O motor do gráfico só é baixado e ativado quando aparece na tela do usuário, economizando internet e memória.

---

### ENGENHARIA DE SOFTWARE
#### Diferenciais Técnicos e Arquitetura

> O desenvolvimento do simulador financeiro focou na separação clara entre os cálculos matemáticos e a tela, garantindo velocidade, segurança e atualização instantânea.

*   **Centralização de Dados por Fonte Única**
    O componente principal gerencia todo o estado das projeções através de Angular Signals. Quando o usuário digita novos valores no formulário, o sistema calcula tudo e espalha o resultado para todos os painéis e gráficos ao mesmo tempo. Isso garante que a tela nunca mostre dados desalinhados.

*   **Isolamento de Regras de Negócio e Matemática Financeira**
    Toda a inteligência de cálculo fica guardada em um serviço isolado. O motor recebe a taxa de juros anual digitada pelo usuário e faz a conversão matemática exata para a taxa mensal através de fórmulas financeiras precisas, garantindo que as contas de juros compostos fiquem perfeitas mês a mês.

*   **Sincronismo para Motores Gráficos e Telas**
    Para evitar que o gráfico tente desenhar antes da tela carregar por completo, o sistema usa uma rotina de tempo curta (`setTimeout`). Isso joga o carregamento do gráfico para o momento exato em que o espaço visual do Canvas está pronto no navegador, evitando erros de carregamento e travamentos de memória.

*   **Tabelas Longas com Cabeçalho Fixo (Sticky Headers)**
    Como a simulação pode chegar a até 360 meses (30 anos), a tabela de resultados fica bem longa. O visual foi configurado via CSS com a propriedade `position: sticky`. Isso faz com que os números deslizem por baixo dos títulos ao rolar a página, mantendo a leitura fácil e organizada.

---

### ESTRUTURA FUNCIONAL
#### Componentização e Responsabilidades

A aplicação divide suas tarefas em blocos menores e organizados:

*   **Home Component**: Tela principal que guarda as informações centrais do site e organiza a distribuição dos painéis.
*   **Formulario Component**: Bloco de captura e validação dos dados financeiros digitados pelo usuário, salvando as preferências no navegador com LocalStorage.
*   **Resultado Cards Component**: Módulo responsável por mostrar o resumo do dinheiro (total acumulado, valor investido e juros ganhos).
*   **Insights Component**: Painel analítico que calcula de forma inteligente a eficiência dos juros no patrimônio do usuário.
*   **Grafico Evolucao Component**: Gráfico de linhas com curvas suavizadas que se ajusta ao tamanho da tela.
*   **Tabela Evolucao Component**: Lista detalhada que exibe o crescimento do dinheiro linha por linha com formatação de moeda local.

---

### TECNOLOGIAS E RECURSOS UTILIZADOS

*   **Angular 18+**: Componentes independentes (*Standalone*), formulários reativos, gerenciamento de estado granular com Signals e controle de fluxo moderno.
*   **TypeScript**: Definição rígida de tipos e modelos de dados para garantir que nenhuma informação inválida entre no cálculo.
*   **Chart.js**: Biblioteca focada na criação e renderização de gráficos interativos de alta performance.
*   **SCSS Avançado**: Configurações de design moderno com controle de espaçamento e adaptação completa para celulares e computadores.

---

### Site APEX-INVEST

[Clique aqui para acessar o projeto online](https://simulador-investimento-beta.vercel.app/)

