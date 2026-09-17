export const examInfo = {
  name: "Datadog Fundamentals",
  source:
    "https://www.datadoghq.com/certification/overview/ y exam guide oficial (PDF, agosto 2026)",
  examGuidePdf:
    "https://www.datadoghq.com/pdf/datadog-fundamentals-exam-guide-aug-2026.pdf",
  learningPath:
    "https://learn.datadoghq.com/bundles/datadog-fundamentals-certification-learning-path",
  practiceExam:
    "https://learn.datadoghq.com/courses/datadog-fundamentals-practice-exam",
  register: "https://www.webassessor.com/DATADOG",
  docsHub: "https://learn.datadoghq.com/pages/certification",
  facts: [
    {
      label: "Preguntas",
      value:
        "90 en total: 75 puntúan + 15 pretest (no identificadas, no puntúan)",
    },
    { label: "Tipo", value: "Solo opción múltiple (una respuesta correcta)" },
    { label: "Tiempo", value: "2 horas de asiento máximo" },
    { label: "Precio", value: "100 USD por intento (los reintentos se pagan)" },
    {
      label: "Idiomas",
      value:
        "Inglés, japonés, coreano, portugués brasileño, francés y español",
    },
    { label: "Vigencia", value: "3 años desde la fecha de certificación" },
    {
      label: "Prerrequisitos",
      value:
        "Ninguno formal. Recomiendan meses de uso real y principios de observabilidad",
    },
    {
      label: "Proveedor",
      value: "Kryterion Webassessor (proctoring online u onsite)",
    },
    {
      label: "Reintentos",
      value:
        "Máximo 3 intentos en 180 días; 24–48 h entre intentos; luego espera de 180 días",
    },
    {
      label: "Práctica oficial",
      value: "Quiz gratuito de 25 preguntas en Learning Center",
    },
    {
      label: "Learning path",
      value: "16 cursos oficiales (completarlos no garantiza aprobar)",
    },
    {
      label: "Fuera de alcance",
      value: "Programación, arquitectura de sistemas y testing",
    },
    {
      label: "Nota de corte",
      value: "No se publica. Las preguntas en blanco cuentan como incorrectas",
    },
    {
      label: "Resultado",
      value: "Inmediato por email de Kryterion; badge Credly si apruebas",
    },
  ],
  domains: [
    {
      id: "essential",
      title: "Essential Concepts",
      topics: [
        "Config File Modification",
        "Hardware Concepts",
        "Metadata",
        "Networking",
        "Datadog Observability",
      ],
    },
    {
      id: "infra",
      title: "Infrastructure Development",
      topics: [
        "Agent Installation",
        "API Key",
        "Application Key",
        "Running the Agent",
        "Agent Hostname",
      ],
    },
    {
      id: "network",
      title: "Networking & Agent Configuration",
      topics: ["Datadog Ports", "Datadog IP Addresses", "Auto-discovery"],
    },
    {
      id: "collection",
      title: "Data Collection",
      topics: [
        "DogStatsD",
        "Crawlers",
        "Agent Integrations",
        "API Endpoints",
        "Tagging Best Practices",
        "Metrics & Timeseries",
      ],
    },
    {
      id: "troubleshoot",
      title: "Troubleshooting Datadog",
      topics: ["Agent Commands", "Agent Logs", "Agent Config Files"],
    },
    {
      id: "viz",
      title: "Data Visualization & Utilization",
      topics: [
        "Host Map",
        "Dashboards",
        "Using Metrics",
        "Using Tags",
        "Monitors and Alerts",
      ],
    },
  ],
  learningCourses: [
    "Introduction to Observability",
    "Datadog Quick Start",
    "Tagging Best Practices",
    "The Agent on a Host",
    "The Agent on Docker",
    "Getting Started with Integrations",
    "Getting Started with Metrics",
    "Getting Started with Infrastructure and Cloud Network Monitoring",
    "Getting Started with Monitors",
    "Customize Alert Monitor Notifications",
    "Introduction to Dashboards",
    "Creating Custom Metrics with DogStatsD",
    "Create an Agent Integration",
    "Datadog API: Automation and Infrastructure as Code",
    "Monitoring a Kubernetes Cluster: Install the Agent",
    "Introduction to Monitoring AWS",
  ],
  officialDocs: [
    "Getting Started",
    "Datadog Agent",
    "Metrics",
    "Infrastructure List",
    "API and Application Keys",
    "Integrations",
    "Docker Daemon / Docker Agent",
    "Query to the graph",
    "Metrics API",
    "Monitor types",
    "DogStatsD",
    "ddtrace",
  ],
} as const;
