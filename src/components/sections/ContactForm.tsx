import { useActionState } from 'react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS (call this once in your app)
// emailjs.init('YOUR_PUBLIC_KEY');

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type FormState = {
  success: boolean;
  errors: Record<string, string>;
  data?: Inputs;
};

const submitAction = async (
  _prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  const data: Inputs = {
    name: (formData.get('name') as string)?.trim() || '',
    email: (formData.get('email') as string)?.trim() || '',
    message: (formData.get('message') as string)?.trim() || '',
  };

  // Validation
  const errors: Record<string, string> = {};

  if (!data.name) {
    errors.name = 'Name is required';
  }

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/i.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  if (!data.message) {
    errors.message = 'Message is required';
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors, data };
  }

  try {
    // EmailJS integration
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
    }

    return { success: true, errors: {} };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      errors: { submit: 'Failed to send message. Please try again.' },
      data,
    };
  }
};

export const Contact = () => {
  const [state, action, isPending] = useActionState(submitAction, {
    success: false,
    errors: {},
  });

  return (
    <div
      id="contact"
      className="contact-form align-center mx-auto flex w-full flex-col justify-center gap-5 rounded-lg p-5 text-white lg:p-10"
    >
      <h1 className="text-3xl font-bold">Contact Me</h1>

      {state.success && (
        <div className="w-[90%] rounded-md bg-green-800 p-3 text-center text-white">
          Message sent successfully!
        </div>
      )}

      {state.errors.submit && (
        <div className="w-[90%] rounded-md bg-red-800 p-3 text-center text-white">
          {state.errors.submit}
        </div>
      )}

      <form action={action} className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            className="w-full rounded-md bg-gray-200 p-2 text-black"
            type="text"
            placeholder="Name"
            defaultValue={state.data?.name || ''}
            required
          />
          {state.errors.name && (
            <span className="text-red-500">{state.errors.name}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            className="w-full rounded-md bg-gray-200 p-2 text-black"
            type="email"
            placeholder="Email"
            defaultValue={state.data?.email || ''}
            required
          />
          {state.errors.email && (
            <span className="text-red-500">{state.errors.email}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="resize-vertical w-full rounded-md bg-gray-200 p-2 text-black"
            placeholder="Message"
            defaultValue={state.data?.message || ''}
            required
          />
          {state.errors.message && (
            <span className="text-red-500">{state.errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="button-outline mt-2 w-full px-5 py-2 transition-colors disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          {isPending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};
