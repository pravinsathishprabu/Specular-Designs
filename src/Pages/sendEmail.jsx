import emailjs from '@emailjs/browser';

const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_t9aetun',
      'template_4ni6utt',
      {
        from_name: formData.name,
        from_email: formData.email,
        from_mobile: formData.mobile,
        message: formData.message,
      },
      'user_7dsS6FK8hPcdBOPUro9LT'
    );
    console.log('Email sent:', result.text);
    return true;
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
};
