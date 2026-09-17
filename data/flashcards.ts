import type { DomainId, Flashcard, Source } from "./types";

export type { DomainId, Flashcard, Source } from "./types";

const GUIDE: Source = {
  title: "Exam guide Datadog Fundamentals (PDF, ago 2026)",
  url: "https://www.datadoghq.com/pdf/datadog-fundamentals-exam-guide-aug-2026.pdf",
};

const PRACTICE_EXAM: Source = {
  title: "Learning Center · Practice Exam (25 preguntas)",
  url: "https://learn.datadoghq.com/courses/datadog-fundamentals-practice-exam",
  note: "Hecho del quiz oficial; enunciado propio, sin opciones incorrectas",
};

const LEARNING_PATH: Source = {
  title: "Datadog Fundamentals Certification Learning Path",
  url: "https://learn.datadoghq.com/bundles/datadog-fundamentals-certification-learning-path",
};

const DOC_AGENT: Source = {
  title: "Docs · Datadog Agent",
  url: "https://docs.datadoghq.com/agent/",
};

const DOC_KEYS: Source = {
  title: "Docs · API and Application Keys",
  url: "https://docs.datadoghq.com/account_management/api-app-keys/",
};

const DOC_DOCKER: Source = {
  title: "Docs · Docker Agent",
  url: "https://docs.datadoghq.com/agent/docker/",
};

const DOC_K8S: Source = {
  title: "Docs · Kubernetes Agent",
  url: "https://docs.datadoghq.com/containers/kubernetes/installation/",
};

const DOC_NETWORK: Source = {
  title: "Docs · Agent network traffic / ports",
  url: "https://docs.datadoghq.com/agent/configuration/network/",
};

const DOC_AD: Source = {
  title: "Docs · Autodiscovery",
  url: "https://docs.datadoghq.com/containers/guide/autodiscovery-management/",
};

const DOC_DOGSTATSD: Source = {
  title: "Docs · DogStatsD",
  url: "https://docs.datadoghq.com/developers/dogstatsd/",
};

const DOC_INTEGRATIONS: Source = {
  title: "Docs · Integrations",
  url: "https://docs.datadoghq.com/integrations/",
};

const DOC_TAGS: Source = {
  title: "Docs · Getting started with tags / Unified Service Tagging",
  url: "https://docs.datadoghq.com/getting_started/tagging/",
};

const DOC_METRICS: Source = {
  title: "Docs · Metrics",
  url: "https://docs.datadoghq.com/metrics/",
};

const DOC_API: Source = {
  title: "Docs · Datadog API",
  url: "https://docs.datadoghq.com/api/latest/",
};

const DOC_TROUBLE: Source = {
  title: "Docs · Agent troubleshooting / commands",
  url: "https://docs.datadoghq.com/agent/troubleshooting/",
};

const DOC_HOSTMAP: Source = {
  title: "Docs · Host Map",
  url: "https://docs.datadoghq.com/infrastructure/hostmap/",
};

const DOC_INFRA: Source = {
  title: "Docs · Infrastructure List",
  url: "https://docs.datadoghq.com/infrastructure/list/",
};

const DOC_DASH: Source = {
  title: "Docs · Dashboards",
  url: "https://docs.datadoghq.com/dashboards/",
};

const DOC_QUERY: Source = {
  title: "Docs · Query to the graph",
  url: "https://docs.datadoghq.com/dashboards/querying/",
};

const DOC_MONITORS: Source = {
  title: "Docs · Monitors",
  url: "https://docs.datadoghq.com/monitors/",
};

const DOC_DDTRACE: Source = {
  title: "Docs · ddtrace / APM",
  url: "https://docs.datadoghq.com/tracing/",
};

const DOC_LOGS: Source = {
  title: "Docs · Log search and facets",
  url: "https://docs.datadoghq.com/logs/explorer/",
};

const LC = {
  obs: {
    title: "Learning Center · Introduction to Observability",
    url: "https://learn.datadoghq.com/courses/take/introduction-to-observability/texts/63853497-monitoring-vs-observability",
  },
  qsLab: {
    title: "Learning Center · Lab: Datadog Quick Start",
    url: "https://learn.datadoghq.com/courses/take/course-quickstart/texts/47100306-lab-datadog-quick-start",
  },
  qsLaunch: {
    title: "Learning Center · Launching the Lab (Quick Start)",
    url: "https://learn.datadoghq.com/courses/take/course-quickstart/texts/70912865-launching-the-lab",
  },
  agentAbout: {
    title: "Learning Center · About the Agent",
    url: "https://learn.datadoghq.com/courses/take/agent-on-host/texts/48874691-about-the-agent",
  },
  agentLab: {
    title: "Learning Center · Lab: The Agent on a Host",
    url: "https://learn.datadoghq.com/courses/take/agent-on-host/texts/48874692-lab-the-agent-on-a-host",
    note: "Instruqt track agent-host",
  },
  agentCfg: {
    title: "Learning Center · Additional Configuration Information",
    url: "https://learn.datadoghq.com/courses/take/agent-on-host/texts/60695532-additional-configuration-information",
  },
  agentTs: {
    title: "Learning Center · Troubleshooting Tips (Agent on a Host)",
    url: "https://learn.datadoghq.com/courses/take/agent-on-host/texts/60695697-troubleshooting-tips",
  },
  dockerAbout: {
    title: "Learning Center · About the Agent Container",
    url: "https://learn.datadoghq.com/courses/take/agent-on-docker/texts/48612334-about-the-agent-container",
  },
  dockerLab: {
    title: "Learning Center · Lab: The Agent on Docker",
    url: "https://learn.datadoghq.com/courses/take/agent-on-docker/texts/48612280-lab-the-agent-on-docker",
  },
  dockerAd: {
    title: "Learning Center · Autodiscovery (Agent on Docker)",
    url: "https://learn.datadoghq.com/courses/take/agent-on-docker/texts/60975009-autodiscovery",
  },
  tagsIntro: {
    title: "Learning Center · Introduction to Tags",
    url: "https://learn.datadoghq.com/courses/take/tagging-best-practices/texts/35803445-introduction-to-tags",
  },
  tagsEx: {
    title: "Learning Center · Examples of Tags",
    url: "https://learn.datadoghq.com/courses/take/tagging-best-practices/texts/35803997-examples-of-tags",
  },
  tagsBp: {
    title: "Learning Center · Suggested Best Practices and Considerations",
    url: "https://learn.datadoghq.com/courses/take/tagging-best-practices/texts/35805474-suggested-best-practices-and-considerations",
  },
  tagsLab: {
    title: "Learning Center · Lab: Tagging Use Cases",
    url: "https://learn.datadoghq.com/courses/take/tagging-best-practices/texts/35811275-lab-tagging-use-cases",
  },
  metWhat: {
    title: "Learning Center · What is a Metric?",
    url: "https://learn.datadoghq.com/courses/take/getting-started-metrics/texts/61414944-what-is-a-metric",
  },
  metTypes: {
    title: "Learning Center · Types of Datadog Metrics",
    url: "https://learn.datadoghq.com/courses/take/getting-started-metrics/texts/61415346-types-of-datadog-metrics",
  },
  metLab: {
    title: "Learning Center · Lab: Introduction to Metrics in Datadog",
    url: "https://learn.datadoghq.com/courses/take/getting-started-metrics/texts/61415385-lab-introduction-to-metrics-in-datadog",
  },
  intWhat: {
    title: "Learning Center · What are integrations?",
    url: "https://learn.datadoghq.com/courses/take/getting-started-integrations/texts/61686610-what-are-integrations",
  },
  intAgent: {
    title: "Learning Center · Agent-based integrations",
    url: "https://learn.datadoghq.com/courses/take/getting-started-integrations/texts/61687378-agent-based-integrations",
  },
  intAuth: {
    title: "Learning Center · Authentication-based integrations",
    url: "https://learn.datadoghq.com/courses/take/getting-started-integrations/texts/61687381-authentication-based-integrations",
  },
  intLib: {
    title: "Learning Center · Library integrations",
    url: "https://learn.datadoghq.com/courses/take/getting-started-integrations/texts/61687388-library-integrations",
  },
  intLab: {
    title: "Learning Center · Lab: Getting Started with Integrations",
    url: "https://learn.datadoghq.com/courses/take/getting-started-integrations/texts/61686613-lab-getting-started-with-integrations",
  },
  infraIntro: {
    title: "Learning Center · Introduction to Infrastructure Monitoring",
    url: "https://learn.datadoghq.com/courses/take/getting-started-infra-cnm/texts/62829528-introduction-to-infrastructure-monitoring",
  },
  infraLab: {
    title: "Learning Center · Lab: Getting Started with Infrastructure Monitoring",
    url: "https://learn.datadoghq.com/courses/take/getting-started-infra-cnm/texts/62829572-lab-getting-started-with-infrastructure-monitoring",
  },
  cnm: {
    title: "Learning Center · Introduction to Cloud Network Monitoring (CNM)",
    url: "https://learn.datadoghq.com/courses/take/getting-started-infra-cnm/texts/62829564-introduction-to-cloud-network-monitoring-cnm",
  },
  cnmLab: {
    title: "Learning Center · Lab: Getting Started with CNM",
    url: "https://learn.datadoghq.com/courses/take/getting-started-infra-cnm/texts/62829606-lab-getting-started-with-cloud-network-monitoring-cnm",
  },
  monIntro: {
    title: "Learning Center · Introduction to Datadog Monitors",
    url: "https://learn.datadoghq.com/courses/take/getting-started-monitors/texts/60911024-introduction",
  },
  monTypes: {
    title: "Learning Center · Types of Monitors",
    url: "https://learn.datadoghq.com/courses/take/getting-started-monitors/texts/60911025-types-of-monitors",
  },
  monLab: {
    title: "Learning Center · Lab: Monitors",
    url: "https://learn.datadoghq.com/courses/take/getting-started-monitors/texts/60911026-lab-monitors",
  },
  alertIntro: {
    title: "Learning Center · Alert Monitor Notifications",
    url: "https://learn.datadoghq.com/courses/take/alert-monitor-notifications/texts/58367307-alert-monitor-notifications",
  },
  alertVars: {
    title: "Learning Center · Using Variables for Dynamic Messaging",
    url: "https://learn.datadoghq.com/courses/take/alert-monitor-notifications/texts/58367311-using-variables-for-dynamic-messaging",
  },
  alertLab: {
    title: "Learning Center · Lab: Notification Messages",
    url: "https://learn.datadoghq.com/courses/take/alert-monitor-notifications/texts/58367313-lab-notification-messages",
  },
  dashIntro: {
    title: "Learning Center · Introduction to Dashboards",
    url: "https://learn.datadoghq.com/courses/take/intro-dashboards/texts/53544033-introduction",
  },
  dashLab: {
    title: "Learning Center · Lab: Introduction to Dashboards",
    url: "https://learn.datadoghq.com/courses/take/intro-dashboards/texts/53234461-lab-introduction-to-dashboards",
  },
  dsdIntro: {
    title: "Learning Center · Introduction (DogStatsD)",
    url: "https://learn.datadoghq.com/courses/take/create-custom-metrics-dogstatsd/texts/62353983-introduction",
  },
  dsdArch: {
    title: "Learning Center · DogStatsD Architecture",
    url: "https://learn.datadoghq.com/courses/take/create-custom-metrics-dogstatsd/texts/62353984-dogstatsd-architecture",
  },
  dsdTypes: {
    title: "Learning Center · Custom Metrics Types",
    url: "https://learn.datadoghq.com/courses/take/create-custom-metrics-dogstatsd/texts/62353987-custom-metrics-types",
  },
  dsdLab: {
    title: "Learning Center · Lab: Using DogStatsD",
    url: "https://learn.datadoghq.com/courses/take/create-custom-metrics-dogstatsd/texts/62353988-lab-using-dogstatsd",
  },
  dsdEvents: {
    title: "Learning Center · Custom Events and Service Checks",
    url: "https://learn.datadoghq.com/courses/take/create-custom-metrics-dogstatsd/texts/62353985-custom-events-and-service-checks",
  },
  k8sIntro: {
    title: "Learning Center · Introduction (K8s Agent)",
    url: "https://learn.datadoghq.com/courses/take/monitoring-k8s-cluster-agent/texts/51391727-introduction",
  },
  k8sNode: {
    title: "Learning Center · Node and Cluster Agents",
    url: "https://learn.datadoghq.com/courses/take/monitoring-k8s-cluster-agent/texts/51391976-node-and-cluster-agents",
  },
  k8sHelm: {
    title: "Learning Center · Lab: Install the Agent using Helm",
    url: "https://learn.datadoghq.com/courses/take/monitoring-k8s-cluster-agent/texts/51391988-lab-install-the-agent-using-the-helm-chart",
  },
  k8sOp: {
    title: "Learning Center · Lab: Install the Agent using the Operator",
    url: "https://learn.datadoghq.com/courses/take/monitoring-k8s-cluster-agent/texts/51391990-lab-install-the-agent-using-the-operator",
  },
  awsAbout: {
    title: "Learning Center · About the AWS Integration",
    url: "https://learn.datadoghq.com/courses/take/introduction-to-monitoring-aws/texts/44918095-about-the-aws-integration",
  },
  awsLab: {
    title: "Learning Center · Lab: Introduction to Monitoring AWS with Datadog",
    url: "https://learn.datadoghq.com/courses/take/introduction-to-monitoring-aws/texts/44917158-lab-introduction-to-monitoring-aws-with-datadog",
  },
  apiAbout: {
    title: "Learning Center · About the Datadog API",
    url: "https://learn.datadoghq.com/courses/take/dd-api-automation-iac/texts/35844178-about-the-datadog-api",
  },
  apiPostman: {
    title: "Learning Center · Lab: Postman",
    url: "https://learn.datadoghq.com/courses/take/dd-api-automation-iac/texts/35844522-lab-postman",
  },
  apiTf: {
    title: "Learning Center · Lab: Terraform",
    url: "https://learn.datadoghq.com/courses/take/dd-api-automation-iac/texts/35844667-lab-terraform",
  },
  buildInt: {
    title: "Learning Center · Process of Building an Integration",
    url: "https://learn.datadoghq.com/courses/take/intro-to-integrations/texts/35652725-process-of-building-an-integration",
  },
  buildLab: {
    title: "Learning Center · Lab: Creating an Agent Check Integration",
    url: "https://learn.datadoghq.com/courses/take/intro-to-integrations/texts/39144576-lab-creating-an-agent-check-integration",
  },
} as const;

export const DOMAIN_LABELS: Record<DomainId, string> = {
  essential: "Conceptos esenciales",
  infra: "Infraestructura y Agent",
  network: "Red y configuración",
  collection: "Recolección de datos",
  troubleshoot: "Troubleshooting",
  viz: "Visualización y uso",
  practice: "Examen de práctica",
};

export const flashcards: Flashcard[] = [
  {
    id: "e1",
    domain: "essential",
    front: "¿En qué se diferencia observability de monitoring?",
    versus: [
      {
        title: "Monitoring",
        points: [
          "Preguntas que **ya conoces**: ¿CPU alto? ¿el check está CRITICAL?",
          "Respondes con **dashboards** y **monitors**: un umbral dispara Slack/mail",
        ],
      },
      {
        title: "Observability",
        points: [
          "Suma **logs** de la app y **traces** del request (APM)",
          "Sirve cuando **no tenías** el monitor: un fallo que no habías previsto",
        ],
      },
    ],
    back: "**Monitoring**\n- Responde a lo que **ya sabes preguntar**\n- **Dashboards** y **alertas**\n\n**Observability**\n- Añade **logs** y **traces**\n- Sirve para investigar lo **no predicho**",
    sources: [LC.obs, { ...LEARNING_PATH, note: "Introduction to Observability" }, GUIDE],
  },
  {
    id: "e1b",
    domain: "essential",
    front: "¿Cuáles son los tres pilares de observabilidad en Datadog?",
    back: "Tres tipos de dato del **mismo** servicio. Sin tags comunes no saltas de uno a otro.\n\n- **Métricas**: números en el tiempo (CPU, peticiones/s). Van a dashboards y umbrales.\n- **Traces (APM)**: un request recorre servicios. La app usa `ddtrace` → Agent **TCP 8126**.\n- **Logs**: líneas de texto. Las buscas en Log Explorer con **facets**.\n\nPon los mismos `env`, `service` y `version` en los tres (Unified Service Tagging).",
    sources: [LC.obs, GUIDE],
  },
  {
    id: "e2",
    domain: "essential",
    front: "¿Qué métricas de hardware reporta el Agent por defecto?",
    back: "Nada más instalar el Agent, sin `conf.d`, ya salen (checks `.default`):\n- **CPU** · `system.cpu.*` — % uso, para Host Map y monitors de saturación\n- **Memoria** · `system.mem.*` — RAM libre/usada\n- **Disco** · `system.disk.*` — espacio e I/O por volumen (`device`)\n- **Red** · `system.net.*` — bytes/paquetes por interfaz\n\nLas ves en **Infrastructure List** y **Host Map** a los 1–2 min. Nginx/Postgres **no** salen hasta copiar `conf.yaml`.",
    sources: [GUIDE, LC.infraIntro, LC.infraLab],
  },
  {
    id: "e2b",
    domain: "infra",
    front: "¿Qué tipos de recurso agrupa Infrastructure Monitoring?",
    back: "Cuatro sitios donde Datadog pinta infra (no son productos distintos que instales):\n- **Hosts**: VMs/bare metal con Agent. Infrastructure List + Host Map.\n- **Containers**: Docker/K8s. El Agent monta el socket y ve pods/cgroups.\n- **Process**: Process Agent lista procesos y CPU por PID (live processes).\n- **Serverless**: Lambda/funciones. **No** es el Agent clásico: forwarder/extensión + integración de la cuenta.",
    sources: [LC.infraIntro, GUIDE],
  },
  {
    id: "e3",
    domain: "essential",
    front: "¿Qué archivos de configuración usa el Agent?",
    back: "### Agent (todo el proceso)\nEn Linux editas `/etc/datadog-agent/datadog.yaml`: `api_key`, `site`, `hostname`, logs…\nLuego `sudo systemctl restart datadog-agent`.\nWindows: `%ProgramData%\\Datadog\\datadog.yaml`. macOS: `/opt/datadog-agent/etc/datadog.yaml`.\n\n### Checks (Nginx, Postgres, HTTP…)\nNo van en `datadog.yaml`. Entras en `/etc/datadog-agent/conf.d/<check>.d/`, copias `conf.yaml.example` a `conf.yaml`, pones host/puerto y **reinicias el Agent**.\n\nYAML roto: el Agent **no arranca** o **ignora ese check** (míralo en `datadog-agent status`).",
    sources: [GUIDE, DOC_AGENT, LC.agentAbout],
  },
  {
    id: "e3b",
    domain: "essential",
    front: "¿Cuál es la precedencia de configuración del Agent?",
    back: "Si la misma opción está en varios sitios, **gana la de más arriba**. Las de abajo no la pisan.\n\n1. **Remote Configuration** (la más alta)\n   Cambias el comportamiento **desde la UI de Datadog** (Fleet, sampling de traces, flares…). El Agent **pregunta** al sitio por HTTPS 443 y aplica el cambio **sin editar el host**.\n   Cómo: Organization Settings → Remote Configuration ON; la API key con RC; Agent ≥ 7.42 para sampling remoto.\n   Si RC fija un valor, **se ignora** env y YAML para esa opción.\n\n2. **Variables de entorno `DD_*`**\n   Pisan el YAML. Mapeo: `DD_API_KEY` → `api_key`, `DD_SITE` → `site`, `DD_HOSTNAME` → `hostname`.\n   Host Linux: `sudo systemctl edit datadog-agent` y `Environment=DD_SITE=datadoghq.eu`, o archivo `/etc/datadog-agent/environment`. Luego `sudo systemctl restart datadog-agent`.\n   Docker/K8s: `-e DD_API_KEY=... -e DD_SITE=datadoghq.eu` en el contenedor del Agent.\n\n3. **`datadog.yaml`** (la base, la más baja)\n   Linux: `/etc/datadog-agent/datadog.yaml`. Pones `api_key` y `site`, guardas, `sudo systemctl restart datadog-agent`.\n   Los checks **no** van aquí (`conf.d/<check>.d/conf.yaml`).",
    sources: [GUIDE, DOC_AGENT, LC.agentAbout],
  },
  {
    id: "e3c",
    domain: "essential",
    front: "¿Qué hace Remote Configuration en el Agent?",
    back: "El Agent **no espera** a que Datadog le entre en el host. Él **consulta** el sitio (HTTPS 443) y se baja cambios firmados.\n\nQué puedes hacer desde la UI, sin SSH:\n- Mandar un **flare** o **actualizar el Agent** (Fleet Automation)\n- Cambiar **sampling de traces** (APM) **sin reiniciar**\n- Activar AAP, reglas de Workload Protection, pipelines\n\nCómo dejarlo listo:\n1. Organization Settings → Remote Configuration **ON**\n2. La **API key** del Agent con RC habilitada (`api_keys_write`)\n3. Agent 7 reciente (sampling remoto: **≥ 7.42**)\n\nLos tracers de la app **no** pollan Datadog: se lo piden **al Agent**.",
    sources: [DOC_AGENT, LC.agentAbout],
  },
  {
    id: "e3d",
    domain: "essential",
    front: "¿Qué formatos debes saber leer en configs y checks (sin programar)?",
    back: "El examen pide **entender** configs, no escribir un producto.\n\n- **YAML**: `datadog.yaml` y `conf.d/*/conf.yaml` (indentación = estructura).\n- **JSON**: labels de Autodiscovery, cuerpo de la API, templates `com.datadoghq.ad.checks`.\n- **Python** básico: un Custom Check es una clase `AgentCheck` con `check()`.\n- **Shell**: `datadog-agent status`, `curl` a la API, scripts de install.\n\nSi el YAML está mal indentado, el Agent no arranca o ignora el check.",
    sources: [GUIDE],
  },
  {
    id: "e4",
    domain: "network",
    front: "¿Qué puertos usa el Agent y para qué?",
    back: "Tres caminos distintos. Si bloqueas el puerto, **esa** telemetría muere.\n\n1. **UDP 8125** — DogStatsD. La **app** manda custom metrics a `localhost:8125`. El Agent las agrupa ~10 s y las sube. En Docker, otras apps necesitan `DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true`.\n2. **TCP 8126** — traces. `ddtrace` habla con el Agent (`DD_AGENT_HOST` + este puerto). Cámbialo con `DD_APM_RECEIVER_PORT`.\n3. **HTTPS 443** — salida a Datadog (`DD_SITE`). El Forwarder **inicia** él. Sin 443 no hay UI.\n\n8125/8126 no se publican a internet.",
    sources: [GUIDE, DOC_NETWORK, DOC_DOGSTATSD, DOC_DDTRACE, LC.agentCfg],
  },
  {
    id: "e4b",
    domain: "network",
    front: "¿Quién inicia el tráfico entre el Agent y Datadog?",
    back: "1. El Agent **abre él** las conexiones de salida a Datadog (HTTPS 443 hacia el `DD_SITE`). Datadog **no** entra por inbound a tu red.\n2. En el firewall/proxy: allowlist los destinos del sitio (p. ej. `*.agent.datadoghq.eu` si usas EU), puerto **443**.\n3. En el host: 8125 (DogStatsD) y 8126 (traces) solo **localhost** o la red de contenedores de la app. Nadie de internet a esos puertos.\n4. Comprueba: `sudo datadog-agent status` → Forwarder sin errores de conexión.",
    sources: [GUIDE, DOC_NETWORK, LC.agentCfg],
  },
  {
    id: "e4c",
    domain: "troubleshoot",
    front: "Si el Forwarder falla, ¿qué miras primero?",
    back: "El Forwarder es el trozo del Agent que **envía** métricas/logs/traces a Datadog. Si falla, no llega nada a la UI.\n\n1. `sudo datadog-agent status` → sección **Forwarder**: Transactions, bytes, **API key valid**.\n2. API key inválida: corrige `api_key` en `datadog.yaml` o `DD_API_KEY` y `sudo systemctl restart datadog-agent`.\n3. Abre `/var/log/datadog/agent.log` (Docker: `docker logs dd-agent`) y busca 403, timeout, denied.\n4. Red: el host sale por **443** al `DD_SITE` correcto (`datadoghq.eu` vs `.com`).",
    sources: [DOC_TROUBLE, LC.agentCfg],
  },
  {
    id: "e5",
    domain: "essential",
    front: "¿Qué es metadata en Datadog?",
    back: "No es una métrica: es **quién** es el recurso.\n\n- **Hostname**: el tag `host`. Agrupa todo lo de esa máquina. `datadog-agent hostname`.\n- **Tags**: `env:prod`, `service:api`, `version:1.2`. Filtras un dashboard (`{env:prod}`), agrupas `by {service}`, saltas de log a traza.\n- **Cloud/roles**: instance-id, az, `role:web` — los pone el crawler o el Agent.\n\nSin metadata, ves números sueltos y no sabes de qué servicio son.",
    sources: [GUIDE, DOC_TAGS],
  },
  {
    id: "lc-qs-1",
    domain: "essential",
    front: "¿Qué productos de la UI correlacionan una app que ya envía datos?",
    back: "La UI **no recolecta**: lee lo que ya llegó. Misma app, distintos sitios:\n\n- **Dashboards**: gráficos de métricas (y widgets de logs/traces).\n- **Logs**: Log Explorer, búsqueda y facets.\n- **Software Catalog**: ficha del `service` (owners, SLOs, traces).\n- **Monitors**: umbral → notificación (Slack, mail…).\n- **Notebooks**: informe con gráficos vivos para un incidente.\n- **Bits**: chat que consulta esos datos.\n\nSi no hay Agent/crawler/librería enviando, estas pantallas están vacías.",
    sources: [LC.qsLab, LEARNING_PATH],
  },
  {
    id: "lc-qs-2",
    domain: "essential",
    front: "¿Hace falta instalar el Agent para usar Dashboards, Logs o Monitors?",
    back: "**No**, si la org **ya recibe datos**. El Agent **recolecta** en el host/contenedor. La UI consulta lo que ya está en Datadog.",
    sources: [LC.qsLaunch, LC.qsLab],
  },
  {
    id: "lc-host-1",
    domain: "infra",
    front: "¿Cuáles son las partes del Agent?",
    back: "Son procesos del mismo paquete. Si uno está caído, falla **esa** telemetría.\n\n- **Collector**: ejecuta los **checks** (CPU, disco, Nginx…) y arma las métricas.\n- **Forwarder**: hace el POST HTTPS a Datadog. Si este falla, el Collector corre pero **la UI está vacía**.\n- **APM / trace-agent**: escucha **TCP 8126** y reenvía traces. Sin él, `ddtrace` no entrega.\n- **Process Agent**: lista procesos y live processes.\n\nLos ves en `sudo datadog-agent status` y en logs `agent.log`, `trace-agent.log`, `process-agent.log`.",
    sources: [LC.agentAbout, DOC_AGENT],
  },
  {
    id: "lc-host-2",
    domain: "infra",
    front: "¿Dónde puede correr el Agent y qué checks trae de serie?",
    back: "**Dónde corre**: cualquier máquina que puedas instalar (VM, cloud, bare metal). Linux, Windows; macOS en el Agent open source. En K8s no es “un binario en el nodo a mano”: DaemonSet.\n\n**Checks de serie** (hay que **activar** YAML, no salen solos):\n- **Nginx**: copia `conf.d/nginx.d/conf.yaml`, URL de status, restart, `status` → nginx.\n- **PostgreSQL**: `postgres.d/conf.yaml` con host, user, pass.\n- **Redis**: `redisdb.d` o Autodiscovery en el contenedor Redis.\n\nCPU/mem/disco **sí** van sin este paso.",
    sources: [LC.agentAbout, DOC_AGENT],
  },
  {
    id: "i3",
    domain: "infra",
    front: "¿Cómo instalas el Agent en un host Linux?",
    back: "1. Coge **API key** y **DD_SITE** en Agent > Install\n2. En el host, Agent 7:\n\n```\nDD_API_KEY=<KEY> DD_SITE=\\\"datadoghq.eu\\\" bash -c \\\"$(curl -L https://install.datadoghq.com/scripts/install_script_agent7.sh)\\\"\n```\n\n3. El script instala el paquete, escribe `api_key` en `/etc/datadog-agent/datadog.yaml` y arranca `datadog-agent`\n4. A mano (Debian/Ubuntu): repo APT + `sudo apt-get install datadog-agent`",
    sources: [GUIDE, DOC_AGENT, LC.agentLab],
  },
  {
    id: "i3b",
    domain: "infra",
    front: "¿Con qué comandos compruebas que el Agent corre en un host?",
    back: "1. `sudo systemctl status datadog-agent` — el **servicio del SO** está `active`. Si está `failed`, el YAML está roto o el binario no arrancó. `sudo journalctl -u datadog-agent`.\n2. `sudo datadog-agent status` — **intake**: Forwarder, API key, checks OK/ERROR.\n3. `sudo datadog-agent hostname` — el tag `host` que verás en Infrastructure List.\n\nDocker (no hay systemd del Agent en el host):\n```\ndocker exec -it dd-agent agent status\n```",
    sources: [DOC_AGENT, DOC_TROUBLE, LC.agentLab],
  },
  {
    id: "i8",
    domain: "infra",
    front: "¿Qué es `DD_SITE`?",
    back: "Es la **región de tu cuenta**, no un “sitio web” genérico.\n\n- US: `datadoghq.com` (app.datadoghq.com)\n- EU: `datadoghq.eu`\n- Otros: `us3.datadoghq.com`, `ap1.datadoghq.com`… el que sale en Agent > Install.\n\nCómo se pone: `site: datadoghq.eu` en YAML o `DD_SITE=datadoghq.eu`. Si pones `.com` con cuenta EU, el Forwarder entrega **a otro Datadog** y tu UI está vacía (API key a veces ni valida).\n\nMíralo junto a la API key en `datadog-agent status`.",
    sources: [DOC_AGENT, LC.agentAbout],
  },
  {
    id: "i1",
    domain: "infra",
    front: "¿Cuál es la diferencia entre API key y Application key?",
    versus: [
      {
        title: "API key",
        points: [
          "De la **organización**, no de un usuario",
          "Sirve para **meter datos**: Agent, DogStatsD, POST de métricas",
          "En el host: `api_key:` en `datadog.yaml` o `DD_API_KEY`",
        ],
      },
      {
        title: "Application key",
        points: [
          "De un **usuario** (hereda su RBAC)",
          "Junto a la API key abre la **API** (crear monitors, leer métricas)",
          "**No** la pongas en el Agent: no sustituye a `api_key`",
        ],
      },
    ],
    back: "### API key\nDe la **org**. Autentica **ingesta**: el Agent, DogStatsD, `POST /api/v1/series`.\nEn el host: `api_key:` en `/etc/datadog-agent/datadog.yaml` o `DD_API_KEY`. Organization Settings > API Keys.\n\n### Application key\nDe un **usuario** (sus permisos). Sin ella `curl` a la API para **crear/leer** (monitors, dashboards) da 403.\nSe usa **junto** a la API key. **Nunca** reemplaza la del Agent.",
    sources: [GUIDE, DOC_KEYS, LC.apiAbout],
  },
  {
    id: "i1b",
    domain: "infra",
    front: "¿Qué pasa si roban una API key o una Application key?",
    versus: [
      {
        title: "API key",
        points: ["Mandan **métricas/logs falsos** (ensucian dashboards, pueden tapar incidentes)"],
      },
      {
        title: "Application key",
        points: ["Con tu RBAC: **leer** datos, **crear/borrar** monitors, keys, dashboards"],
      },
    ],
    back: "- **API key** robada → pueden **inyectar** métricas/logs en tu org (no suelen borrar monitors). Rota la key en Organization Settings y actualiza `api_key`/`DD_API_KEY` + restart.\n- **Application key** robada → actúan **como ese usuario**: leer APM, cambiar monitors, crear keys. Revócala y revisa Audit Trail.",
    sources: [DOC_KEYS, LC.apiAbout],
  },
  {
    id: "i4",
    domain: "infra",
    front: "¿Cómo instalas el Agent en Docker?",
    back: "Un contenedor por host:\n\n```\ndocker run -d --cgroupns host --pid host --name dd-agent \\\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  -v /proc/:/host/proc/:ro \\\n  -v /sys/fs/cgroup/:/host/sys/fs/cgroup:ro \\\n  -e DD_SITE=<DATADOG_SITE> \\\n  -e DD_API_KEY=<DATADOG_API_KEY> \\\n  registry.datadoghq.com/agent:7\n```\n\nSin esos **bind mounts** el Agent no ve el host ni los contenedores.",
    sources: [GUIDE, DOC_DOCKER, LC.dockerAbout],
  },
  {
    id: "i4b",
    domain: "infra",
    front: "¿Cómo configuras el Agent en Docker además del `docker run`?",
    back: "En Docker **no** editas el `datadog.yaml` del host. Todo va en `-e` del contenedor `dd-agent` y luego recreas el contenedor.\n\n- `DD_API_KEY` · sin ella el Forwarder recibe 403 y no hay datos\n- `DD_SITE` · `datadoghq.eu` o `.com`, el de tu cuenta\n- `DD_HOSTNAME` · nombre único si el autodetect se duplica\n- `DD_TAGS` · p. ej. `env:prod,team:payments` para filtrar en la UI\n- Logs de contenedores: `DD_LOGS_ENABLED=true` y la app escribe en **stdout** (el Agent lee el socket Docker)\n- Custom metrics desde **otros** contenedores: `DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true` y las apps apuntan a UDP 8125 del Agent\n- Tags de un servicio concreto: **labels** en el contenedor de la **app** (`com.datadoghq.tags.service=...`), no en el Agent",
    sources: [DOC_DOCKER, LC.dockerAbout, LC.dockerLab],
  },
  {
    id: "i4c",
    domain: "infra",
    front: "Además de un contenedor Compose, ¿cómo despliegas el Agent en orquestadores?",
    back: "### ECS\nEn la task definition, un contenedor **sidecar** `public.ecr.aws/datadog/agent` (o `datadog/agent`) con `DD_API_KEY`, `DD_SITE` y montaje del socket Docker. La app va en el **otro** contenedor de la misma task.\n\n### EKS / AKS / GKE\nUn Agent **por nodo**: DaemonSet (Operator o Helm). Un Deployment de 1 réplica **no** ve los otros nodos.\n\n**Cluster Agent**: otro Deployment. Los Node Agents le preguntan a él la API de K8s (menos RBAC por nodo).",
    sources: [DOC_DOCKER, DOC_K8S],
  },
  {
    id: "i5",
    domain: "infra",
    front: "¿Qué hace el Node Agent frente al Cluster Agent en Kubernetes?",
    versus: [
      {
        title: "Node Agent",
        points: [
          "DaemonSet: **un pod por nodo**. Métricas del nodo y de los pods (kubelet)",
          "Sin Cluster Agent, **cada** nodo llama a la API de Kubernetes (tokens, rate limit, RBAC en todos)",
        ],
      },
      {
        title: "Cluster Agent",
        points: [
          "Un Deployment: **proxy** de la API y metadatos del clúster",
          "Los nodos preguntan al Cluster Agent → **menos** permisos RBAC en cada nodo",
        ],
      },
    ],
    back: "### Node Agent (DaemonSet)\nUn pod Agent **en cada nodo**. Recoge CPU del nodo y métricas de pods hablando con el **kubelet**. Sin Cluster Agent, ese pod también llama a la **API de Kubernetes** (list/watch). Eso multiplica RBAC y carga.\n\n### Cluster Agent (Deployment)\nUn servicio central. Los Node Agents le preguntan **a él** por metadatos del clúster. Resultado: **menos tokens** en los nodos y una sola conversación con la API.\n\nLos dos se instalan juntos con Operator/Helm; no elijas uno u otro para “tener Agent”.",
    sources: [DOC_K8S, LC.k8sIntro, LC.k8sNode],
  },
  {
    id: "i5b",
    domain: "infra",
    front: "¿Cómo se instala el Agent en Kubernetes y cuál se recomienda?",
    back: "**Operator** (recomendado):\n1. `helm repo add datadog https://helm.datadoghq.com`\n2. `helm install datadog-operator datadog/datadog-operator`\n3. `kubectl create secret generic datadog-secret --from-literal api-key=<API_KEY>`\n4. Crea `datadog-agent.yaml` (`kind: DatadogAgent`, `site`, secret) y `kubectl apply -f datadog-agent.yaml`\n\n**Helm**:\n```\nhelm install datadog-agent -f datadog-values.yaml datadog/datadog\n```\n\n(`apiKeyExistingSecret` + `site` en `datadog-values.yaml`)\n\nManual: DaemonSet YAML.",
    sources: [DOC_K8S, LC.k8sHelm, LC.k8sOp],
  },
  {
    id: "i6",
    domain: "infra",
    front: "¿Por qué el hostname del Agent debe ser único?",
    back: "Datadog agrupa por el tag `host`. Si dos máquinas mandan el **mismo nombre**, las métricas se **mezclan** (CPU de A + B en un hexágono).\n\n1. Mira el nombre actual: `sudo datadog-agent hostname`\n2. Pon uno **único** (una sola de estas; las env pisan el YAML):\n   - YAML: `hostname: web-prod-01` en `/etc/datadog-agent/datadog.yaml`\n   - Env: `DD_HOSTNAME=web-prod-01`\n3. `sudo systemctl restart datadog-agent`\n4. En **Infrastructure List** debe salir ese nombre, fresco, una sola fila.",
    sources: [GUIDE, DOC_AGENT, LC.agentCfg],
  },
  {
    id: "i6b",
    domain: "infra",
    front: "¿Qué es el hostname canónico y un alias?",
    back: "**Canónico**: el valor del tag `host` que Datadog usa para unir métricas, logs y traces. Es el que imprime `sudo datadog-agent hostname` y el que ves como nombre en Infrastructure List.\n\n**Alias**: otros nombres de la **misma** máquina (instance-id `i-0abc`, IP privada). Datadog los enseña para que un buscador por IP o por id de AWS encuentre el mismo host.\n\nSi el canónico cambia (DHCP, cloud), las series se parten. Fíjalo con `hostname:` / `DD_HOSTNAME` y compara List vs el comando.",
    sources: [DOC_AGENT, DOC_INFRA, DOC_TROUBLE, LC.agentCfg],
  },
  {
    id: "c5",
    domain: "infra",
    front: "¿Para qué sirve la API de Datadog?",
    back: "La API es HTTP para **automatizar** lo que harías a clic: crear monitors, dashboards, SLOs, synthetics, mandar una métrica custom.\n\nAuth en cada request:\n- Header `DD-API-KEY` (org)\n- Header `DD-APPLICATION-KEY` (permisos del usuario) para casi todo lo que **no** es solo ingesta\n\nIngesta pura de métricas puede ir solo con API key. Crear un monitor **exige las dos**.",
    sources: [GUIDE, DOC_API, LC.apiAbout],
  },
  {
    id: "c5b",
    domain: "infra",
    front: "¿Con qué clientes consumes la API de Datadog?",
    back: "Todos pegan a `api.<DD_SITE>` con las dos keys.\n\n- **curl / httpie**: un GET/POST puntual. Headers `DD-API-KEY` y `DD-APPLICATION-KEY`.\n- **Postman**: importas la colección oficial de Datadog y rellenas las keys.\n- **Librerías** (Python, Go…): el mismo API en código de CI.\n- **Dogshell**: CLI `dog`. Ejemplo: `dog metric post my.metric 1 --tags env:lab`.\n- **Terraform** `datadog_monitor`, `datadog_dashboard`: IaC. El provider usa las keys del env `DD_API_KEY` / `DD_APP_KEY`.",
    sources: [DOC_API, LC.apiPostman, LC.apiTf],
  },
  {
    id: "n5",
    domain: "network",
    front: "¿Qué es Autodiscovery?",
    back: "En contenedores **no** copias `conf.yaml` a mano para cada Redis que nace y muere. Autodiscovery (ON por defecto):\n\n1. El Agent ve el socket Docker / kubelet: contenedor **create/stop**.\n2. Si el contenedor tiene labels/annotations AD, aplica el **template** (host/puerto).\n3. Hay templates de fábrica (`auto_conf.yaml`) para Apache, Redis, etc.\n\nK8s: annotations `ad.datadoghq.com/<contenedor>.checks` en el **pod de la app**.\nComprueba: `sudo datadog-agent configcheck` — el `%%host%%` debe ser una IP, no el literal.",
    sources: [GUIDE, DOC_AD, LC.dockerAd],
  },
  {
    id: "n5b",
    domain: "network",
    front: "¿Cómo etiquetas un contenedor para Autodiscovery desde Agent 7.36?",
    back: "En el contenedor de la **app** (no el Agent):\n\n```\ncom.datadoghq.ad.checks: '{\\\"redisdb\\\":{\\\"instances\\\":[{\\\"host\\\":\\\"%%host%%\\\",\\\"port\\\":\\\"%%port%%\\\"}]}}'\n```\n\nK8s: annotation `ad.datadoghq.com/redis.checks`\n\nAntes de 7.36: `check_names`, `init_configs`, `instances`, `logs`.",
    sources: [DOC_AD, LC.dockerAd],
  },
  {
    id: "n5c",
    domain: "network",
    front: "¿Qué variables de Autodiscovery resuelven host, puerto y env?",
    back: "Van **dentro** del JSON/YAML de Autodiscovery. El Agent las sustituye al arrancar el contenedor:\n\n- `%%host%%` → IP del contenedor (para que el check pegue a Redis/Nginx **de ese** pod).\n- `%%port%%` → primer puerto expuesto.\n- `%%env_VAR%%` → valor de esa variable **en el Agent** (no en la app), p. ej. `%%env_REDIS_PASSWORD%%` si se la pasaste al Agent.\n\nSi `configcheck` sigue mostrando `%%host%%` literal, las labels no están en el contenedor de la app.",
    sources: [DOC_AD, LC.dockerAd],
  },
  {
    id: "lc-cnm-1",
    domain: "network",
    front: "¿Qué visibilidad aporta Cloud Network Monitoring (CNM)?",
    back: "CNM mira **flujos de red**, no CPU. Sirve cuando el síntoma es “va lento entre servicios” y el host está bien.\n\nVes tráfico **entre**: servicios, contenedores, zonas (`az`) o el tag que elijas.\n\nQué detectas: DNS que falla, latencia, pérdida de paquetes, dependencias reales (quién habla con quién), coste **cross-region**, picos raros.\n\nTambién on-prem e híbrido: no es solo AWS. Se habilita en el Agent (`network_config` / Helm `networkMonitoring`).",
    sources: [LC.cnm, LC.cnmLab],
  },
  {
    id: "c1",
    domain: "collection",
    front: "¿Qué es DogStatsD y cómo viaja la métrica?",
    back: "El cliente StatsD de Datadog **dentro del Agent**. La app no abre HTTPS: tira UDP y sigue.\n\nPara qué: **custom metrics**, **events**, **service checks** que no trae un check oficial.\n\nCamino:\n1. En el código: cliente DogStatsD → **UDP 8125** del Agent (`localhost` o el sidecar).\n2. El Agent **flush ~10 s** (agrega counts/gauges).\n3. El Forwarder las sube por HTTP.\n\nEl nombre **se crea al primer envío**. No lo das de alta antes. En Docker, `DD_DOGSTATSD_NON_LOCAL_TRAFFIC=true` si la app no está en el mismo net namespace.",
    sources: [GUIDE, DOC_DOGSTATSD, LC.dsdIntro, LC.dsdArch],
  },
  {
    id: "c2",
    domain: "collection",
    front: "¿Para qué sirve cada tipo de métrica: count, rate, gauge, histogram y distribution?",
    back: "El tipo decide **cómo se agrega** en el flush (~10 s):\n\n- **Count** · “cuántos eventos”. Datadog guarda **rate** (count / segundos del flush) para comparar ventanas.\n- **Rate** · ya viene como “por segundo” desde el cliente.\n- **Gauge** · **último valor** del intervalo (cola, temperatura, %CPU custom).\n- **Histogram** · distribución (avg, median, max, percentiles) **en un host**.\n- **Distribution** · lo mismo, pero **global** (todos los hosts/regiones) para un p99 de flota.\n\nSi quieres p99 de todo el servicio: distribution, no histogram.",
    sources: [DOC_METRICS, DOC_DOGSTATSD, LC.metTypes, LC.dsdTypes, LC.dsdLab],
  },
  {
    id: "c2b",
    domain: "collection",
    front: "Antes de crear una custom metric, ¿qué miras?",
    back: "Antes de inventar `app.foo.bar`:\n\n1. **Metrics Summary** (Metrics Explorer > Summary): busca el nombre. Si ya existe `nginx.requests`, úsala.\n2. **Integrations**: si hay check oficial (Redis, Postgres), actívalo en `conf.d` en vez de un StatsD paralelo.\n\nDuplicar una métrica de integración como custom **cuesta cardinalidad y dinero** y parte los dashboards.",
    sources: [DOC_METRICS, LC.dsdTypes],
  },
  {
    id: "c8",
    domain: "collection",
    front: "¿Qué es una métrica frente a una timeseries?",
    versus: [
      {
        title: "Métrica",
        points: [
          "Un número con **timestamp** (`system.cpu.user` = 12.3 a las 16:01)",
          "Un punto suelto **no** te dice tendencia ni si es alto para ese host",
        ],
      },
      {
        title: "Timeseries",
        points: [
          "Esa métrica **más tags** dibujada en el tiempo",
          "Una línea por combinación de tags (`host:a` vs `host:b`)",
        ],
      },
    ],
    back: "### Métrica\nEl **nombre** + un valor + un instante. Unidad en metadata (`percent`, `byte`). Un único punto no sirve para alertar.\n\n### Timeseries\nEsa métrica **repetida** con tags: `system.cpu.user{host:web-1,env:prod}` cada 15 s. El gráfico es esa línea. `by {host}` parte una timeseries por host.",
    sources: [GUIDE, DOC_METRICS, LC.metWhat],
  },
  {
    id: "c8b",
    domain: "collection",
    front: "¿Cómo se agrega una timeseries en Datadog?",
    back: "Una timeseries son muchos puntos. Datadog los **resume**:\n\n- `avg` · media (CPU típico)\n- `sum` · suma (peticiones, bytes)\n- `min` / `max` · extremos\n- `count` · cuántos puntos (no el valor)\n\n**Rollup**: en un rango largo compacta (p. ej. 1 punto/hora) para ver tendencia. En la query: `avg:system.cpu.user{*}.rollup(max, 60)`.\n\nEl `avg:` del principio es el **space aggregation** (entre series); el rollup es en el **tiempo**.",
    sources: [DOC_METRICS, LC.metLab, DOC_QUERY],
  },
  {
    id: "c9",
    domain: "collection",
    front: "¿Cómo nombras y tageas una custom metric?",
    back: "- **Nombre fijo** en namespaces: `shopist.checkouts`, no `shopist.checkout.user_9921`. El nombre es el tipo de cosa; el detalle va en **tags** (`user_id` no, eso explota).\n- Tags: `env:prod`, `endpoint:/pay`. Así filtras y agrupas.\n- Si pones IDs en el **nombre**, cada ID es una métrica nueva: no agregas y el billing se dispara.",
    sources: [DOC_METRICS, DOC_DOGSTATSD, LC.dsdArch],
  },
  {
    id: "c9b",
    domain: "collection",
    front: "¿Cómo afecta la cardinalidad al billing de custom metrics?",
    back: "Custom metrics se facturan por **timeseries**: cada par **nombre + conjunto de tags** es una serie.\n\n`shopist.checkouts{env:prod}` y `{env:staging}` = 2 series (2 líneas de billing custom, distinto de métricas de integración).\n\n**Cardinalidad** = cuántas series distintas. Un tag `user:uuid` por request genera millones de series.\n\nQuita tags que no uses para filtrar ni `by {tag}` en gráficos.",
    sources: [DOC_METRICS, LC.dsdArch],
  },
  {
    id: "lc-dsd-4",
    domain: "collection",
    front: "¿Qué es un custom event de DogStatsD y cuánto se retiene?",
    back: "Un **evento** es un suceso puntual (deploy, cambio de config), no una serie numérica.\n\nLo mandas por DogStatsD (título + texto). Lo ves en **Event Management** / stream del dashboard.\n\nRetención **~15 meses** frente a **7–30 días** de logs: sirve para “¿qué cambió aquel martes?”.\n\nCorrelacionalo con el servicio poniendo los mismos tags UST (`env`, `service`, `version`).",
    sources: [LC.dsdEvents],
  },
  {
    id: "lc-dsd-5",
    domain: "collection",
    front: "¿Qué valores tiene un service check y dónde lo ves?",
    back: "Un service check es un **estado**, no un número continuo:\n\n- **0** OK — el servicio responde\n- **1** WARNING — degradado\n- **2** CRITICAL — caído (el monitor suele alertar aquí)\n- **3** UNKNOWN — el check no pudo decidir\n\nDónde: **Monitoring > Check Summary** (último estado por check/host).\nAlerta: New Monitor → tipo **Service Check**, elige el check (`datadog.agent.up` o el tuyo) y avisa si está CRITICAL más de N minutos.",
    sources: [LC.dsdEvents, DOC_MONITORS],
  },
  {
    id: "lc-int-1",
    domain: "collection",
    front: "¿Cuáles son los tres tipos de integraciones?",
    back: "Tres formas de meter datos. Eliges según **dónde** vive el sistema:\n\n1. **Agent-based**: un `check` Python en el host (`conf.d/nginx.d/conf.yaml`). El Agent habla con Nginx/Postgres en local.\n2. **Crawler / auth**: **no** hay Agent en cada RDS. En Datadog pegas un rol IAM / service principal y Datadog **llama a la API** de AWS/Azure/GCP (pull).\n3. **Library / trace**: código (`ddtrace`, cliente DogStatsD). La app empuja traces o custom metrics.\n\nHay +800 en el catálogo Integrations. Muchas combinan Agent + crawler.",
    sources: [LC.intWhat, GUIDE, DOC_INTEGRATIONS],
  },
  {
    id: "lc-int-1b",
    domain: "collection",
    front: "¿Qué es ddtrace y a dónde envía traces?",
    back: "`ddtrace` es la librería **APM** que instrumenta la app (Python, Java, Go…).\n\n1. La instalas en el **código** o sidecars (`DD_TRACE_ENABLED`).\n2. Exporta traces al Agent en **TCP 8126** (`DD_AGENT_HOST` = hostname del Agent, en K8s el hostIP o `datadog.kube-system`).\n3. **No** mandes traces directo a SaaS: el Agent las muestrea y las sube por 443.\n\nSin Agent alcanzable en 8126, el APM está vacío.",
    sources: [LC.intLib, DOC_DDTRACE, GUIDE],
  },
  {
    id: "lc-int-2",
    domain: "collection",
    front: "¿Qué diferencia hay entre integrations-core y extras?",
    versus: [
      {
        title: "Core",
        points: [
          "Vienen **dentro** del paquete Agent (`conf.d/*.d`)",
          "Las escribe y soporta **Datadog** (Nginx, Redis, disk…)",
        ],
      },
      {
        title: "Extras",
        points: [
          "Repo **integrations-extras**: hay que instalarlas a parte",
          "Comunidad: **sin** soporte oficial si se rompen",
        ],
      },
    ],
    back: "### Core\nEstán en el Agent. Carpeta `conf.d/<check>.d/` ya existe. Datadog las mantiene (bugs, métricas). Activar = copiar `conf.yaml` y restart.\n\n### Extras (comunidad)\nGitHub `integrations-extras`. **No** vienen instaladas. Las copias al Agent (`/etc/datadog-agent/checks.d` + conf). Si fallan, **no** abres ticket de producto igual que con core.",
    sources: [LC.intAgent],
  },
  {
    id: "c4",
    domain: "collection",
    front: "¿Cómo habilitas un check del Agent en `conf.d`?",
    back: "Ejemplo Nginx:\n1. `cd /etc/datadog-agent/conf.d/nginx.d`\n2. `sudo cp conf.yaml.example conf.yaml`\n3. Edita `instances` (host, puerto, credenciales)\n4. `sudo systemctl restart datadog-agent`\n5. `sudo datadog-agent status`\n\nYAML mal → el check se ignora o el Agent no arranca.",
    sources: [GUIDE, DOC_INTEGRATIONS, DOC_AGENT],
  },
  {
    id: "c3",
    domain: "collection",
    front: "¿Cómo recolecta Datadog un crawler cloud (AWS)?",
    back: "1. En AWS: **rol IAM** que Datadog asume (`sts:AssumeRole`) con políticas CloudWatch/EC2/RDS\n2. En Datadog (Integrations > Amazon Web Services): ARN del rol + ID externo\n3. Datadog hace **pull por API** (no instala Agent en cada recurso)\n\nCloudFormation/Terraform pueden crear rol + integración. Azure/GCP: identity de la cuenta.",
    sources: [GUIDE, DOC_INTEGRATIONS, LC.intAuth, LC.intLab],
  },
  {
    id: "c3b",
    domain: "collection",
    front: "¿Cómo filtras recursos en una integración cloud?",
    back: "En la integración AWS/Azure/GCP hay **filtros de recursos** para no crawlear toda la cuenta.\n\n- Incluir: `env:prod` → solo tags que coinciden\n- Comodín: `env:prod-*` o `?` un carácter\n- Excluir: `!env:sandbox` o `!Name:test*`\n\nSi un recurso entra por include **y** por exclude, **gana el exclude** (no se monitoriza).\n\nÚsalo para no pagar CloudWatch de cuentas de demo.",
    sources: [LC.intAuth, DOC_INTEGRATIONS],
  },
  {
    id: "lc-aws-1",
    domain: "collection",
    front: "¿Cada cuánto llegan métricas de CloudWatch vs Metric Streams vs Agent en AWS?",
    versus: [
      {
        title: "CloudWatch",
        points: ["Datadog **llama** a CloudWatch: retraso típico **~10 min**"],
      },
      {
        title: "Streams",
        points: ["AWS **empuja** por Firehose: **~3 min**"],
      },
      {
        title: "Agent",
        points: ["En el EC2/ECS/EKS: host metrics **cada 15 s**"],
      },
    ],
    back: "Tres caminos, tres latencias:\n\n- **CloudWatch pull**: Datadog pregunta a la API. ~**10 min**. Barato de montar (solo rol IAM), inútil para alertas de segundos.\n- **Metric Streams + Firehose**: AWS **push**. ~**3 min**. Más fresco, más setup (stream + Firehose a Datadog).\n- **Agent** en la instancia/pod: CPU/mem **15 s**. CloudWatch nativo suele ser 1–5 min.\n\nPara paging de host usa Agent. Para RDS/ELB sin Agent, crawler o streams.",
    sources: [LC.awsAbout, LC.awsLab],
  },
  {
    id: "lc-aws-2",
    domain: "collection",
    front: "¿Cómo llegan los logs de AWS y qué aporta el Agent además de CloudWatch?",
    back: "**Logs AWS**: CloudWatch Logs → Lambda **Datadog Forwarder** (push). El Agent en EC2 **no** lee todos los logs de Lambda por arte de magia.\n\n**El Agent encima del crawler**: +200 checks en el host, DogStatsD (custom), APM (`ddtrace`). CloudWatch solo no te da traces ni 15 s de CPU.\n\nRecomendación del curso: **Agent en compute + integración IAM** para el resto (RDS, ELB…). La integración trae +100 dashboards OOTB.",
    sources: [LC.awsAbout, LC.awsLab],
  },
  {
    id: "lc-custint-1",
    domain: "collection",
    front: "¿Qué diferencia hay entre un Custom Check y una integración publicable?",
    versus: [
      {
        title: "Custom Check",
        points: [
          "Script Python **en tu host** para un caso (un puerto, un binario)",
          "Empiezas aquí: `checks.d/foo.py` + `conf.d/foo.d/conf.yaml`",
        ],
      },
      {
        title: "Integración",
        points: [
          "Para **otras** orgs: tests, README, métricas documentadas",
          "Se publica en extras o Marketplace, no solo en tu Agent",
        ],
      },
    ],
    back: "### Custom Check\nUn `AgentCheck` en **tu** Agent: `checks.d/mi_check.py` + YAML. Sirve para un cron, un puerto interno, un script. Nadie más lo instala.\n\n### Integración publicable\nEl mismo check, pero con tests, manifiestos y docs para que **otras** cuentas lo usen.\n\nCamino: prototipo como custom check → si se reutiliza, extras/Marketplace.",
    sources: [LC.buildInt, LC.buildLab],
  },
  {
    id: "lc-custint-2",
    domain: "collection",
    front: "¿Qué pasa si publicas en integrations-extras o en Marketplace?",
    versus: [
      {
        title: "Extras",
        points: [
          "PR al repo **integrations-extras** (gratis, comunidad)",
          "Si Datadog **acepta** las métricas, dejan de contar como **custom** (billing)",
        ],
      },
      {
        title: "Marketplace",
        points: ["Partner **de pago**: listado comercial, no un PR comunitario"],
      },
    ],
    back: "- **integrations-extras**: abres un PR. Si entra, otras orgs lo instalan y esas métricas **salen del cupo custom**.\n- **Marketplace**: producto de un partner (precio, contrato). No es el mismo flujo que un extra community.",
    sources: [LC.buildInt],
  },
  {
    id: "lc-tag-1",
    domain: "collection",
    front: "¿Qué diferencia hay entre un tag simple y uno `key:value`?",
    versus: [
      {
        title: "Simple",
        points: ["`staging` — solo **incluye o excluye** esa palabra en la query"],
      },
      {
        title: "key:value",
        points: [
          "`env:staging` — filtras `{env:staging}` **y** agrupas `by {env}`",
          "Es el formato que pide UST y el examen",
        ],
      },
    ],
    back: "Cada datapoint lleva nombre, valor, timestamp y tags.\n\n- **Simple** `staging`: en `{staging}` filtras. **No** puedes `by {env}` porque no hay key.\n- **key:value** `env:staging`: `{env:staging}` y `by {env}` (una serie prod, una staging).\n\nUsa siempre key:value (`env:`, `service:`, `version:`).",
    sources: [LC.tagsIntro, DOC_TAGS],
  },
  {
    id: "c6",
    domain: "collection",
    front: "¿Cuáles son los reserved tags?",
    back: "Keys que **Datadog ya usa**. Si las reciclas con otro significado, rompes correlación.\n\n- `host` · une métricas, traces, procesos y logs de la misma máquina\n- `device` · disco/interfaz (`sda`, `eth0`) en system.disk/net\n- `source` · de dónde sale un log en pipelines\n- `team` · dueño; filtros de ownership\n\nPon `owner:payments` o `disk_role:data` si necesitas otra semántica, **no** reutilices `host`/`device`.",
    sources: [LC.tagsIntro, DOC_TAGS],
  },
  {
    id: "c6b",
    domain: "collection",
    front: "¿Qué es Unified Service Tagging?",
    back: "Tres tags **iguales** en métricas, traces y logs del mismo servicio:\n\n- `env` · prod/staging (filtra un dashboard entero)\n- `service` · nombre del microservicio (Software Catalog, APM)\n- `version` · git sha o semver (ver si el deploy nuevo rompió)\n\nCómo: Agent `DD_ENV`/`DD_SERVICE`/`DD_VERSION` o labels `com.datadoghq.tags.service`. En código: `ddtrace` lee esas env.\n\nAsí un log `service:api` abre la traza `service:api`.",
    sources: [LC.tagsIntro, DOC_TAGS],
  },
  {
    id: "lc-tag-3",
    domain: "collection",
    front: "¿Qué dimensiones de tags usas además de Unified Service Tagging?",
    back: "UST no basta para infra/negocio. Ejemplos de keys (siempre `key:value`):\n\n- **Native** (las pone el cloud): `region`, `az`, `instance-type` — filtra “solo eu-west-1”.\n- **Scope**: `env`, `datacenter` — recorta el blast radius.\n- **Function**: `service`, `role:web` — qué hace el host.\n- **Ownership**: `team`, `owner` — a quién pagina el monitor.\n- **Business**: `business_unit`, `cost_center` — coste y reporting.\n- **Customer**: `customer.name` — multi-tenant (ojo cardinalidad).",
    sources: [LC.tagsEx, LC.tagsIntro, DOC_TAGS],
  },
  {
    id: "lc-tag-3b",
    domain: "collection",
    front: "¿Para qué sirve el tag `monitor:true`?",
    back: "Algunas integraciones cloud tienen **scope** `monitor:true` (o equivalente) para **no** crawlear toda la flota.\n\nPones el tag solo en los hosts/recursos que quieres (p. ej. `monitor:true` en prod). El crawler **omite** el resto.\n\nNo es un monitor de alerta: es un **filtro de recolección**.",
    sources: [LC.tagsEx],
  },
  {
    id: "c7",
    domain: "collection",
    front: "¿Qué convención de tagging debes seguir?",
    back: "1. **Una key** para un concepto: todos `service`, nadie `app` / `app_name` / `application` (si no, no agrupas).\n2. **Baja cardinalidad**: tags de entorno, servicio, az. No `session_id` ni email.\n3. **Nada por request**: un tag nuevo en cada HTTP crea una timeseries por usuario.\n4. Documenta el diccionario (wiki o Software Catalog) para que otros no inventen keys.",
    sources: [GUIDE, DOC_TAGS, LC.tagsBp],
  },
  {
    id: "c7b",
    domain: "collection",
    front: "¿Dónde asignas tags y para qué se usan en la UI?",
    back: "**Dónde se pegan**:\n- Agent: `tags:` en YAML o `DD_TAGS` (vale para todo el host).\n- Integraciones: el crawler **hereda** tags del recurso (AWS Name, k8s labels) y los convierte en tags Datadog.\n- Código: `ddtrace` / DogStatsD `tags=['env:prod']` en cada métrica/traza.\n\n**Para qué**: Host Map (color por `env`), dashboards (`{service:api}`), logs, y **scope del monitor** (`avg:cpu{env:prod}` para no alertar staging).",
    sources: [DOC_TAGS, LC.tagsLab, DOC_HOSTMAP, GUIDE],
  },
  {
    id: "c11",
    domain: "collection",
    front: "¿Cómo filtras y correlacionas logs, métricas y eventos?",
    back: "Misma query mental en los tres productos: **tags iguales**.\n\n1. Unified Service Tagging: `env` + `service` + `version` en métrica, log y traza.\n2. En un dashboard o APM, filtras `{service:api,env:prod}` y el Log Explorer usa el mismo filtro.\n3. En logs, además indexas campos como **facets** (p. ej. `http.status_code`) para agrupados y sidebar. Un campo sin facet se busca, pero no se “clica” igual.\n\nSin tags compartidos, el botón “view related traces” no encuentra nada.",
    sources: [GUIDE, DOC_LOGS, DOC_TAGS],
  },
  {
    id: "t1",
    domain: "troubleshoot",
    front: "¿Qué compruebas con `datadog-agent status`?",
    back: "`status` es el **informe de salud** del Agent. No adivines: léelo en este orden.\n\n1. ¿El servicio vive? `sudo systemctl status datadog-agent` (active). Si no, `sudo systemctl start datadog-agent`.\n2. `sudo datadog-agent status`:\n   - **Forwarder**: API key valid y envíos OK\n   - **Checks**: el que te importa en `OK`, no `ERROR`\n   - **APM** / **DogStatsD**: Receiver running si usas traces o custom metrics\n   - **Hostname**: el que esperas\n3. Docker: `docker logs dd-agent` y `docker exec -it dd-agent agent status`.",
    sources: [GUIDE, DOC_TROUBLE],
  },
  {
    id: "t2",
    domain: "troubleshoot",
    front: "¿Para qué sirve `datadog-agent flare`?",
    back: "Paquete para **soporte Datadog** cuando `status` no basta.\n\n```\nsudo datadog-agent flare <CASE_ID>\n```\n\n1. Junta configs (redacta API keys, passwords, proxy, SNMP) + logs.\n2. Te pide confirmar en pantalla.\n3. Lo sube al case. Si usas APM, puede ir **tracer debug**.\n\nNo lo uses como log diario: es un zip puntual. CASE_ID lo saca el ticket de soporte.",
    sources: [DOC_TROUBLE, LC.agentTs],
  },
  {
    id: "t2b",
    domain: "troubleshoot",
    front: "¿Cómo envías un flare si no tienes CASE_ID?",
    back: "Sin número de case:\n\n```\nsudo datadog-agent flare\n```\n\nUsa el **email** de la org cuando lo pida. El zip queda local o se asocia después.\n\nPara cazar un bug: en `datadog.yaml` `log_level: DEBUG` (entre comillas), restart, reproduce, flare, **vuelve a INFO**. DEBUG sube volumen e indexación.",
    sources: [DOC_TROUBLE, LC.agentTs],
  },
  {
    id: "t3",
    domain: "troubleshoot",
    front: "¿Dónde están los logs del Agent?",
    back: "### Linux\n`/var/log/datadog/`\n- `agent.log` — Collector/Forwarder, checks, API key\n- `process-agent.log` — live processes\n- `trace-agent.log` — APM 8126\n\nLee: `sudo tail -f /var/log/datadog/agent.log` y busca ERROR, 403, connection.\n\n### Docker / K8s\nNo hay esos ficheros en el host: `docker logs dd-agent` o `kubectl logs ds/datadog-agent -c agent`.",
    sources: [GUIDE, DOC_TROUBLE, DOC_AGENT],
  },
  {
    id: "t3b",
    domain: "troubleshoot",
    front: "¿Cómo se configura `log_level` y qué valores hay?",
    back: "En `datadog.yaml` (el valor va **entre comillas**):\n\n```\nlog_level: \"INFO\"\n```\n\nEscala: OFF → CRITICAL → ERROR → WARN → **INFO** (defecto) → DEBUG → TRACE.\n\nCambia, `sudo systemctl restart datadog-agent`. DEBUG/TRACE llenan disco y, si indexas esos logs, **cuestan**. Para un incidente: DEBUG → reproduce → flare → INFO otra vez.",
    sources: [DOC_AGENT, LC.agentTs],
  },
  {
    id: "t4",
    domain: "troubleshoot",
    front: "¿Qué muestra `datadog-agent configcheck`?",
    back: "Enseña la config **ya resuelta** que el Agent está usando (no el example).\n\n1. `sudo datadog-agent configcheck`\n2. Busca el check (p. ej. `redisdb`)\n3. Mira si `%%host%%` / `%%port%%` se sustituyeron por IP y puerto reales\n4. Si ves el template crudo o un host vacío, las labels/annotations de Autodiscovery **no llegaron** al Agent\n5. Corrige labels en el contenedor de la **app**, no en el del Agent, y reinicia o espera el next AD",
    sources: [DOC_TROUBLE, DOC_AD],
  },
  {
    id: "t5",
    domain: "troubleshoot",
    front: "¿Qué revisas si el Agent corre pero no hay métricas en la UI?",
    back: "El proceso está up, pero Datadog no muestra puntos. Recorre esto:\n\n1. **Clave y sitio**: `api_key` / `DD_API_KEY` de **esta** org y `site` / `DD_SITE` (`datadoghq.eu` vs `.com`). Si el sitio está mal, los datos van a **otra región**.\n2. `sudo datadog-agent status` → **Forwarder**: API key valid. Si no, 403: clave mala o RC/org incorrecta.\n3. Firewall: salida **TCP 443** a los endpoints del sitio.\n4. `sudo datadog-agent hostname` único en Infrastructure List.\n5. Reloj: NTP; si el host va desfasado, Datadog tira o desplaza puntos.\n6. El check está en `conf.yaml` (no solo `.example`) y en status sale **OK**.\n7. Espera **1–2 min** de intake y recarga Infrastructure List.",
    sources: [GUIDE, DOC_TROUBLE, DOC_NETWORK, DOC_KEYS],
  },
  {
    id: "v1",
    domain: "viz",
    front: "¿Qué es el Host Map y para qué sirve?",
    back: "Infrastructure > **Host Map**: cada hexágono es un host.\n\n- **Color** y **tamaño** los mapeas a una métrica (CPU, load) — los rojos grandes son el hotspot.\n- Agrupa (`Group hosts by`) y filtra por tags (`env:prod`) para no ver staging.\n\nSirve para “¿quién está mal **ahora**?”, no para un gráfico de 7 días (eso es timeseries).",
    sources: [GUIDE, DOC_HOSTMAP],
  },
  {
    id: "v2",
    domain: "viz",
    front: "¿Dónde compruebas que un host reporta y qué ves en cada fila?",
    back: "Infrastructure > **Infrastructure List**: tabla de hosts que **están enviando**.\n\nCada fila: nombre (`host`), tags, CPU/load, **última actividad** (si lleva horas, el Agent murió).\n\nÚsala para confirmar “¿llegó el install?”. Si no está la fila, el Forwarder o el `DD_SITE` fallan — no mires dashboards todavía.",
    sources: [{ ...GUIDE, note: "Study resources: Infrastructure List" }, DOC_INFRA],
  },
  {
    id: "v3",
    domain: "viz",
    front: "¿Qué widgets típicos tiene un dashboard?",
    back: "Dashboards > New Dashboard, añades widgets según la pregunta:\n\n- **Timeseries** · CPU/latencia en el tiempo\n- **Query value** · un número grande (error rate ahora)\n- **Top list** · ranking de hosts/servicios\n- **Heatmap** · densidad (cuántos hosts en cada bucket de CPU)\n- **Host map** · hexágonos, hotspot de flota\n- **Logs / event stream** · líneas vivas junto a los gráficos\n\nEl widget sin query/tags no enseña nada: cada uno lleva una query `avg:...{*}`.",
    sources: [GUIDE, DOC_DASH, LC.dashIntro],
  },
  {
    id: "v3b",
    domain: "viz",
    front: "¿Para qué sirven las template variables de un dashboard?",
    back: "Un dropdown en cabecera (`$env`, `$service`) que **inyecta** el tag en **todos** los widgets.\n\n1. Dashboard > **+ Add Variable** → tag `env`.\n2. En las queries usas `{env:$env.value}` (o el template que genere la UI).\n3. Cambias el dropdown a `prod` y todo el board se recorta.\n\nAsí no clonas “dashboard staging” y “dashboard prod”.",
    sources: [DOC_DASH, LC.dashLab],
  },
  {
    id: "v5",
    domain: "viz",
    front: "¿Qué hace `avg:system.cpu.user{env:prod} by {host}`?",
    back: "`avg:system.cpu.user{env:prod} by {host}`\n- `avg:` · **promedia**\n- `{env:prod}` · **filtra**\n- `by {host}` · **agrupa** (una serie por host)",
    sources: [{ ...GUIDE, note: "Query to the graph" }, DOC_QUERY, DOC_METRICS],
  },
  {
    id: "v6",
    domain: "viz",
    front: "¿Cuáles son los estados de un monitor?",
    back: "El monitor es una máquina de estados. En su Status page ves transiciones:\n\n- **OK** — query por debajo del umbral\n- **Warn** — cruzó el warning (si lo definiste)\n- **Alert** — cruzó el critical → notifica\n- **No Data** — dejó de llegar la métrica (Agent caído o query vacía)\n\nDesde ahí **mute** (silencio puntual) o **resolve**. Mute ≠ downtime programado.",
    sources: [GUIDE, DOC_MONITORS],
  },
  {
    id: "v6b",
    domain: "viz",
    front: "¿Qué hace un downtime?",
    back: "Monitors > **Downtimes** (o desde el monitor): eliges horario/tags (`env:prod`) y las notificaciones **no salen** (deploy, mantenimiento).\n\nEl monitor **sigue evaluando** y cambia de estado; solo calla Slack/PagerDuty.\n**No** borra el monitor. Cuando acaba el downtime, si sigue Alert, vuelve a avisar.",
    sources: [GUIDE, DOC_MONITORS],
  },
  {
    id: "v7",
    domain: "viz",
    front: "¿Qué es RED en monitors de servicio?",
    back: "**RED** para un **servicio** (no para un disco):\n\n- **Rate** · tráfico (requests/s)\n- **Errors** · % o count de fallos\n- **Duration** · latencia (p95/p99)\n\nEn Datadog: monitor **APM** (traces), o métricas `trace.<svc>.request.*`. Otros tipos (Logs, RUM, Synthetics, DBM, CNM, Anomaly) cubren otras preguntas; para un microservicio empiezas por RED.",
    sources: [LC.monIntro, LC.monTypes, GUIDE],
  },
  {
    id: "v7b",
    domain: "viz",
    front: "¿Qué tipos de monitor usas primero para infraestructura?",
    back: "Primero la máquina, luego la app:\n\n- **Host**: ¿el Agent vive? CPU/mem/disco del servidor (`system.cpu.user`, `system.disk.in_use`).\n- **Integration**: un check (Nginx, Postgres) CRITICAL.\n- **Network**: conectividad / CNM.\n- **Service Check**: estado 0/2 de un check concreto.\n\nHay +20 tipos (APM, Logs, Composite…). No empieces por Anomaly si aún no tienes `datadog.agent.up` en OK.",
    sources: [LC.monTypes, GUIDE, DOC_MONITORS],
  },
  {
    id: "v7c",
    domain: "viz",
    front: "¿Cómo se crea un monitor y qué es Monitor Quality?",
    back: "1. Monitors > **New Monitor**\n2. Elige tipo (Metric, Host, Logs…)\n3. Define **query** y umbral, p. ej. `avg(last_5m):avg:system.cpu.user{*} > 80`\n4. Destinatarios `@slack-ops` y mensaje\n\nAlternativas: **template** OOTB o **Metric Explorer** → Monitor.\n\n**Monitor Quality** puntúa query, downtime eterno, no-data o mensaje vacío.",
    sources: [LC.monLab, DOC_MONITORS],
  },
  {
    id: "v8",
    domain: "viz",
    front: "¿Qué partes tiene el mensaje de un monitor?",
    back: "Tres campos, si no el aviso no se entiende:\n\n- **Name** · asunto del mail/Slack (`[prod] CPU api > 80%`).\n- **Message** · Markdown: qué pasó, enlace al dashboard, **runbook**, a quién escalar.\n- **Recipients** · `@email`, `@slack-ops`, `@pagerduty`, webhooks… el `@` tiene que existir en Integrations.\n\nIncluye valor actual vs umbral (`{{value}}`) y `{{host.name}}`. Un monitor sin recipient **no avisa a nadie**.",
    sources: [GUIDE, DOC_MONITORS, LC.alertIntro],
  },
  {
    id: "v8b",
    domain: "viz",
    front: "¿Qué variables puedes usar en una notificación de monitor?",
    back: "En el Message, Datadog sustituye variables al disparar:\n\n- **Condicionales**: `{{#is_alert}}página ahora{{/is_alert}}` `{{#is_recovery}}ya OK{{/is_recovery}}` — distinto texto al caer y al recuperar.\n- **Atributos**: `{{host.name}}`, `{{value}}`, tags `{{env.name}}`.\n- **Umbral**: el límite que configuraste.\n- **Handles** `@slack-{{env.name}}` si tienes canales por env.\n\nLa lista exacta está en la docs del **tipo** de monitor (Metric ≠ Logs).",
    sources: [LC.alertVars, LC.alertLab, DOC_MONITORS],
  },
  {
    id: "pe-1",
    domain: "practice",
    front: "Además de métricas, ¿qué dos tipos de dato añade observability para investigar un fallo que no tenías monitorizado?",
    back: "**Logs** (texto de la app) y **traces** (recorrido del request con APM).\n\nMonitoring se queda en dashboards y umbrales de lo que ya sabías preguntar.",
    sources: [PRACTICE_EXAM, LC.obs, GUIDE],
  },
  {
    id: "pe-2",
    domain: "practice",
    front: "¿Cuáles son los tres pilares de observabilidad que Datadog correlaciona con tags?",
    back: "**Métricas**, **traces (APM)** y **logs**.\n\nLos mismos `env`, `service` y `version` en los tres permiten saltar de un gráfico a la traza y al log del mismo servicio.",
    sources: [PRACTICE_EXAM, LC.obs, GUIDE],
  },
  {
    id: "pe-3",
    domain: "practice",
    front: "Sin tocar `conf.d`, ¿qué cuatro clases de métrica de hardware reporta ya el Agent?",
    back: "**CPU**, **memoria**, **disco** y **red** (bytes/paquetes).\n\nNginx/Postgres no salen hasta copiar `conf.yaml`.",
    sources: [PRACTICE_EXAM, GUIDE],
  },
  {
    id: "pe-4",
    domain: "practice",
    front: "¿Qué clave debe llevar el Agent para que Datadog acepte la ingesta de métricas?",
    back: "La **API key** de la organización (`api_key` en `datadog.yaml` o `DD_API_KEY`).\n\nNo uses la Application key en el Agent.",
    sources: [PRACTICE_EXAM, DOC_KEYS, GUIDE],
  },
  {
    id: "pe-5",
    domain: "practice",
    front: "Para crear un monitor con `curl` a la API, ¿qué clave extra hace falta además de la API key?",
    back: "Una **Application key** del usuario (sus permisos RBAC).\n\nVa en el header `DD-APPLICATION-KEY` junto a `DD-API-KEY`.",
    sources: [PRACTICE_EXAM, DOC_KEYS],
  },
  {
    id: "pe-6",
    domain: "practice",
    front: "¿Quién abre la conexión entre el Agent y el sitio Datadog, y por qué puerto de salida?",
    back: "El **Agent inicia** la salida. Datadog **no** entra a tu red.\n\nSalida **443** hacia el `DD_SITE` (p. ej. `datadoghq.eu`).",
    sources: [PRACTICE_EXAM, DOC_NETWORK, GUIDE],
  },
  {
    id: "pe-7",
    domain: "practice",
    front: "¿En qué puerto local recibe el Agent las custom metrics de DogStatsD?",
    back: "**UDP 8125** (por defecto, localhost).\n\nLa app no espera ACK; el Agent hace flush ~10 s y el Forwarder sube los puntos.",
    sources: [PRACTICE_EXAM, DOC_DOGSTATSD, GUIDE],
  },
  {
    id: "pe-8",
    domain: "practice",
    front: "¿En qué puerto local entrega `ddtrace` las traces al Agent?",
    back: "**TCP 8126** (`DD_APM_RECEIVER_PORT`).\n\nLa librería habla con el Agent, no directo con SaaS. `DD_AGENT_HOST` debe apuntar a esa máquina/pod.",
    sources: [PRACTICE_EXAM, DOC_DDTRACE, GUIDE],
  },
  {
    id: "pe-9",
    domain: "practice",
    front: "Si dos Agents mandan el mismo hostname, ¿qué pasa en Datadog?",
    back: "Las métricas se **mezclan** en un solo `host` (CPU de A y B en el mismo hexágono).\n\nFija un nombre único: `hostname:` en YAML o `DD_HOSTNAME`, luego `datadog-agent hostname`.",
    sources: [PRACTICE_EXAM, DOC_AGENT, GUIDE],
  },
  {
    id: "pe-10",
    domain: "practice",
    front: "En Linux, ¿qué fichero principal configura el proceso del Agent (`api_key`, `site`, `hostname`)?",
    back: "`/etc/datadog-agent/datadog.yaml`\n\nTras editarlo: `sudo systemctl restart datadog-agent`.",
    sources: [PRACTICE_EXAM, DOC_AGENT, GUIDE],
  },
  {
    id: "pe-11",
    domain: "practice",
    front: "¿Dónde se activa un check como Nginx, si no es en `datadog.yaml`?",
    back: "`/etc/datadog-agent/conf.d/nginx.d/`\n\nCopias `conf.yaml.example` → `conf.yaml`, pones host/puerto y reinicias el Agent.",
    sources: [PRACTICE_EXAM, DOC_INTEGRATIONS, GUIDE],
  },
  {
    id: "pe-12",
    domain: "practice",
    front: "Si `datadog.yaml` dice un `site` y la variable `DD_SITE` dice otro, ¿cuál gana?",
    back: "Gana **`DD_SITE`** (las env `DD_*` pisan el YAML).\n\nRemote Configuration, si fija esa opción, pisa a las dos.",
    sources: [PRACTICE_EXAM, DOC_AGENT, GUIDE],
  },
  {
    id: "pe-13",
    domain: "practice",
    front: "¿Qué controla `DD_SITE` / `site:` y qué ocurre si no coincide con tu cuenta?",
    back: "La **región** de la org (`datadoghq.com`, `datadoghq.eu`, …).\n\nSi está mal, el Forwarder entrega a **otro** Datadog y tu UI no muestra métricas.",
    sources: [PRACTICE_EXAM, DOC_AGENT],
  },
  {
    id: "pe-14",
    domain: "practice",
    front: "¿Qué formato de tag permite filtrar y además agrupar `by {env}`?",
    back: "**key:value**, p. ej. `env:prod`.\n\nUn tag suelto `prod` solo filtra; no puedes agrupar por la key `env`.",
    sources: [PRACTICE_EXAM, DOC_TAGS, GUIDE],
  },
  {
    id: "pe-15",
    domain: "practice",
    front: "¿Qué tres tags forman Unified Service Tagging?",
    back: "`env` + `service` + `version`\n\nLos mismos en métricas, traces y logs del microservicio (`DD_ENV`, `DD_SERVICE`, `DD_VERSION` o labels).",
    sources: [PRACTICE_EXAM, DOC_TAGS],
  },
  {
    id: "pe-16",
    domain: "practice",
    front: "En contenedores que nacen y mueren, ¿qué mecanismo aplica el check sin copiar `conf.yaml` a mano?",
    back: "**Autodiscovery** (activo por defecto).\n\nEl Agent ve el socket/kubelet y aplica templates según **labels** (Docker) o **annotations** (K8s) en el contenedor de la **app**. Comprueba `datadog-agent configcheck`.",
    sources: [PRACTICE_EXAM, DOC_AD, GUIDE],
  },
  {
    id: "pe-17",
    domain: "practice",
    front: "En el Host Map, ¿qué representa cada hexágono?",
    back: "Un **host** que reporta.\n\nColor y tamaño se mapean a métricas (p. ej. CPU); agrupas y filtras por tags para ver hotspots.",
    sources: [PRACTICE_EXAM, DOC_HOSTMAP, GUIDE],
  },
  {
    id: "pe-18",
    domain: "practice",
    front: "Durante un mantenimiento, ¿qué hace un downtime sobre un monitor?",
    back: "**Silencia notificaciones** (Slack, mail, PagerDuty).\n\nEl monitor sigue evaluando. **No** se borra. Al terminar el downtime, si sigue en Alert, vuelve a avisar.",
    sources: [PRACTICE_EXAM, DOC_MONITORS, GUIDE],
  },
  {
    id: "pe-19",
    domain: "practice",
    front: "¿Qué comando del Agent resume Forwarder, checks, APM y hostname?",
    back: "`sudo datadog-agent status`\n\nAntes, el servicio del SO: `sudo systemctl status datadog-agent`. En Docker: `docker exec -it dd-agent agent status`.",
    sources: [PRACTICE_EXAM, DOC_TROUBLE, GUIDE],
  },
  {
    id: "pe-20",
    domain: "practice",
    front: "¿Qué comando empaqueta configs y logs (redactados) para un ticket de soporte?",
    back: "`sudo datadog-agent flare <CASE_ID>`\n\nSin case, `flare` y el email de la cuenta. No es un log diario: es un zip puntual.",
    sources: [PRACTICE_EXAM, DOC_TROUBLE],
  },
  {
    id: "pe-21",
    domain: "practice",
    front: "Dentro del Agent, ¿qué proceso hace el POST de métricas/logs/traces a Datadog?",
    back: "El **Forwarder**.\n\nSi el Collector corre pero el Forwarder falla (API key, 443, `DD_SITE`), la UI queda vacía. Míralo en la sección Forwarder de `status`.",
    sources: [PRACTICE_EXAM, DOC_AGENT, GUIDE],
  },
  {
    id: "pe-22",
    domain: "practice",
    front: "Para métricas de RDS o CloudWatch sin Agent en cada recurso, ¿cómo recolecta Datadog?",
    back: "**Crawler / integración**: un rol IAM (`sts:AssumeRole`); Datadog hace **pull** a la API de AWS.\n\nNo instalas Agent en el RDS. En Datadog: Integrations > Amazon Web Services + ARN e ID externo.",
    sources: [PRACTICE_EXAM, DOC_INTEGRATIONS, GUIDE],
  },
  {
    id: "pe-23",
    domain: "practice",
    front: "En DogStatsD, ¿qué tipo de métrica guarda el último valor del intervalo de flush?",
    back: "**Gauge** (cola, % personalizado, tamaño de un buffer).\n\nCount/rate cuentan eventos; histogram/distribution describen la forma de muchos valores.",
    sources: [PRACTICE_EXAM, DOC_METRICS, DOC_DOGSTATSD],
  },
  {
    id: "pe-24",
    domain: "practice",
    front: "Si un monitor pasa a No Data, ¿qué significa?",
    back: "La query **dejó de recibir puntos** (Agent caído, check off, filtro de tags vacío).\n\nNo es lo mismo que Alert (umbral cruzado) ni que un downtime (solo calla avisos).",
    sources: [PRACTICE_EXAM, DOC_MONITORS, GUIDE],
  },
  {
    id: "pe-25",
    domain: "practice",
    front: "¿Qué hay que hacer con `conf.yaml.example` para que el Agent ejecute ese check?",
    back: "Copiarlo a **`conf.yaml`** en la misma carpeta `.d/`, rellenar `instances` y **reiniciar** el Agent.\n\nUn YAML inválido: el check se ignora o el Agent no arranca (`datadog-agent status`).",
    sources: [PRACTICE_EXAM, DOC_AGENT, GUIDE],
  },
];
