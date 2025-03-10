export default function Work() {
  const content = (
    <>
      <p className="max-w-[100ch]">
        I can't disclose or show the actual project or work that I was involved
        from my previous jobs. The project I was involed are{" "}
        <strong>
          TPMS(Trust portfolio Management System Bank application)
        </strong>
        , <strong>Employee management Application</strong>,{" "}
        <strong>Finance Application</strong>, and <strong>POS(UI)</strong>
      </p>
    </>
  );
  return (
    <section id="work" className="mx-40 min-h-[80vh]">
      <div className="text-center font-bold text-2xl my-4">
        <h2 className="underline underline-offset-8 text-[#2d64b0]">Works</h2>
      </div>
      <div className="flex justify-center">{content}</div>
      <div className="my-4">
        <h3 className="text-center text-xl font-semibold">Personal Projects</h3>
      </div>
      <div className="mt-4 mx-40 grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
        <div className="flex items-center justify-center border-1 h-40">1</div>
        <div className="flex items-center justify-center border-1 h-40">2</div>
        <div className="flex items-center justify-center border-1 h-40">3</div>
        <div className="flex items-center justify-center border-1 h-40">4</div>
      </div>
    </section>
  );
}
