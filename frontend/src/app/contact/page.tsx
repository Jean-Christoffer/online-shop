import "./styles.css";
import Form from "../../components/uiComponents/Form";

export default function Contact() {
  return (
    <>
      <section className="flex flex-col align-center items-center justify-center h-full mt-16">
        <h1 className="text-4xl mt-5 mb-8">Message us!</h1>

        <Form />
      </section>
    </>
  );
}
