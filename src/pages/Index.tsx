import { useState } from "react";
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Shield,
  Phone,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";
import emailjs from "@emailjs/browser";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-2xl font-semibold text-primary-foreground tracking-wide">
          GEM
        </span>
        <span className="font-body text-xs font-light text-stone_brand uppercase tracking-[0.25em]">
          Capital
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button
          onClick={() => scrollTo("tesis")}
          className="font-body text-sm text-stone_brand hover:text-primary-foreground transition-colors"
        >
          Tesis
        </button>
        <button
          onClick={() => scrollTo("empresas")}
          className="font-body text-sm text-stone_brand hover:text-primary-foreground transition-colors"
        >
          Empresas
        </button>
        <button
          onClick={() => scrollTo("inversores")}
          className="font-body text-sm text-stone_brand hover:text-primary-foreground transition-colors"
        >
          Inversores
        </button>
        <button
          onClick={() => scrollTo("contacto")}
          className="font-body text-sm font-medium text-gold hover:text-primary-foreground transition-colors"
        >
          Contacto
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
    </div>
    <div className="relative container mx-auto px-6 py-32">
      <div className="max-w-3xl">
        <p className="label-caps mb-6 animate-fade-in-up">
          Fondo perpetuo de adquisición de PYMES
        </p>
        <h1
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-medium text-primary-foreground leading-[1.1] mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          Adquirimos grandes empresas y las hacemos crecer.
        </h1>
        <p
          className="font-body text-xl text-stone_brand font-light leading-relaxed max-w-xl mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Invertimos con visión de permanencia. No compramos para vender. Compramos
          para seguir construyendo.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => scrollTo("empresas")}
            className="inline-flex items-center gap-2 bg-forest text-gem_white font-body font-medium px-8 py-4 hover:bg-forest/90 transition-colors"
          >
            Quiero vender mi empresa <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo("inversores")}
            className="inline-flex items-center gap-2 border border-stone_brand/30 text-primary-foreground font-body font-medium px-8 py-4 hover:border-gold hover:text-gold transition-colors"
          >
            Soy inversor
          </button>
        </div>
      </div>
    </div>
  </section>
);

const ValueProps = () => {
  const props = [
    {
      icon: Shield,
      title: "Capital permanente",
      desc: "No tenemos fecha de salida. Tu empresa tendrá un hogar para siempre.",
    },
    {
      icon: Users,
      title: "Líderes con talento",
      desc: "Desarrollamos el equipo directivo y atraemos talento para impulsar el crecimiento.",
    },
    {
      icon: TrendingUp,
      title: "Herramientas para crecer",
      desc: "Aportamos operaciones, tecnología y red de contactos para escalar tu negocio.",
    },
    {
      icon: Building2,
      title: "Libertad para operar",
      desc: "Respetamos la cultura y autonomía de cada empresa. Sumamos, no imponemos.",
    },
  ];

  return (
    <section id="tesis" className="section-light py-24 md:py-32">
      <div className="container mx-auto px-6">
        <p className="label-caps mb-4">Nuestra propuesta</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground max-w-2xl mb-16 leading-tight">
          Un hogar permanente. Talento. Herramientas. Libertad.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((p) => (
            <div key={p.title} className="group">
              <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                {p.title}
              </h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TargetProfile = () => (
  <section className="section-white py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="label-caps mb-4">Perfil de empresa objetivo</p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
            Buscamos PYMES extraordinarias en sectores B2B maduros.
          </h2>
          <p className="font-body text-lg text-foreground/70 leading-relaxed mb-8">
            Nuestra tesis de inversión se centra en empresas con EBITDA de 0,5–3M€,
            equipos consolidados y posición competitiva sólida. Sectores industriales,
            servicios profesionales y distribución B2B.
          </p>
          <button
            onClick={() => scrollTo("contacto")}
            className="inline-flex items-center gap-2 text-forest font-body font-semibold hover:text-gold transition-colors"
          >
            Habla con nosotros <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "EBITDA objetivo", value: "0,5 – 2M€" },
            { label: "Sectores", value: "B2B maduros" },
            { label: "Holding period", value: "Permanente" },
            { label: "Geografía", value: "España" },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-background p-6 border border-border/50">
              <p
                className="label-caps mb-2 text-copper"
                style={{ color: "hsl(var(--copper))" }}
              >
                {kpi.label}
              </p>
              <p className="font-heading text-2xl md:text-3xl font-medium text-foreground">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ForCompanies = () => (
  <section id="empresas" className="section-dark py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-caps mb-4">Para propietarios de empresas</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary-foreground leading-tight mb-8">
          ¿Preparado para dar el siguiente paso con tu empresa?
        </h2>
        <p className="font-body text-lg text-stone_brand font-light leading-relaxed mb-6">
          Para propietarios que quieren dar un paso atrás o explorar nuevas oportunidades,
          hacemos la transición fácil. Tu equipo da un paso adelante, tu empresa sigue creciendo,
          y tu legado perdura.
        </p>
        <p className="font-body text-lg text-stone_brand font-light leading-relaxed mb-10">
          No somos un fondo al uso. No vendemos a los 5 años. Somos el hogar definitivo de tu empresa.
        </p>
        <button
          onClick={() => scrollTo("contacto")}
          className="inline-flex items-center gap-2 bg-forest text-gem_white font-body font-medium px-8 py-4 hover:bg-forest/90 transition-colors"
        >
          Cuéntanos sobre tu empresa <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const ForInvestors = () => (
  <section id="inversores" className="section-light py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="label-caps mb-4">Para inversores</p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
          Capital paciente. Retornos compuestos.
        </h2>
        <p className="font-body text-lg text-foreground/70 leading-relaxed mb-6">
          GEM Capital ofrece exposición a un portafolio diversificado de PYMES españolas
          con gestión activa y visión de largo plazo. Nuestro modelo de fondo perpetuo
          permite que el interés compuesto trabaje a favor del inversor.
        </p>
        <p className="font-body text-lg text-foreground/70 leading-relaxed mb-10">
          Buscamos inversores alineados con nuestra filosofía: paciencia, rigor operativo
          y creación de valor real.
        </p>
        <button
          onClick={() => scrollTo("contacto")}
          className="inline-flex items-center gap-2 border-2 border-forest text-forest font-body font-medium px-8 py-4 hover:bg-forest hover:text-gem_white transition-colors"
        >
          Solicitar información <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "propietario" as "propietario" | "inversor",
    message: "",
    companyTrap: "", // honeypot
  });

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot anti-spam
    if (form.companyTrap) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Por favor, completa todos los campos.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: "Introduce un email válido.", variant: "destructive" });
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_h4sydo2",
        "template_ppqz8yj",
        {
          name: form.name, // {{name}}
          from_email: form.email, // {{from_email}} (Reply-To)
          contact_type: form.type === "propietario" ? "Propietario de empresa" : "Inversor",
          message: form.message,
          page_url: window.location.href,
        },
        "XbsyFfa19L1x7Lc1x"
      );

      setForm({
        name: "",
        email: "",
        type: "propietario",
        message: "",
        companyTrap: "",
      });

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast({
        title: "No se pudo enviar el mensaje.",
        description: "Inténtalo de nuevo en unos minutos.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="section-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="label-caps mb-4">Contacto</p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground leading-tight mb-8">
              Hablemos.
            </h2>
            <p className="font-body text-lg text-foreground/70 leading-relaxed">
              Ya seas propietario de una empresa o inversor, nos encantaría conocerte.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            {/* Honeypot hidden field */}
            <input
              type="text"
              value={form.companyTrap}
              onChange={(e) => setForm({ ...form, companyTrap: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Nombre
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  placeholder="Tu nombre"
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  placeholder="tu@email.com"
                  className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-forest transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">
                ¿Cómo nos contactas?
              </label>
              <div className="flex gap-4">
                {[
                  { value: "propietario", label: "Soy propietario de una empresa" },
                  { value: "inversor", label: "Soy inversor" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setForm({ ...form, type: opt.value as "propietario" | "inversor" })}
                    className={`flex-1 border px-4 py-3 font-body text-sm transition-colors ${
                      form.type === opt.value
                        ? "border-forest bg-forest/10 text-forest font-medium"
                        : "border-border text-foreground/60 hover:border-foreground/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">
                Mensaje
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                placeholder="Cuéntanos sobre tu empresa o tus objetivos de inversión..."
                className="w-full border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-forest transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 bg-forest text-gem_white font-body font-medium px-8 py-4 hover:bg-forest/90 transition-colors disabled:opacity-50"
            >
              {sending ? "Enviando..." : "Enviar mensaje"} <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8 pt-8 border-t border-border/50">
            <a
              href="mailto:info@gemcapital.es"
              className="flex items-center gap-3 font-body text-foreground hover:text-gold transition-colors"
            >
              <Mail className="w-5 h-5 text-gold" /> info@gemcapital.es
            </a>
            <a
              href="tel:+34900000000"
              className="flex items-center gap-3 font-body text-foreground hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5 text-gold" /> +34 627 838 932
            </a>
          </div>
          <div className="flex items-center justify-center gap-3 text-foreground/50">
            <MapPin className="w-4 h-4" />
            <span className="font-body text-sm">Barcelona, España</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="section-dark py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-baseline gap-1">
          <span className="font-heading text-xl font-semibold text-primary-foreground tracking-wide">
            GEM
          </span>
          <span className="font-body text-[10px] font-light text-stone_brand uppercase tracking-[0.25em]">
            Capital
          </span>
        </div>
        <p className="font-body text-sm text-stone_brand">
          © {new Date().getFullYear()} GEM Capital. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <TargetProfile />
      <ForCompanies />
      <ForInvestors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
