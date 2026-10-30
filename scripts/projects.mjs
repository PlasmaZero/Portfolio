// Copy is grounded in the owner's resumes and public repository documentation.
// GEX uses a repository screenshot in simulation mode; other visuals are schematics.
export const projects = [
  {
    slug: 'evhunter', name: 'EVHunter', subtitle: 'Making odds easier to compare.', category: 'Full-stack', filters: ['Full-stack', 'Data & finance'], type: 'Full-stack application', visual: 'odds', color: 'mint', repo: 'EVHunter',
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Python', 'TypeScript'],
    summary: 'A full-stack workspace for sports odds comparison, expected-value analysis, and manual bet tracking.',
    overview: 'EVHunter brings odds comparison, pricing calculations, and manual tracking into one application. A Next.js interface connects to a Python API, with PostgreSQL for records and Redis for collection coordination.',
    challenge: 'Odds only become comparable when outcomes, fees, and limits line up. The application also needs to keep monetary records consistent when requests arrive at the same time.',
    details: [
      ['Compare matching outcomes', 'Implemented fee-adjusted arbitrage and fractional-Kelly calculations with explicit cent rounding, liquidity limits, and stake allocation.'],
      ['Separate demo and live records', 'Kept demonstration data isolated from live records so a test session does not become part of the real tracking history.'],
      ['Protect session and balance state', 'Added signed sessions, CSRF protection, login throttling, and transaction-backed settlement with integration tests for concurrent requests and duplicate balance updates.']
    ],
    architecture: ['Next.js interface', 'FastAPI service', 'PostgreSQL + Redis'],
    note: 'An analytics and manual tracking project. It does not automatically submit bets. The diagram is illustrative, not live odds.'
  },
  {
    slug: 'night-shift', name: 'Night Shift', subtitle: 'A system that knows when you look away.', category: 'Game development', filters: ['Games'], type: 'Roblox survival horror', visual: 'game', color: 'lilac', repo: 'Roblox-Game',
    stack: ['Lua', 'Roblox', 'Rojo', 'State machines'],
    summary: 'A code-built research facility, escalating night cycles, and a machine that moves only when unobserved.',
    overview: 'Night Shift is a Roblox survival horror project set in the HELIOS-7 research facility. The environment, task stations, lighting, and SENTINEL rig are built programmatically rather than assembled by hand.',
    challenge: 'The game needs a coherent loop: maintain the facility, manage limited resources, watch the hunter, and reach the exit. Multiplayer mechanics also need a clear boundary between player input and authoritative game state.',
    details: [
      ['Build the world in code', 'A data-driven map builder creates rooms, task terminals, hiding pods, patrol waypoints, lighting, and player suits.'],
      ['Give the hunter readable behavior', 'The SENTINEL freezes when observed, investigates noise, and signals its state through its visor, core, and lighting.'],
      ['Coordinate the night cycle', 'A phase state machine connects preparation, tasks, escape, and failure. Server-timed skill checks, server-authoritative stamina, and persistent statistics support the loop.']
    ],
    architecture: ['Client input + HUD', 'Server game state', 'World + persistent stats'],
    note: 'A Roblox game project. The visual is a facility schematic; it is not a gameplay screenshot. Source and setup instructions are available on GitHub.'
  },
  {
    slug: 'damd-wallet', name: 'DAMD Treasury', subtitle: 'Shared funds. Explicit decisions.', category: 'Blockchain', filters: ['Full-stack'], type: 'Collaborative blockchain prototype', visual: 'wallet', color: 'peach', repo: 'damd-treasury-wallet',
    stack: ['React', 'Solidity', 'ethers.js', 'MetaMask'],
    summary: 'A collaborative treasury-wallet prototype with multi-owner approvals, timelocks, and spending caps.',
    overview: 'DAMD explores controlled payments from a shared treasury in an Ethereum test environment. The React interface exposes a proposal workflow, while Solidity contracts enforce approvals, delays, and spending limits.',
    challenge: 'A shared wallet needs to communicate who can act, what approvals remain, and when a payment becomes executable. The interface must stay synchronized as accounts, networks, and contract state change.',
    details: [
      ['Make approvals visible', 'Collaborated on a prototype supporting test ETH deposits, M-of-N owner approvals, payment timelocks, and per-payment and daily spending caps.'],
      ['Connect interface and contract state', 'Integrated an ethers.js service for contract reads, transaction previews, signing requests, and refreshes after confirmations, account changes, and network switches.'],
      ['Check the delivery path', 'Added GitHub Actions checks for linting, contract compilation, service and contract tests, and production builds.']
    ],
    architecture: ['React interface', 'ethers.js + MetaMask', 'Solidity contracts'],
    note: 'A collaborative, unaudited test-fund prototype. It is not intended to hold real funds.'
  },
  {
    slug: 'student-success', name: 'Student Success Analytics', subtitle: 'Finding patterns behind the records.', category: 'Data visualization', filters: ['Data & finance'], type: 'Course project', visual: 'scatter', color: 'blue', repo: null,
    stack: ['Python', 'pandas', 'scikit-learn', 'D3.js'],
    summary: 'An exploratory dashboard connecting a Python analysis pipeline with coordinated, interactive D3.js views.',
    overview: 'This course project explores 500 student records through dimensionality reduction and clustering. A Python pipeline prepares the data, and coordinated D3.js views let a viewer inspect components and cluster assignments.',
    challenge: 'A table of many variables can obscure the structure in a dataset. The goal was to make that structure explorable while keeping the preprocessing and analysis steps explicit.',
    details: [
      ['Prepare the records', 'Processed 500 student records with imputation and standardization before analysis.'],
      ['Reduce and group dimensions', 'Applied principal component analysis and k-means to explore lower-dimensional patterns and groupings.'],
      ['Connect the views', 'Built coordinated D3.js views with component selection and clustering controls.']
    ],
    architecture: ['Student records', 'Python analysis pipeline', 'Coordinated D3.js views'],
    note: 'Described in the software engineering resume. A public repository is not linked. The visual uses illustrative points, not student records.'
  },
  {
    slug: 'gex', name: 'GEX Dashboard', subtitle: 'An options chain, made readable.', category: 'Financial analytics', filters: ['Data & finance', 'Full-stack'], type: 'Streaming analytics dashboard', visual: 'bars', color: 'mint', repo: 'GEX',
    stack: ['TypeScript', 'Node.js', 'Canvas', 'SSE'],
    summary: 'Options analytics with gamma exposure by strike, gamma-flip levels, and streaming browser updates.',
    overview: 'GEX separates pricing calculations, provider adapters, and the streaming server. The browser visualizes options exposure while the server shares one upstream polling loop per symbol across viewers.',
    challenge: 'An options dashboard needs consistent calculations and clear feed behavior. Multiple viewers should not multiply upstream polling, and stale or failed feeds need to be handled explicitly.',
    details: [
      ['Calculate exposure consistently', 'Computed Black-Scholes gamma from option-chain inputs and displayed exposure by strike, gamma-flip levels, and call/put walls.'],
      ['Share work across viewers', 'Integrated Cboe delayed data and a Tradier adapter, with shared polling and client-specific Server-Sent Events.'],
      ['Test the boundaries', 'Checked gamma against numerical derivatives and covered market calendars, upstream failures, and idle stream restarts.']
    ],
    architecture: ['Option-chain providers', 'Pricing + shared polling', 'SSE + Canvas views'],
    note: 'Dealer positioning is modeled using explicit assumptions. Data latency depends on the provider. The interface screenshot shows simulation mode, not a live market feed.'
  },
  {
    slug: 'robinhood-agent', name: 'Robinhood Agent', subtitle: 'From a prompt to a tool-driven workflow.', category: 'AI & automation', filters: ['AI & automation'], type: 'Python agent project', visual: 'agent', color: 'lilac', repo: 'Robinhood-Agent',
    stack: ['Python', 'Claude Agent SDK', 'MCP', 'OAuth'],
    summary: 'A Python agent connecting portfolio review and proposed trades through an authenticated MCP interface.',
    overview: 'The project connects a Claude Agent SDK loop to the Robinhood MCP interface. Strategy instructions guide analysis, while configuration controls which tools the agent can access.',
    challenge: 'An agent that can read a portfolio and propose actions needs a deliberate separation between analysis and execution. Prompt instructions alone are not an enforcement boundary.',
    details: [
      ['Connect authenticated tools', 'Used an OAuth-authenticated MCP connection to review holdings, buying power, and proposed trades.'],
      ['Keep execution opt-in', 'Configured dry-run defaults and a tool allowlist that excludes order-placement tools unless live trading is explicitly enabled.'],
      ['Support repeatable workflows', 'Added configurable strategy instructions, symbol restrictions, prompt-level spending limits, and one-shot or scheduled execution.']
    ],
    architecture: ['Strategy instructions', 'Agent + tool allowlist', 'OAuth-authenticated MCP'],
    note: 'Prompt-level limits are instructions, not guaranteed financial controls. The project defaults to dry-run analysis.'
  },
  {
    slug: 'candleview', name: 'CandleView', subtitle: 'A modular engine, from data to execution.', category: 'Systems engineering', filters: ['Data & finance'], type: 'Python research engine', visual: 'pipeline', color: 'blue', repo: 'CandleView',
    stack: ['Python', 'FastAPI', 'SQLite', 'Broker adapters'],
    summary: 'A modular strategy engine separating market data, strategy logic, risk management, and broker execution.',
    overview: 'CandleView organizes a trading research workflow into independent layers. Data providers feed strategies, risk rules constrain proposed actions, and broker adapters handle execution interfaces.',
    challenge: 'Mixing data access, strategy logic, and order handling makes experimentation difficult. The project uses modules so those responsibilities can be developed separately.',
    details: [
      ['Separate the data layer', 'Organized historical and current market inputs alongside technical indicator calculations.'],
      ['Make strategies pluggable', 'Provided momentum breakout and options-flow strategies with market-hour, volume, and earnings-date filters.'],
      ['Keep risk and logging explicit', 'Included configurable per-trade risk, daily loss shutdown, position sizing, and a SQLite/CSV journal with terminal and optional web views.']
    ],
    architecture: ['Data + indicators', 'Strategy + risk', 'Broker adapters + journal'],
    note: 'A research and educational project with paper-trading support. No trading performance is claimed.'
  },
  {
    slug: 'trend-pullback', name: 'Trend & Pullback Indicator', subtitle: 'Turning market rules into clear states.', category: 'Technical indicators', filters: ['Data & finance'], type: 'TradingView indicator', visual: 'trend', color: 'peach', repo: 'ma-ema-rsi-trend-pullback',
    stack: ['Pine Script v6', 'TradingView', 'Alerts'],
    summary: 'A configurable indicator combining moving-average trends, RSI crossovers, and pullback conditions.',
    overview: 'The indicator expresses trading rules through long, short, and flat states. Multiple entry modes let the same charting tool combine trend-following and pullback conditions.',
    challenge: 'Entry and exit conditions can overlap. The project makes state transitions explicit and prioritizes exits so alerts follow a consistent sequence.',
    details: [
      ['Configure the entry logic', 'Created three entry modes combining moving-average trends, RSI crossovers, and pullback conditions.'],
      ['Track position state', 'Represented long, short, and flat states with explicit exit priority.'],
      ['Surface state changes', 'Added entry and exit alerts for use within TradingView.']
    ],
    architecture: ['Chart inputs', 'Trend + RSI rules', 'State + alerts'],
    note: 'An indicator project, not a claim of trading returns. The illustration is not live market data.'
  }
];
