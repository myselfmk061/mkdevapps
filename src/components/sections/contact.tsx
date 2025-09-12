import { ContactForm } from '@/components/contact-form';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Get in Touch</h2>
          <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
