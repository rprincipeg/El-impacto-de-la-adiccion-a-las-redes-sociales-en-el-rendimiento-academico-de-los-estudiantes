type AnalysisResult = {
  status: "stable" | "warning" | "critical";
  title: string;
  description: string;
  recommendations: string[];
};

export default function Analysis() {
  const [addictionScore, setAddictionScore] = useState([20]);
  const [sleepHours, setSleepHours] = useState([7]);
  const [socialHours, setSocialHours] = useState([3.5]);
  const [conflicts, setConflicts] = useState([4]);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const calculateImpact = () => {
    // Logic based on the inputs to determine impact
    const score = addictionScore[0];
    const sleep = sleepHours[0];
    const social = socialHours[0];
    const conflictCount = conflicts[0];

    // Simple heuristic for the mockup
    let riskPoints = 0;
    if (score > 50) riskPoints += 2;
    if (score > 75) riskPoints += 1;
    if (sleep < 6) riskPoints += 2;
    if (sleep < 4) riskPoints += 2;
    if (social > 4) riskPoints += 2;
    if (social > 7) riskPoints += 2;
    if (conflictCount > 3) riskPoints += 1;
    if (conflictCount > 6) riskPoints += 2;

    let analysis: AnalysisResult;

    if (riskPoints >= 6) {
      analysis = {
        status: "critical",
        title: "Riesgo Alto de Impacto Académico",
        description: "Tus hábitos digitales están afectando significativamente tu descanso y capacidad de concentración.",
        recommendations: [
          "Busca ayuda profesional para gestionar el uso de redes.",
          "Establece un horario estricto de desconexión antes de dormir.",
          "Prioriza el sueño: intenta llegar a 7-8 horas diarias.",
        ],
      };
    } else if (riskPoints >= 3) {
      analysis = {
        status: "warning",
        title: "Riesgo Moderado",
        description: "Hay indicadores de que el uso de tecnología podría empezar a afectar tus estudios.",
        recommendations: [
          "Intenta reducir el uso de redes sociales en 30 minutos cada día.",
          "Evita pantallas 1 hora antes de dormir.",
          "Monitorea tus niveles de estrés relacionados con interacciones online.",
        ],
      };
    } else {
      analysis = {
        status: "stable",
        title: "Proyección de Rendimiento Estable",
        description: "Tus hábitos digitales y de descanso parecen estar equilibrados, favoreciendo un buen desempeño.",
        recommendations: [
          "Reduce el uso de redes sociales a menos de 3 horas diarias para recuperar tiempo de estudio.",
          "Reduce la exposición a interacciones conflictivas online para disminuir la carga mental.",
          "¡Sigue así! Mantener este equilibrio es clave para el éxito a largo plazo.",
        ],
      };
    }

    setResult(analysis);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans flex justify-center items-start pt-12">
      <div className="max-w-2xl w-full space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-none shadow-lg overflow-hidden">
            <CardHeader className="pb-4 bg-white">
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                Análisis de Bienestar Digital
              </CardTitle>
              <CardDescription className="text-slate-500 text-base">
                Ingresa tus datos para evaluar el impacto de la tecnología y el descanso en tu rendimiento.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              {/* Addiction Score */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Puntaje de Adicción a Redes (0-100)
                    <span className="block text-xs font-normal text-slate-500 mt-1">
                      Autoevaluación de dependencia a dispositivos y redes sociales.
                    </span>
                  </label>
                  <span className="text-xl font-bold text-primary font-mono">{addictionScore[0]}</span>
                </div>
                <Slider
                  value={addictionScore}
                  onValueChange={setAddictionScore}
                  max={100}
                  step
lassName="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Horas de Sueño (Promedio Diario)
                  </label>
                  <span className="text-xl font-bold text-slate-700 font-mono">{sleepHours[0]}h</span>
                </div>
                <Slider
                  value={sleepHours}
                  onValueChange={setSleepHours}
                  max={12}
                  min={2}
                  step={0.5}
                  className="py-2"
                  data-testid="slider-sleep"
                />
              </div>

              {/* Social Media Hours */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Horas de Uso de Redes Sociales (Diario)
                    <span className="block text-xs font-normal text-slate-500 mt-1">
                      Tiempo promedio al día navegando en redes sociales.
                    </span>
                  </label>
                  <span className="text-xl font-bold text-slate-700 font-mono">{socialHours[0]}h</span>
                </div>
                <Slider
                  value={socialHours}
                  onValueChange={setSocialHours}
                  max={16}
                  step={0.5}
                  className="py-2"
                  data-testid="slider-social"
                />
              </div>

              {/* Conflicts */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-slate-700">
                    Conflictos en Redes Sociales (Semanal)
                    <span className="block text-xs font-normal text-slate-500 mt-1">
                      Cantidad de discusiones, malentendidos o problemas originados online.
                    </span>
                  </label>
                  <span className="text-xl font-bold text-slate-700 font-mono">{conflicts[0]}</span>
                </div>
                <Slider
                  value={conflicts}
                  onValueChange={setConflicts}
                  max={20}
                  step={1}
                  className="py-2"
Calcular Impacto en Rendimiento
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className={`border-l-4 shadow-lg overflow-hidden ${
                result.status === "stable" ? "border-l-emerald-500" :
                result.status === "warning" ? "border-l-amber-500" : "border-l-rose-500"
              }`}>
                <CardContent className="pt-6 pb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-full shrink-0 ${
                      result.status === "stable" ? "bg-emerald-100 text-emerald-600" :
                      result.status === "warning" ? "bg-amber-100 text-amber-600" : "bg-rose-100 text-rose-600"
                    }`}>
                      {result.status === "stable" && <CheckCircle2 className="w-8 h-8" />}
                      {result.status === "warning" && <AlertTriangle className="w-8 h-8" />}
                      {result.status === "critical" && <XCircle className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{result.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{result.description}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-5">
                    <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide opacity-80">Recomendaciones basadas en tus datos:</h4>
                    <ul className="space-y-3">
                      {result.recommendations.map((rec, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700">
                          <span className="block w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-base">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
