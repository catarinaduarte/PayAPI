import React, {FormHTMLAttributes} from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ScheduleDemoFormContainer: React.FC<FormHTMLAttributes<HTMLFormElement>> = ({ ...props }) => {
    return (
        <form {...props}>
            <Input name={'email'}
                   aria-label={'email'}
                   placeholder={'Enter email address'}
                   type={'email'}
            />
            <Button type={'submit'}>
                Schedule a Demo
            </Button>
        </form>
    );
};

export default ScheduleDemoFormContainer;
