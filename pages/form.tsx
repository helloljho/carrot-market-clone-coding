import { FieldErrors, useForm } from 'react-hook-form';

interface FormProps {
  username: string;
  email: string;
  password: string;
}
export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const onValid = (data: FormProps) => {};

  const onInvalid = (errors: FieldErrors) => {};

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'The user should  be loinger than 5 chars',
            value: 5,
          },
        })}
        type="text"
        placeholder="username"
      />
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com') ? '' : 'Gmail is now allowed',
          },
        })}
        type="email"
        placeholder="email"
      />
      {errors.email?.message}
      <input
        {...register('password', { required: 'Password is required' })}
        type="password"
        placeholder="password"
      />
      <input type="submit" value="create account" />
    </form>
  );
}
