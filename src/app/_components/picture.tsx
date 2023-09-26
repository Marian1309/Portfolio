import { memo } from 'react';
import type { FC } from 'react';

import { Me } from '@/assets/icons';

const Picture: FC = () => {
  return (
    <div
      className="order-1 mx-auto mb-[20px] h-[22rem] w-[18rem] animate-[morph_8s_ease-in-out_infinite] border-[2px] border-solid border-[#2d2e32] bg-cover bg-center bg-no-repeat transition-[all_1s_ease-in-out] lg:ml-12"
      style={{ backgroundImage: `url(${Me.src})` }}
    />
  );
};

export default memo(Picture);
