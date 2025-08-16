"use client";
import { useLanguage } from '../../shared-components/language/languageProvider';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
const Signup = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { name, emailPhone, password });
    if (name.trim() && emailPhone.trim()) {
      window.location.href = '/signin';
    } else {
      alert('Please fill in both Name and Email/Phone.');
    }
  };

  return (
    <main className="flex h-[calc(100vh-100px)] mt-[130px] mb-[200px] w-full">
      <div className="flex-1flex items-center justify-center">
        <div className="half-page-background-container">
          <Image
            src="/images/Side Image.png"
            alt="Phone and cart"
            width={920}
            height={900}
            className="object-cover object-left pt-17"
            priority
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5" />
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-100">
          <h1 className="text-5xl mt-45 mb-12">{t('createAccount')}</h1>
          <p className="mb-12">{t('enterDetails')}</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-12 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                placeholder={t('name')}
              />
            </div>
            <div>
              <input
                type="text"
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
                className="w-full mb-12 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                placeholder={t('emailPhone')}
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-12 border-b-2 border-gray-500 text-gray-700 focus:outline-none"
                placeholder={t('password')}
              />
            </div>
            <button
              type="submit"
              className="w-full p-4 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-200"
            >
              {t('createButton')}
            </button>
          </form>
          <button
            className="w-full p-3 border border-gray-300 flex items-center justify-center mt-4 mb-10"
          >
            <Image
              src="/images/icons8-google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2 "
            />
            {t('googleButton')}
          </button>
          <p className="mt-4 text-center">
            {t('alreadyHaveAccount')} <Link href="/authentication/signIn" className="text-blue-600 hover:underline ">{t('signIn')}</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
