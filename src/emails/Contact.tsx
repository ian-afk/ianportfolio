import { Body, Container, Head, Html, Text } from "@react-email/components";

interface ContactProps {
  name: string;
  email: string;
  message: string;
}

export default function Contact({ name, email, message }: ContactProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ backgroundColor: "#f9f9f9", fontFamily: "Arial, sans-serif" }}
      >
        <Container
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "5px",
          }}
        >
          <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
            New Contact Form Submission
          </Text>
          <Text>
            <strong>Name:</strong> {name}
          </Text>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong> {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
