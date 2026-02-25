interface AboutProps {
  about: string;
}

export function About({ about }: AboutProps) {
  const paragraphs = about.split("\n\n");

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Обо мне
          </h2>
          <div className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
