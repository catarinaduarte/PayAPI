import React, {useCallback} from "react";
import ContactForm from "../../components/ContactForm";

const ContactFormContainer: React.FC = () => {
    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <ContactForm onSubmit={onSubmit} />
    );
};

export default ContactFormContainer;
