import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="py-section-padding bg-surface-container px-gutter overflow-hidden relative"
      id="nosotros"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary-container/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="font-headline-xl text-headline-xl mb-8">
              Nuestra Autoridad en el Deporte
            </h2>
            <div className="space-y-6 text-on-surface-variant font-body-lg">
              <p>
                En{" "}
                <span className="font-bold text-primary-container">
                  Deporte Central
                </span>
                , entendemos que el deporte es más que un simple juego; es cultura,
                es pasión y es identidad. Nos hemos consolidado como el referente
                mediático para el fanático exigente que busca más allá del titular.
              </p>
              <p>
                Nuestro equipo de periodistas y analistas trabaja con un
                compromiso inquebrantable con la veracidad y el análisis profundo,
                brindando una perspectiva única sobre los eventos que definen el
                panorama deportivo nacional e internacional.
              </p>
            </div>
            <div className="flex gap-12 mt-10">
              <div>
                <p className="font-display-lg text-display-lg text-primary-container">
                  15+
                </p>
                <p className="font-label-bold text-on-surface-variant uppercase tracking-widest text-label-sm">
                  Años de Experiencia
                </p>
              </div>
              <div>
                <p className="font-display-lg text-display-lg text-primary-container">
                  24/7
                </p>
                <p className="font-label-bold text-on-surface-variant uppercase tracking-widest text-label-sm">
                  Cobertura Total
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              data-alt="A portrait-oriented lifestyle shot of a modern, professional newsroom dedicated to sports media. Editors are seen working at high-tech workstations with multiple monitors displaying sports data, live feeds, and editorial layouts. The atmosphere is focused and collaborative, with minimalist decor and clean lighting that reinforces the brand's corporate and professional identity. The color palette is composed of crisp whites and deep corporate blues."
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqclKeBuWh-QFgWIFMQoI377joffFzbgvOQJncp87edIAYhIPuSPvV2XiFbVI1WAsSOoBWYULFsbbk75opLGvkr_PDC-vA25Nuy8UN1rFLZE_qzxUI4p29jR_G066hX1TkNi_njF1iIOwd7ldhWeIIX-Xq5qZun83NM50a8NSpY1aJqSNvh8Ki9OR7dlJxoBzMdAqKe937Pgc8zNEOjB3K5rPe55NgB1ZwZS-nvVAmbojz-R8gicQJeQ')",
              }}
            ></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white border border-outline-variant rounded-lg flex items-center justify-center p-4">
            <Image
              alt="Seal"
              className="w-full h-full object-contain grayscale opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoHG5VDsXz1UAWZnuodi4HXPoK8nIrVgWMvtebTssOPfNZ-gcRizzKmmvaAWMFwCILf-_qSMRHG21lF5uzFNrpV2ov2DNFXrjCyxdorK8pP2jto7CXnTplq55GOV-ketBM8NX-rK8bnNIi7jROhcHBR48Z5DS7PAJ_tBEkX-p4CVaUa0yBS5INC7aYOv_H1DTl43npE72hpb6KtWEUM-3JMgKPF62lT9u-P76mU9gffkpBE738beb_j7IVUATZiOHPIdA"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
