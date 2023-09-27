import type { NextPage } from 'next';
import Image from 'next/image';

import { Gmail, Telegram } from '@/assets/icons';

const ContactPage: NextPage = () => {
  return (
    <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Don&apos;t be shy! Hit me up! 👇</h1>

      <div className="flex flex-col items-start gap-x-6 gap-y-6 pt-10 sm:flex-row">
        <div className="flex items-center justify-center gap-x-2">
          <Image alt="gmail" height={40} src={Gmail} width={40} />

          <div>
            <h3 className="font-bold">Email</h3>
            <a
              className="transition-colors hover:text-royalBlue"
              href="https://mail.google.com/mail/u/0/#inbox?compose=SxfkdsGFPDxtcTVqbSgNvLmLNZfGdqZmrxVZftFvDDVfvDKrzLrLzXJgztjhXXxclnKHlgZGJFBNpkzXCgzTKGcVnCnfTxxXDWJWdtMtVbRjJKDbMbB"
            >
              pidchashymaryan@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center gap-x-2">
          <Image alt="telegram" height={40} src={Telegram} width={40} />

          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Telegram</h3>

            <a
              className="transition-colors hover:text-royalBlue"
              href="https://telegram.me/pidchashyi"
            >
              @pidchashyi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
