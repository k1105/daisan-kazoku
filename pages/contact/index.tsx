import { Form } from "@/components/Form";
import Layout from "../layout";
import Script from "next/script";

const Contact = () => {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js?render=6LcaI9wqAAAAAO02R5zvMuo5N3KsnBnCWZyXDdf_"></Script>
      <Layout pageTitle="お問い合わせ">
        <Form />
      </Layout>
    </>
  );
};

export default Contact;
