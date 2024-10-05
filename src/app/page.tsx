"use-client"

export default function Home() {

  const onSubmit = () => {
    console.log("Formulario submetido")
  }

  return (
    <div>
      <form action={onSubmit} className="flex flex-col gap-2">
        <h4>Desenvolva seu personagem</h4>
        <input type="text" placeholder="Defina seu atributo" />

        <button className="p-2 rounded-md bg-slate-600">Submeter</button>
      </form>
    </div>
  );
}
