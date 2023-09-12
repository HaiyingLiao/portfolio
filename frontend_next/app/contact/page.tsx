import { ContactForm, MyInfo } from "@/components/index";

const Contact = () => {
  return (
    <>
      <section className="bg-1 text-center">
        <h1 className="pageTitle">Get in Touch</h1>
        <p className="pageSubTitle mx-auto max-w-[658px]">
          Let&apos;s Collaborate on Your Next Project
        </p>
      </section>

      <section className="bg-2 flex flex-col-reverse justify-between gap-12 lg:flex-row">
        <MyInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
