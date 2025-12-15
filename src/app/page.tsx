import {
  Aperture,
  ArrowUpRight,
  Camera,
  Fingerprint,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "Adaptive Curation",
      description:
        "Prism understands context, lighting, and emotion—serving the right photo to the right audience in milliseconds.",
      accent: "AI Core",
      accentGradient: "linear-gradient(90deg, var(--accent-cyan) 0%, #7bffef 100%)",
      hoverGlow: "radial-gradient(circle at top right, rgba(74, 242, 234, 0.12), transparent 65%)",
    },
    {
      icon: ShieldCheck,
      title: "Encrypted Collectives",
      description:
        "Share privately within encrypted collectives. Control visibility, watermarking, and reuse rights with precision.",
      accent: "Secure Share",
      accentGradient: "linear-gradient(90deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.12) 100%)",
      hoverGlow: "radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 70%)",
    },
    {
      icon: Fingerprint,
      title: "Face ID Sync",
      description:
        "Neon-level facial recognition keeps models safe, blurring or flagging unauthorized usage in real time.",
      accent: "Face ID",
      accentGradient: "linear-gradient(90deg, var(--accent-pink) 0%, #ff7ab8 100%)",
      hoverGlow: "radial-gradient(circle at top right, rgba(239,169,182,0.18), transparent 65%)",
    },
  ];

  const pipelines = [
    {
      title: "Raw Capture",
      detail:
        "Upload straight from camera roll or tethered rigs—Prism ingests RAW, HEIF, and cinematic film scans.",
    },
    {
      title: "Neural Enhancement",
      detail:
        "Noise relief, tone rebalance, and color grading with non-destructive layers tuned to your style DNA.",
    },
    {
      title: "Audience Pulse",
      detail:
        "Predictive engagement scoring maps your drop to the optimal channel blend and release window.",
    },
    {
      title: "Signal Release",
      detail:
        "Deploy across social, web, and collector feeds with traceable smart links and live analytics.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Prism feels like having a creative director in the cloud. It knows which shots resonate before I do.",
      name: "Nova Vega",
      role: "Photographer & Creative Technologist",
    },
    {
      quote:
        "Our brand drops now feel cinematic. Prism handles security, rights, and delivery with serious polish.",
      name: "Kyren Labs",
      role: "Fashion Collective",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,230,143,0.08),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(239,169,182,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(74,242,234,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(14,14,14,0.8)_45%,rgba(14,14,14,0.95)_100%)]" />
      </div>

      <header className="relative z-20 flex items-center justify-between px-6 py-7 md:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] backdrop-blur">
            <Aperture className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[var(--muted)]">
              Prism
            </p>
            <p className="text-sm font-semibold text-white">
              Intelligent Photo Sharing
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          <a className="transition-colors hover:text-white" href="#vision">
            Vision
          </a>
          <a className="transition-colors hover:text-white" href="#features">
            Stack
          </a>
          <a className="transition-colors hover:text-white" href="#pipeline">
            Pipeline
          </a>
          <a className="transition-colors hover:text-white" href="#testimonials">
            Signals
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition-all hover:border-white/40 hover:text-[var(--accent)] md:block"
          >
            Request Access
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
          >
            Launch Prism
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 flex-col">
        <section
          id="hero"
          className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pb-24 pt-16 text-center md:px-16 md:pb-32 md:pt-24"
        >
          <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl md:h-96 md:w-96" />
          <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[var(--accent-cyan)]/10 blur-3xl md:h-96 md:w-96" />

          <div className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            Tech-Noir Minimal
          </div>

          <h1 className="max-w-4xl text-balance text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            Share light, shadow, and signal with{" "}
            <span className="bg-gradient-to-r from-white via-[var(--accent)] to-white bg-clip-text text-transparent">
              Prism
            </span>
            —the intelligent photo platform built for the future of creators.
          </h1>

          <p className="max-w-2xl text-pretty text-base text-[var(--muted)] sm:text-lg">
            Prism senses composition, emotion, and intent to help you orchestrate
            cinematic drops, encrypted releases, and AI-enhanced storytelling.
            All in a single darkroom that lives in the cloud.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(243,230,143,0.45)]"
            >
              Get Early Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-white/40 hover:text-[var(--accent-cyan)]"
            >
              Explore Stack
            </a>
          </div>

          <div className="flex w-full flex-col gap-6 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:flex-row md:items-center md:gap-8 md:p-8">
            <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-[calc(var(--radius-card)-0.5rem)] border border-white/10 bg-[#121212]/60 p-6 shadow-[inset_0_0_60px_rgba(255,255,255,0.04)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,230,143,0.12),transparent_65%)]" />
              <div className="relative flex flex-col items-center gap-3">
                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent-pink)]/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--accent-pink)]">
                  Face Mesh Secure
                </div>
                <Fingerprint className="h-16 w-16 text-[var(--accent-pink)]" strokeWidth={1.4} />
                <p className="max-w-sm text-sm text-[var(--muted)]">
                  Prism maps identities with privacy-first biometrics. Approve
                  collaborators, autoblur crowds, and protect talent rights on
                  every frame.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06]">
                  <Camera className="h-6 w-6 text-[var(--accent-cyan)]" strokeWidth={1.4} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-[var(--muted)]">
                    Live Insights
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Signal-to-noise optimized for every release
                  </p>
                </div>
              </div>
              <p className="text-sm text-[var(--muted)]">
                Neural models analyze composition, mood, and trend velocity to
                grade each photo with engagement predictions. Prism then
                orchestrates delivery with adaptive pacing and personalized
                viewing rooms.
              </p>
              <div className="grid w-full gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Drop Velocity
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">+212%</p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    avg. engagement lift across media-heavy releases
                  </p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-4 text-left">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Signal Clarity
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-white">94%</p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    reduction in repost noise through encrypted collectives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 md:px-16"
        >
          <div className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Precision-engineered for creators who move fast.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)] md:text-base">
                Each module in Prism&apos;s stack is tuned for contrast, clarity, and
                control—keeping the experience minimal while packing serious
                intelligence under the hood.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-cyan)]" strokeWidth={1.6} />
              <span>Neural Stack</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundImage: feature.hoverGlow }}
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.06]">
                  <feature.icon className="h-6 w-6 text-white" strokeWidth={1.4} />
                </div>
                <p
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-black"
                  style={{ backgroundImage: feature.accentGradient }}
                >
                  <span>{feature.accent}</span>
                </p>
                <h3 className="relative mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="relative mt-3 text-sm text-[var(--muted)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pipeline"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 md:px-16"
        >
          <div className="flex flex-col gap-3 text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              From lens to legend in four precise movements.
            </h2>
            <p className="max-w-2xl text-sm text-[var(--muted)] md:text-base">
              Prism handles the invisible layers so you can stay in the flow.
              Every upload is versioned, enhanced, and deployed with measurable
              signal clarity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {pipelines.map((stage, index) => (
              <div
                key={stage.title}
                className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#121212]/70 p-6 shadow-[inset_0_0_60px_rgba(255,255,255,0.03)] backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] text-sm font-semibold text-[var(--accent)]">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{stage.title}</p>
                    <p className="mt-3 text-sm text-[var(--muted)]">{stage.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-[var(--radius-card)] border border-white/10 bg-white/[0.02] p-6 backdrop-blur md:grid-cols-3">
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Realtime Sync
              </span>
              <p className="text-3xl font-semibold text-white">42ms</p>
              <p className="text-xs text-[var(--muted)]">
                average propagation across private collectives.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-b border-white/10 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Smart Compression
              </span>
              <p className="text-3xl font-semibold text-white">8×</p>
              <p className="text-xs text-[var(--muted)]">
                fidelity-preserving reduction with neural codecs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Availability
              </span>
              <p className="text-3xl font-semibold text-white">99.97%</p>
              <p className="text-xs text-[var(--muted)]">
                resilient edge distribution backed by encrypted nodes.
              </p>
            </div>
          </div>
        </section>

        <section
          id="vision"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 md:px-16"
        >
          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-white/10 bg-[#141414]/70 p-8 backdrop-blur">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-[var(--accent-cyan)]/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-[var(--accent-cyan)]">
                Signal Studio
              </div>
              <h3 className="text-3xl font-semibold text-white md:text-4xl">
                A cinematic darkroom engineered for the networked age.
              </h3>
              <p className="text-sm text-[var(--muted)] md:text-base">
                Prism blends the aesthetics of noir photography with neural
                intelligence. Hover states glow softly, typography is confident,
                and every module embraces negative space so your work—never the
                interface—commands attention.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Creator DNA
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Adaptive palettes
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Prism learns your grading signature to keep every drop on-brand.
                  </p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    Collaboration
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Live studio rooms
                  </p>
                  <p className="mt-2 text-xs text-[var(--muted)]">
                    Review, annotate, and approve in real time across time zones.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#0f0f0f]/80 p-8 backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,230,143,0.18),transparent_65%)]" />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Workflow className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.4} />
                  <p className="text-sm uppercase tracking-[0.4em] text-[var(--muted)]">
                    Drop Modes
                  </p>
                </div>
                <ul className="space-y-4 text-left text-sm text-[var(--muted)]">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-12 rounded-full bg-[var(--accent)]" />
                    Synchronize hero shots across web, app, and AR galleries with
                    a single release command.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-12 rounded-full bg-[var(--accent-cyan)]" />
                    Automate limited-run capsules with invite-only unlocks and live
                    redemption states.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-12 rounded-full bg-[var(--accent-pink)]" />
                    Issue provenance certificates and watermark overlays for high-value
                    collector editions.
                  </li>
                </ul>
                <a
                  href="#download"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all hover:border-white/40 hover:text-[var(--accent)]"
                >
                  View Release Templates
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="testimonials"
          className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 md:px-16"
        >
          <div className="flex flex-col gap-4 text-left md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Trusted by image-makers designing the future.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)] md:text-base">
                Early partners are turning Prism into their always-on studio assistant,
                from global campaigns to underground collectives.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)] backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[var(--accent-pink)]" strokeWidth={1.6} />
              Verified Signal
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-[var(--radius-card)] border border-white/12 bg-[#121212]/80 p-8 shadow-[inset_0_0_40px_rgba(255,255,255,0.03)] backdrop-blur"
              >
                <p className="text-lg text-white">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="download"
          className="relative mx-auto mb-24 w-full max-w-4xl overflow-hidden rounded-[var(--radius-card)] border border-white/10 bg-[#101010]/85 px-8 py-12 text-center backdrop-blur"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(243,230,143,0.16),transparent_70%)]" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[var(--muted)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Prism v0.9 Beta
            </div>
            <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">
              Join the invite wave and build your next release inside Prism.
            </h2>
            <p className="max-w-2xl text-sm text-[var(--muted)] md:text-base">
              Secure a slot in our phased rollout. We onboard in curated cohorts so
              every creator gets hands-on white glove support and tailored models.
            </p>
            <form className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="you@studio.com"
                className="h-12 w-full max-w-md rounded-full border border-white/10 bg-black/60 px-5 text-sm text-white placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/40"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(243,230,143,0.45)]"
              >
                Request Beta
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 bg-black/60 px-6 py-10 backdrop-blur md:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
              <Aperture className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.6} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Prism</p>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                Signal Crafted Imagery
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            <span>Manifesto</span>
            <span>Drop Kits</span>
            <span>Trust Center</span>
            <span>Changelog</span>
          </div>
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Prism Labs. All signals encrypted by default.
          </p>
        </div>
      </footer>
    </div>
  );
}
