import { FAQS } from "../seo/config";

function Faq() {
  return (
    <section className="bg-white py-16" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="faq-title" className="text-center text-3xl font-bold text-gray-900">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 space-y-5">
          {FAQS.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
