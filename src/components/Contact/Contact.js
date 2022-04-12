import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormTextArea,
} from "./Contact.styles";

const Contact = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Kurpie</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Write Us A Message</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel htmlFor="for">Title</FormLabel>
            <FormInput type="text" required></FormInput>
            <FormLabel htmlFor="for">Content</FormLabel>
            <FormTextArea required></FormTextArea>
            <FormButton type="submit">Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
