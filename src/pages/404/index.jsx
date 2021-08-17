

export default function Error404() {

  return (
    <>
      <article className="flex justify-end items-center text-white flex-wrap flex-col gap-3">
        <h1 className="text-5xl block">Volveremos pronto!</h1>
        <div>
          <p className="text-center">
            Disculpe las molestias, pero estamos realizando algunas tareas de
            mantenimiento en este momento. Si lo necesita, siempre puede 
            <span> contactarnos</span>, de lo contrario, en breve estaremos en
            línea.
          </p>
          <p>&mdash; El equipo de desarrollo</p>
        </div>
        <div>
          <img
            src="https://media2.giphy.com/media/kgNiKJdnpVQXUGQC1A/giphy.gif?cid=18e1a9c6kdtym1up6yr1kr5hf0jflhizq31lq8qesk3bqww1&rid=giphy.gif&ct=g"
            alt="working"
          />
        </div>
      </article>
    </>
  );
}
