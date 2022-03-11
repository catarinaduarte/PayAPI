import React, {useEffect} from "react";
import styles from './style.module.scss';
import Button from "../Button";
import TextField from "../TextField";
import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import {useForm, Controller} from "react-hook-form";
import {SubmitHandler} from "react-hook-form/dist/types/form";

type IProps = {
    onSubmit: SubmitHandler<any>;
};

type ContactInputs = {
    name: string,
    email: string,
    company: string,
    title: string,
    message: string,
    receiveMessage: string,
};

enum ERROR_MESSAGE {
    EMPTY_FIELD = 'This field can’t be empty',
    INVALID_EMAIL = 'This field doesn\'t match email format',
};

const ContactForm: React.FC<IProps> = ({ onSubmit }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<ContactInputs>({
        defaultValues: {
            name: '',
            email: '',
            company: '',
            title: '',
            message: '',
            receiveMessage: 'false',
        },
    });

    useEffect(() => {
        console.log('Error:', errors);
    }, [errors]);

    return (
        <form className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
        >
            <Controller name={'name'}
                        control={control}
                        rules={{required: ERROR_MESSAGE.EMPTY_FIELD}}
                        render={({field}) => (
                            <TextField placeholder={'Name'}
                                       {...field}
                                       error={errors?.name?.message}
                            />
                        )}
            />
            <Controller name={'email'}
                        control={control}
                        rules={{
                            required: ERROR_MESSAGE.EMPTY_FIELD,
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: ERROR_MESSAGE.INVALID_EMAIL
                            },
                        }}
                        render={({field}) => (
                            <TextField type={'email'}
                                       placeholder={'Email Address'}
                                       {...field}
                                       error={errors?.email?.message}
                            />
                        )}
            />
            <Controller name={'company'}
                        control={control}
                        rules={{required: ERROR_MESSAGE.EMPTY_FIELD}}
                        render={({field}) => (
                            <TextField placeholder={'Company Name'}
                                       {...field}
                                       error={errors?.company?.message}
                            />
                        )}
            />
            <Controller name={'title'}
                        control={control}
                        rules={{required: ERROR_MESSAGE.EMPTY_FIELD}}
                        render={({field}) => (
                            <TextField placeholder={'Title'}
                                       {...field}
                                       error={errors?.title?.message}
                            />
                        )}
            />
            <Controller name={'message'}
                        control={control}
                        rules={{required: ERROR_MESSAGE.EMPTY_FIELD}}
                        render={({field}) => (
                            <TextArea placeholder={'Message'}
                                      {...field}
                                      error={errors?.message?.message}
                            />
                        )}
            />

            <Controller name={'receiveMessage'}
                        control={control}
                        render={({field}) => (
                            <CheckBox id={'receiveMessage'}
                                      {...field}
                            >
                                Stay up-to-date with company announcements and updates to our API
                            </CheckBox>
                        )}
            />

            <Button variants={'secondary'}
                    color={'dark'}
                    type={'submit'}
                    style={{
                        maxWidth: '152px',
                    }}
            >
                Submit
            </Button>
        </form>
    );
};

export default ContactForm;
