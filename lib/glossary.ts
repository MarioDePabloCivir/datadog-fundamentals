export const GLOSSARY: [string, string][] = [
  ["Unified Service Tagging", "etiquetas env + service + version"],
  ["Observability Pipelines", "tuberías para transformar datos"],
  ["Application Performance Monitoring", "rendimiento de la app con trazas"],
  ["Cloud Network Monitoring", "tráfico de red entre servicios"],
  ["Real User Monitoring", "experiencia del usuario real"],
  ["Database Monitoring", "monitorización de bases de datos"],
  ["Error Tracking", "seguimiento de errores"],
  ["Service Check", "comprobación de estado de un servicio"],
  ["Custom Check", "check hecho por ti"],
  ["Metric Streams", "flujo de métricas de CloudWatch"],
  ["Data Firehose", "tubería de entrega de AWS"],
  ["Remote Configuration", "config remota desde Datadog"],
  ["Autodiscovery", "detecta servicios en contenedores solo"],
  ["DogStatsD", "cliente de métricas custom hacia el Agent"],
  ["Cluster Agent", "Agent central del clúster Kubernetes"],
  ["Node Agent", "Agent en cada nodo Kubernetes"],
  ["DaemonSet", "un pod por cada nodo de Kubernetes"],
  ["Software Catalog", "catálogo de servicios"],
  ["Infrastructure List", "lista de hosts que reportan"],
  ["Host Map", "mapa visual de hosts"],
  ["Metric Explorer", "explorador de métricas"],
  ["Monitor Quality", "calidad del monitor"],
  ["Event Management", "gestión de eventos"],
  ["Check Summary", "resumen de service checks"],
  ["Application key", "clave de la API con permisos de usuario"],
  ["API key", "clave de ingesta de la organización"],
  ["CloudWatch", "métricas nativas de AWS"],
  ["CloudFormation", "infraestructura como código de AWS"],
  ["Forwarder", "componente que envía datos a Datadog"],
  ["Collector", "componente que ejecuta checks"],
  ["Process Agent", "procesos del sistema"],
  ["sidecar", "contenedor auxiliar junto a la app"],
  ["crawler", "Datadog consulta la API del cloud"],
  ["downtime", "silencio de alertas en mantenimiento"],
  ["facets", "campos indexados para filtrar logs"],
  ["intake", "recepción de datos en Datadog"],
  ["flush", "envío periódico del búfer"],
  ["flare", "paquete de diagnóstico para soporte"],
  ["gauge", "último valor medido"],
  ["histogram", "distribución en un host"],
  ["distribution", "distribución entre muchos hosts"],
  ["count", "número de eventos"],
  ["rate", "eventos por segundo"],
  ["traces", "recorrido de una petición"],
  ["trace", "recorrido de una petición"],
  ["logs", "registros de texto"],
  ["log", "registro de texto"],
  ["tags", "etiquetas"],
  ["tag", "etiqueta"],
  ["host", "máquina"],
  ["hosts", "máquinas"],
  ["checks", "comprobaciones del Agent"],
  ["check", "comprobación del Agent"],
  ["monitors", "alertas"],
  ["monitor", "alerta"],
  ["dashboards", "tableros"],
  ["dashboard", "tablero"],
  ["notebooks", "informes colaborativos"],
  ["pull", "Datadog pide los datos"],
  ["push", "tú envías los datos"],
  ["Agent", "agente que recolecta datos"],
  ["Observability", "investigar lo no previsto"],
  ["Monitoring", "alertas y dashboards de lo conocido"],
  ["Synthetics", "pruebas sintéticas de disponibilidad"],
  ["Anomaly", "detección de anomalías"],
  ["Marketplace", "tienda de partners"],
  ["Helm", "instalador de charts en Kubernetes"],
  ["Operator", "instalador recomendado en Kubernetes"],
  ["Terraform", "infraestructura como código"],
  ["Postman", "cliente gráfico de APIs"],
  ["Dogshell", "CLI de la API de Datadog"],
  ["ddtrace", "librería APM en el código"],
  ["APM", "Application Performance Monitoring: trazas"],
  ["UST", "Unified Service Tagging: env, service, version"],
  ["CNM", "Cloud Network Monitoring: tráfico de red"],
  ["RED", "Rate, Errors, Duration: tráfico, errores, duración"],
  ["IAM", "Identity and Access Management: permisos de AWS"],
  ["RBAC", "control de acceso por roles"],
  ["RUM", "Real User Monitoring: usuario real"],
  ["DBM", "Database Monitoring: bases de datos"],
  ["SLO", "objetivo de nivel de servicio"],
  ["NTP", "sincronización de reloj"],
  ["OOTB", "listo de fábrica, sin configurar"],
  ["ARN", "identificador de un recurso AWS"],
  ["ECS", "contenedores en AWS"],
  ["EKS", "Kubernetes en AWS"],
  ["AKS", "Kubernetes en Azure"],
  ["GKE", "Kubernetes en Google Cloud"],
  ["EC2", "máquinas virtuales de AWS"],
  ["RDS", "bases de datos de AWS"],
  ["GCP", "Google Cloud"],
  ["DNS", "resolución de nombres"],
  ["AZ", "zona de disponibilidad"],
  ["CPU", "procesador"],
  ["STS", "AssumeRole: Datadog asume un rol AWS"],
  ["CLI", "línea de comandos"],
  ["IaC", "infraestructura como código"],
  ["PR", "pull request"],
  ["GA", "disponible de forma general"],
  ["JSON", "formato de datos"],
  ["YAML", "formato de configuración"],
  ["K8s", "Kubernetes"],
  ["API", "interfaz de programación"],
  ["UI", "interfaz de usuario"],
];

export function glossSegments(text: string): { value: string; gloss?: string }[] {
  const terms = GLOSSARY.slice().sort((left, right) => right[0].length - left[0].length);
  const parts: { value: string; gloss?: string }[] = [];
  let index = 0;

  while (index < text.length) {
    let hit: { length: number; value: string; gloss: string } | null = null;
    for (const [term, gloss] of terms) {
      const end = index + term.length;
      if (end > text.length) continue;
      if (text.slice(index, end).toLowerCase() !== term.toLowerCase()) continue;
      const before = index === 0 || !isWordChar(text[index - 1]!);
      const after = end === text.length || !isWordChar(text[end]!);
      if (!before || !after) continue;
      hit = { length: term.length, value: text.slice(index, end), gloss };
      break;
    }
    if (hit) {
      parts.push({ value: hit.value, gloss: hit.gloss });
      index += hit.length;
      continue;
    }
    const last = parts.at(-1);
    if (last && !last.gloss) last.value += text[index];
    else parts.push({ value: text[index]! });
    index += 1;
  }

  return parts;
}

function isWordChar(char: string) {
  return /[A-Za-z0-9_]/.test(char);
}
